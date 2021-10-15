<template>
  <CvHeader aria-label="Carbon tutorial">
    <CvSkipToContent href="#main-content">Ir para conteúdo</CvSkipToContent>
    <cv-header-name to="/" prefix="IBM">Challenge</cv-header-name>
    <cv-header-nav>
      <CvHeaderMenuItem to="/login">Entrar</CvHeaderMenuItem>
      <CvHeaderMenuItem to="/home">Início</CvHeaderMenuItem>
    </cv-header-nav>
    <template v-slot:header-global>
      <cv-header-global-action aria-label="Notifications">
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="User avatar">
        <UserAvatar20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="App switcher">
        <AppSwitcher20 />
      </cv-header-global-action>
    </template>
  </CvHeader>
</template>

<script>
import { CvHeader, CvHeaderMenuItem, CvSkipToContent } from '@carbon/vue';
import { Notification20, UserAvatar20, AppSwitcher20 } from '@carbon/icons-vue';

export default {
  name: 'Header',
  components: {
    CvHeader,
    CvHeaderMenuItem,
    CvSkipToContent,
    Notification20,
    UserAvatar20,
    AppSwitcher20
  }
};
</script>
