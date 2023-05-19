<template>
  <div>
    <div class="main-body">
      <div class="side-menu">
       <SideMenu v-model:menuItems="sideMenu" />
      </div>
      <div class="content body-height">
        <NavBar :userId="userId" :userName="userName"/>
        <div class="container body-height">
          <slot />
        </div>
      </div>
    </div>

  </div>
</template>


<script setup lang="ts">

import { sideMenuData } from '~~/assets/data/sidemenu';
const config = useAppConfig();
const sideMenu = ref(sideMenuData);

const userId = ref('admin');
const userName = ref('관리자');


useHead({
  title: '기본페이지'
})


const { data:namespaces } = await useFetch<ResponseBody>('/cluster/namespaces', {
  method: 'GET',
  baseURL: config.apiServer
})


const namespaceOption = ref(namespaces.value?.result)

const namespace = ref(!localStorage.getItem('namespace')?localStorage.setItem('namespace', 'default'): localStorage.getItem('namespace'))

const selectNamespace = (e:any) => {
  localStorage.setItem('namespace', e)  
}

</script>

<style scoped>
  .main-body {
    display: flex;
  }
  .side-menu {
    /* height: calc(100vh - 56px); */
    height: 100vh;
  }
  
  .content {
    width: 100%;
  }
  .container {
    padding: 12px;
  }
  .body-height {
    height: calc(100vh - 56px);
  }

</style>