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
        <h5 class="px-4 va-h5">{{ experiment_id }}</h5>
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
              <va-data-table :items="runs ? runs.result.runs : []" :no-data-html="noItemText"
                :no-data-filtered-html="noItemText" :columns="runColumns" :per-page="pageSize" :current-page="currentPage"
                :filter="filterKeyword" sticky-header>
                <template #cell(name)="{ rowIndex, rowData }">
                  <div class="table-cell" :title="rowData.name">
                    {{ rowData.name }}
                  </div>
                </template>
                <template #cell(experiment)="{ rowIndex, rowData }">
                  <div v-for="item in rowData.resource_references">
                    <div v-if="item.key.type == 'EXPERIMENT'">
                      {{ item.name }}
                    </div>
                  </div>
                </template>
                <template #cell(pipeline_version)="{ rowIndex, rowData }">
                  <div v-for="item in rowData.resource_references">
                    <div class="table-cell" :title="item.name" v-if="item.key.type == 'PIPELINE_VERSION'">
                      {{ item.name }}
                    </div>
                  </div>
                </template>
                <template #cell(created_at)="{ rowIndex, rowData }">
                  <div>
                    {{ new Date(rowData.created_at).toLocaleString() }}
                  </div>
                </template>
                <template #cell(scheduled_at)="{ rowIndex, rowData }">
                  <div>
                    {{ new Date(rowData.created_at).toLocaleString() }}
                  </div>
                </template>
                <template #cell(details)="{ rowIndex, rowData }">
                  <div>
                    <va-button size="small" class="px-2" @click="details(rowData.run_id)">확인</va-button>
                  </div>
                </template>
                <template #bodyAppend>
                  <tr>
                    <td colspan="8">
                      <div class="page-view">
                        <va-pagination v-model="currentPage" :pages="pagenationView(pageSize, runs?.result.runs)"
                          :visible-pages="5" gapped />
                      </div>
                    </td>
                  </tr>
                </template>
              </va-data-table>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { experimentsDetailToolButton } from '~~/assets/data/ToolButton/experiments'



const route = useRoute()
const router = useRouter()
const pageTitle = ref('Experiment')
const experiment_id = ref(route.params.id);
const toolButtons = ref(experimentsDetailToolButton)

const curTab = ref('active')

const currentPage = ref(1)
const filterKeyword = ref('')


const pageBack = () => {
  router.back()
}


const selectTab = async () => {

}

const runs = await getRuns(experiment_id.value);

const details = (id: string) => {
  navigateTo(`/runs/details/${id}`)
}


</script>