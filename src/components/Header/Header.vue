<template>
  <CvHeader aria-label="Carbon tutorial">
    <CvSkipToContent href="#main-content">Ir para conteúdo</CvSkipToContent>
    <cv-header-name to="/" prefix="IBM">Challenge</cv-header-name>
    <template v-slot:header-global>
      <cv-header-global-action aria-label="User avatar">
        <UserAvatar20 />
      </cv-header-global-action>
    </template>
  </CvHeader>
</template>

<script>
import { CvHeader, CvSkipToContent } from '@carbon/vue';
import { UserAvatar20 } from '@carbon/icons-vue';

export default {
  name: 'Header',
  components: {
    CvHeader,
    CvSkipToContent,
    UserAvatar20
  }
};
</script>
