<template>
  <div>
      <h1>DataTable</h1>

      <va-data-table :items="datas" :no-data-html="noItemText"
                     :no-data-filtered-html="noItemText"
                     :columns="columns" :per-page="pageSize" :current-page="currentPage"
                     :filter="filterKeyword" @filtered="filter = $event.items"
                     :loading="loading" sticky-header>

          <template #cell(detail)="{ rowIndex, rowData }">
              <va-button preset="secondary">
                  <va-icon name="search" v-on:click="getDetail(rowData)"></va-icon>
              </va-button>
          </template>

          <!--   페이징 UI   -->
          <template #bodyAppend>
              <tr>
                  <td colspan="7">
                      <div class="page-view">
                          <va-pagination v-model="currentPage" :pages="pageView()" style="display: table; margin: auto;"/>
                      </div>
                  </td>
              </tr>
          </template>
      </va-data-table>
  </div>
</template>

<script setup lang="ts">
import { DataTableItem } from "vuestic-ui";

onMounted( () => {
    createData(5);
});

const loading: boolean = false;
const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";
const pageView = () => {
    return pageSize && pageSize !== 0 ? Math.ceil(datas.value.length / pageSize) : datas.value.length;
}

const COLUMNS_NAME = ref(["name", "age", "detail"]);
const columns = [
    {key: COLUMNS_NAME.value[0], label: "이름", sortable: true},
    {key: COLUMNS_NAME.value[1], label: "나이", sortable: true},
    {key: COLUMNS_NAME.value[2], label: "상세정보", sortable: false}
];
const datas: globalThis.Ref<DataTableItem> = ref([]);

const createData = (size: number) => {
    for (let idx=0; idx<size; idx++) {
        let json: any = {};
        json[COLUMNS_NAME.value[0]] = "TEST_NAME_" +idx;
        json[COLUMNS_NAME.value[1]] = Math.ceil(Math.random() % 100);
        json[COLUMNS_NAME.value[2]] = "TEST_NAME_" +idx;
        datas.value.push(json);
    }
}

const getDetail = (rowData: any) => {
    alert(rowData[COLUMNS_NAME.value[2]]);
}

</script>

<style scoped>
h1 {
    font-size: 20pt;
    margin-bottom: 20px;
}
</style>