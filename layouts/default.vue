<template>
  <div>
    <div class="main-body">
      <div class="side-menu">
       <SideMenu />
      </div>
      <div class="content body-height">
        <va-navbar color="primary" class="main-nav" >
          <template #right>
            <va-navbar-item>Account</va-navbar-item>
          </template>
        </va-navbar>
        <div class="container body-height">
          <slot />
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>

useHead({
  title: '기본페이지'
})
</script>

<style scoped>
  .main-body {
    display: flex;
  }
  .side-menu {
    /* height: calc(100vh - 56px); */
    height: 100vh;
  }
  .main-nav {
    height: 56px;
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