<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <va-button icon="arrow_back" preset="secondary" @click="pageBack" class="pr-4"></va-button>
          <PageTitle :pageTitle="pageTitle" />
        </template>
        <template #right>
          <ToolButton :toolButtons="toolButtons" />
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col xs12">
        <h5 class="px-4 va-h5">{{ id }}</h5>
      </div>
    </div>
    <div class="row mb-2">
      <div class="flex flex-col md12">
        <h6 class="va-h6 mb-2">기본정보</h6>
      </div>
      <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
        <va-input label="이름" v-model="pipeline_name" placeholder="pipeline name" background="backgroundPrimary" outline
          class="inputbox mb-2" readonly>
        </va-input>
        <va-input label="설명" v-model="pipeline_description" placeholder="description" background="backgroundPrimary"
          outline class="inputbox mb-2" readonly>
        </va-input>
      </div>
    </div>
    <div class="row">
      <div class="px-3 mt-3 flex flex-col xs12">
        <va-tabs v-model="curTab" class="px-3">
          <template #tabs>
            <va-tab v-for="tab in pipelineDetailTabs" :key="tab.id" :name="tab.id" @click="selectTab">
              {{ tab.title }}
            </va-tab>

          </template>
        </va-tabs>
        <div v-if="curTab == 'graph'">
          <GraphTab v-model="pipeline" />
        </div>

        <div v-if="curTab == 'yaml'">
          <YamlTab v-model="yaml" />
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

const yaml: any = ref([])
const graph = ref({
  "meta": {}
})

const curTab = ref('graph')

const version = route.query.version ? route.query.version.toString() : ''

// const details = ref({})

const details = await getPipelineDetails(id.value, version)
console.log(details.value?.result)

const pipeline_name = ref(details.value?.result.pipeline_name)
const pipeline_description = ref(details.value?.result.pipeline_description)
const pipeline = ref(details.value?.result)

const pageBack = () => {
  router.back()
}

const selectTab = async () => {
  // yaml.value= details.value?.result['yaml'];
}


onMounted(async () => {
  let pipelineVersion = version
  if (!pipelineVersion) {
    let pipelineVersions = await getPipelineVersions(id.value)
    pipelineVersion = pipelineVersions.value?.result['pipeline_versions'][0]['pipeline_version_id']
  }
  console.log(pipelineVersion)

  let versionDetail = await getPipelineVersionDetail(id.value, pipelineVersion);
  yaml.value = [JSON.stringify(ref(versionDetail.value?.result.pipeline_spec).value)]
})
</script>

