<template>
  <CvHeader aria-label="header">
    <CvSkipToContent href="#main-content">Ir para conteúdo</CvSkipToContent>
    <CvHeaderName to="/" prefix="IBM">Challenge</CvHeaderName>
    <template v-slot:header-global v-if="user.logged">
      <CvHeaderGlobalAction
        aria-label="Logout"
        aria-controls="user-panel"
        @click="actionLogout"
        label="Sair"
        tipPosition="bottom"
        tipAlignment="end"
      >
        <Logout20 />
      </CvHeaderGlobalAction>
    </template>
  </CvHeader>
</template>

<script>
import {
  CvHeader,
  CvHeaderName,
  CvHeaderGlobalAction,
  CvSkipToContent
} from '@carbon/vue';
import { Logout20 } from '@carbon/icons-vue';

export default {
  name: 'Header',
  components: {
    CvHeader,
    CvHeaderName,
    CvHeaderGlobalAction,
    CvSkipToContent,
    Logout20
  },
  methods: {
    actionLogout() {
      window.location.href = `${process.env.VUE_APP_API_URL}/auth/logout`;
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
