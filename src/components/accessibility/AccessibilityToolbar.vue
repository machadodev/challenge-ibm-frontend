<template>
  <div class="fab">
    <span class="fab-action-button" @click="showToolbar = !showToolbar">
      <i class="material-icons fab-action-button-icon">
        accessibility
      </i>
    </span>
    <transition name="fade">
      <div class="accessibility-toolbar" v-if="showToolbar">
        <ul class="accessibility-items">
          <li class="accessibility-item">
            <a
              class="accessibility-menu-item"
              :data-tooltip="invertColorsText"
              v-bind:class="{ active: accessibilityStates.inverted }"
              @click="toggleState('inverted')"
              :aria-label="invertColorsText"
            >
              <i class="material-icons accessibility-menu-item-icon">
                {{
                  accessibilityStates.inverted
                    ? 'invert_colors'
                    : 'invert_colors_off'
                }}
              </i>
            </a>
          </li>
          <li>
            <a
              class="accessibility-menu-item"
              :data-tooltip="highlightLinksText"
              v-bind:class="{ active: accessibilityStates.highlighted }"
              @click="toggleState('highlighted')"
              :aria-label="highlightLinksText"
            >
              <i class="material-icons accessibility-menu-item-icon">
                {{
                  accessibilityStates.highlighted
                    ? 'highlight'
                    : 'highlight_off'
                }}
              </i>
            </a>
          </li>
          <li>
            <a
              class="accessibility-menu-item"
              :data-tooltip="accessibileFontSizeText"
              v-bind:class="{ active: accessibilityStates.accessibileFontSize }"
              @click="toggleState('accessibileFontSize')"
              :aria-label="accessibileFontSizeText"
            >
              <i class="material-icons accessibility-menu-item-icon">
                format_size
              </i>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccessibilityToolbar',
  props: {
    invertColorsText: {
      type: String,
      default: 'Invert Colors'
    },
    highlightLinksText: {
      type: String,
      default: 'Highlight Links'
    },
    accessibileFontSizeText: {
      type: String,
      default: 'Increase Text Size'
    }
  },
  data() {
    return {
      accessibilityStates: {
        inverted: false,
        highlighted: false,
        accessibileFontSize: false
      },
      showToolbar: false
    };
  },
  methods: {
    toggleState(state) {
      this.accessibilityStates[state] = !this.accessibilityStates[state];
      this.applyState(state);
    },
    applyState(state) {
      if (state === 'inverted') {
        this.resetHighlightLinks();
        this.accessibilityStates[state]
          ? document.body.classList.add('accessibility-contrast')
          : document.body.classList.remove('accessibility-contrast');
      } else if (state === 'highlighted') {
        this.resetInvertContrast();
        this.hightlightLinks();
      } else if (state === 'accessibileFontSize') {
        this.accessibilityStates[state]
          ? document.body.classList.add('accessibility-font')
          : document.body.classList.remove('accessibility-font');
      }
    },
    resetInvertContrast() {
      this.accessibilityStates.inverted = false;
      document.body.classList.remove('accessibility-contrast');
    },
    resetHighlightLinks() {
      this.accessibilityStates.highlighted = false;
      this.hightlightLinks();
    },
    hightlightLinks() {
      for (let link of this.links) {
        if (!link.classList.contains('accessibility-menu-item')) {
          this.accessibilityStates.highlighted
            ? link.classList.add('accessibility-highlight-link')
            : link.classList.remove('accessibility-highlight-link');
        }
      }
    },
    invertContrast(percent) {
      document.body.style.setProperty('filter', `invert(${percent})`);
    }
  },
  computed: {
    links() {
      return [...document.querySelectorAll('a')];
    }
  },
  mounted() {
    if (sessionStorage.getItem('accessibility-settings')) {
      this.accessibilityStates = JSON.parse(
        sessionStorage.getItem('accessibility-settings')
      );
      for (var state in this.accessibilityStates) {
        if (this.accessibilityStates[state]) this.applyState(state);
      }
    }
  },
  watch: {
    accessibilityStates: {
      handler() {
        sessionStorage.setItem(
          'accessibility-settings',
          JSON.stringify(this.accessibilityStates)
        );
      },
      deep: true
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 105%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 105%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: ' ';
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.accessibility-items {
  list-style-type: none;
}
.accessibility-toolbar {
  width: 180px;
  position: absolute;
  right: 65px;
  bottom: 50%;
  margin-bottom: 5px;
}
.accessibility-menu-item-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.accessibility-menu-item {
  border-radius: 100px;
  border: 2px solid #2196f3;
  text-align: center;
  float: left;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  background: white;
  color: black;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.accessibility-menu-item:hover {
  background: #2196f3;
}

.active {
  background-color: #2196f3;
}
</style>

<style>
.accessibility-font {
  font-size: 1.25rem;
}
/* .accessibility-contrast {
  
  } */
.accessibility-highlight-link {
  padding: 3px;
  background-color: black !important;
  color: yellow !important;
  text-decoration: underline !important;
}
</style>

<style scoped>
.fab {
  position: fixed;
  width: 56px;
  right: 1vw;
  bottom: 4vh;
  z-index: 999;
}
.fab-action-button {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 56px;
  height: 56px;
  background-color: #2196f3;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.fab-action-button-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 37px !important;
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
