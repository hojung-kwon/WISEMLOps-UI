<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <PageTitle :pageTitle="pageTitle"/>
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col md12 xs12 lg12">
        <va-card outlined>
          <va-card-title>{{ pageTitle }}</va-card-title>
          <va-card-content>
            <va-data-table
              :items="nodes ? nodes.result : []"
              :no-data-html="noItemText"
              :no-data-filtered-html="noItemText"
              :columns="nodeColumns"
              :per-page="pageSize"
              :current-page="currentPage"
              :filter="filterKeyword" 
              sticky-header
            >
              <template #cell(create_date)="{ rowIndex, rowData }">
                <div>
                  {{ new Date(rowData.create_date).toLocaleString() }}
                </div>
              </template>
              <template #bodyAppend>
                <tr>
                  <td colspan="8">
                    <div class="page-view">
                      <va-pagination 
                        v-model="currentPage" 
                        :pages="pagenationView(pageSize, nodes?.result)" 
                        :visible-pages="5"
                        gapped
                      />
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
</template>

<script setup lang="ts">
const pageTitle = ref('Cluster Nodes')

const currentPage = ref(1)
const filterKeyword = ref("")
const nodes = await getNodes();

</script>