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
  </div>
  <div class="row">
    <div class="px-3 mt-3 flex flex-col xs12">
      <va-tabs v-model="curTab" class="px-3">
        <template #tabs>
          <va-tab v-for="tab in experimentDetailTabs" :key="tab.id" :name="tab.id" @click="selectTab">
            {{ tab.title }}
          </va-tab>
        </template>
      </va-tabs>
      <div v-if="curTab == 'active'">
        <va-card outlined>
          <va-card-content>
            <va-data-table>

            </va-data-table>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { experimentsDetailToolButton } from '~~/assets/data/ToolButton/experiments'

const route = useRoute()
const router = useRouter()
const pageTitle = ref('Experiment')
const id = ref(route.params.id);
const toolButtons = ref(experimentsDetailToolButton)

const curTab = ref('active')


const pageBack = () => {
  router.back()
}


const selectTab = async () => {

}
// const details = await getExperimentDetails(id.value)

</script>