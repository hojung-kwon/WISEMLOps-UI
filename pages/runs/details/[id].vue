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
    <div class="row">
      <div class="px-3 mt-3 flex flex-col xs12">
        <va-tabs v-model="curTab" class="px-3">
          <template #tabs>
            <va-tab v-for="tab in runDetailTabs" :key="tab.id" :name="tab.id" @click="selectTab">
              {{ tab.title }}
            </va-tab>

          </template>
        </va-tabs>
        <div v-if="curTab == 'graph'">
          <GraphTab v-model="pipeline" />
        </div>
        <div v-if="curTab == 'runOutput'">
          <RunOutputTab v-model="runOutput" />
        </div>
        <div v-if="curTab == 'config'">
          <ConfigTab v-model="config" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import GraphTab from '~~/components/runs/graphTab.vue'
import RunOutputTab from '~~/components/runs/runOutputTab.vue'
import ConfigTab from '~~/components/runs/configTab.vue'

import { runDetailToolButton } from '~~/assets/data/ToolButton/runs'


const route = useRoute()
const router = useRouter()
const pageTitle = ref('Runs')
const id = ref(route.params.id);
const toolButtons = ref(runDetailToolButton)



const graph = ref({
  "meta": {}
})
const runOutput = ref({})
const config = ref([])

const curTab = ref('graph')

const run_details = await getRunDetails(id.value)

const pipeline_details = await getPipelineDetails(
  run_details.value?.result.pipeline_version_reference.pipeline_id,
  run_details.value?.result.pipeline_version_reference.pipeline_version_id
)

const pipeline = ref(pipeline_details.value?.result)

const selectTab = () => {
  config.value = run_details.value?.result
}

const pageBack = () => {
  router.back()
}

</script>
