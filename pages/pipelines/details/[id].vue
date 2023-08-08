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
      <h5 class="px-4 va-h5">{{ id }}</h5>
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
            v-for="tab in pipelineDetailTabs"
            :key="tab.id"
            :name="tab.id"
            @click="selectTab"
          >
            {{ tab.title }}
          </va-tab>
        
        </template>
      </va-tabs>
      <div v-if="curTab=='graph'">
        <GraphTab v-model="graph" />
      </div>

      <div v-if="curTab=='yaml'">
        <YamlTab v-model="yaml"/>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import GraphTab from '~~/components/pipelines/graphTab.vue'
import YamlTab from '~~/components/notebooks/yamlTab.vue';

import { pipelineDetailToolButton } from '~~/assets/data/ToolButton/pipelines'

const route = useRoute()
const router = useRouter()
const pageTitle = ref('Pipelines')
const id = ref(route.params.id);
const toolButtons = ref(pipelineDetailToolButton)

const yaml:any = ref([])
const graph = ref({
  "meta" : {}
})

const curTab = ref('graph')

const version = route.query.version ? route.query.version.toString() : ''

// const details = ref({})

const details = await getPipelineDetails(id.value, version)

const pageBack = () => {
  router.back()
}

const selectTab = async () => {
  // yaml.value= details.value?.result['yaml'];
}


onMounted(async() =>  {
  let pipelineVersion = version
  if (!pipelineVersion) {
    pipelineVersion = details.value?.result['default_version']['id']
  }
  let template = await getPipelineVersionTemplate(pipelineVersion);
  yaml.value = [ template.value?.result['template'].toString() ]
  
})
</script>

