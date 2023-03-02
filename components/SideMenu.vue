<template>

<va-sidebar>
  <Logo v-model:url="logoUrl" v-model:title="logoTitle"/>
  <va-sidebar-item>
    <va-sidebar-item-content>
      <va-icon name="dashboard" />
      <!-- User can hide item with css if he wants -->
      <va-sidebar-item-title>Dashboard</va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>
  <va-sidebar-item active>
    <va-sidebar-item-content>
      <va-icon name="room" />
      <va-sidebar-item-title>Sidebar demo</va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>
  <va-sidebar-item >
    <va-sidebar-item-content>
      <va-icon name="loop" />
      <va-sidebar-item-title>Sidebar demo</va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>

</va-sidebar>
</template>


<script setup>
const logoUrl = ref('/img/logo.png');
// const logoUrl = ref('')
const logoTitle = ref('관리도구 샘플 프로젝트')
</script>