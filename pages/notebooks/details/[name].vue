<template>
<div>
  <div class="row">
    <va-navbar color="backgroundPrimary">
      <template #left>
        <va-button icon="arrow_back" preset="secondary" @click="pageBack" class="pr-4"></va-button>
        <PageTitle :pageTitle="pageTitle"/>
      </template>
      <template #right>
        <ToolButton :toolButtons="toolButtons"/>
      </template>      
    </va-navbar>
  </div>
  <div class="row">
    <div class="px-3 flex flex-col xs12">
      <h5 class="px-4 va-h5">{{ notebookName }}</h5>
    </div>
  </div>
  <div class="row">
    <div class="px-3 mt-3 flex flex-col xs12">
      <va-tabs
        v-model="curTab"
        class="px-3"
      >
        <template #tabs>
          <va-tab
            v-for="tab in notebookDetailTabs"
            :key="tab.id"
            :name="tab.id"
            @click="selectTab"
          >
            {{ tab.title }}
          </va-tab>
        
        </template>
      </va-tabs>
      <div v-if="curTab=='overview'">
        <OverviewTab/>
      </div>
      <div v-if="curTab=='logs'">
        <LogsTab />
      </div>
      <div v-if="curTab=='event'">
        <EventTab />
      </div>
      <div v-if="curTab=='yaml'">
        <YamlTab v-model="yaml"/>
      </div>
    </div>
  </div>

</div>
</template>
<script setup lang="ts">
import OverviewTab from '~~/components/notebooks/overviewTab.vue';
import LogsTab from '~~/components/notebooks/logsTab.vue';
import EventTab from '~~/components/notebooks/eventTab.vue';
import YamlTab from '~~/components/notebooks/yamlTab.vue';
import { notebookDetailToolButton } from '~~/assets/data/ToolButton/notebooks'

const route = useRoute()
const router = useRouter()
const pageTitle = ref('Notebook Details')
const notebookName = ref(route.params.name);
const toolButtons = ref(notebookDetailToolButton)

const details = await getNotebookDetails(localStorage.getItem('namespace'), notebookName.value)

const yaml = ref([])

const pageBack = () => {
  router.back()
}

const curTab = ref('overview')



const selectTab = () => {
  yaml.value= details.value?.result[0]['yaml'];
}

</script>