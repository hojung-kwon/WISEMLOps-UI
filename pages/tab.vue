<template>
  <div>
      <h1>Tab</h1>

      <tabs :columns="new Tab().tabList" @useTab="new Tab().setTabTitle"></tabs>
      <div id="wisenut-tab-contents">
          <h2>{{ selectTab }}</h2>
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
h1 {
    font-size: 20pt;
    margin-bottom: 20px;
}
#wisenut-tab-contents {
    margin: 20px;
}
</style>