<template>
  <div>
      <tabs :columns="new Tab().tabList" @useTab="new Tab().setTabTitle"></tabs>
      <div id="wisenut-tab-contents">
          <h1>{{ selectTab }}</h1>
      </div>
  </div>
</template>

<script setup lang="ts">
interface COLUMNS {
    icon: string,
    title: string
};

const selectTab: any = ref("Menu 1");

class Tab {

    tabList: COLUMNS[] = [
        {icon: "home", title: "Menu 1"},
        {icon: "travel", title: "Menu 2"},
        {icon: "pointer", title: "Menu 3"}
    ];

    setTabTitle = (value: any) => {
        selectTab.value = value;
    }
}
</script>

<style scoped>
#wisenut-tab-contents {
    margin: 20px;
}
</style>