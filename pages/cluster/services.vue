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
              :items="services ? services.result : []"
              :no-data-html="noItemText"
              :no-data-filtered-html="noItemText"
              :columns="serviceColumns"
              :per-page="pageSize"
              :current-page="currentPage"
              :filter="filterKeyword" 
              sticky-header
            >
              <template #bodyAppend>
                <tr>
                  <td colspan="8">
                    <div class="page-view">
                      <va-pagination 
                        v-model="currentPage" 
                        :pages="pagenationView(pageSize, services?.result)" 
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
const { $bus } = useNuxtApp();
const pageTitle = ref('Services')

const currentPage = ref(1)
const filterKeyword = ref("")

const services = await getServices(localStorage.getItem('namespace'))
$bus.$on('namespace', async ( data:string ) => {
  services.value = (await getServices(localStorage.getItem('namespace'))).value
})

</script>