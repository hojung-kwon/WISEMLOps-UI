<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <va-button icon="arrow_back" preset="secondary" @click="pageBack" class="pr-4"></va-button>
          <PageTitle :pageTitle="pageTitle"/>
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col xs12">
        <va-card outlined>
          <va-card-title>{{ pageTitle }}</va-card-title>
          <va-card-content>
            <Workflow ref="workflow" :pipeline="pipeline" @savePipeline="savePipeline"/>
          </va-card-content>
          <va-card-actions>
            <va-button @click="getPipeline">저장</va-button>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const router = useRouter();
const pageTitle = ref('Pipeline 등록')

const workflow=ref();
const pipeline=ref({"nodes":[{"type":"toolbar","data":{"toolbar":{"position":"right"},"attribute":{"inputParams":"lklk","outputParams":"","args":"","command":"","image":""}},"events":{},"id":"random_node-1","label":"로딩","position":{"x":-62.408754988183716,"y":75.07897221397604}},{"type":"toolbar","data":{"toolbar":{"position":"right"},"attribute":{"inputParams":"","outputParams":"","args":"","command":"","image":""}},"events":{},"id":"random_node-2","label":"저장","position":{"x":-80.06472588815791,"y":196.49586534634363}}],"edges":[{"sourceHandle":"random_node-1__handle-bottom","targetHandle":"random_node-2__handle-top","type":"custom","source":"random_node-1","target":"random_node-2","data":{"text":"TEST"},"events":{},"id":"dndedge_1688536756340","markerEnd":"arrowclosed","sourceX":12.591245011816284,"sourceY":149.07897221397604,"targetX":-5.064725888157909,"targetY":192.49586534634363}],"position":[294.31750997636743,28.34205557204791],"zoom":2}); // 서버에서 읽어온 파이프라인 JSON값

const pageBack = () => {
  router.back()
}

const getPipeline = () => {
  workflow.value.getPipeline()
}

const savePipeline = (e:any) => {
  console.log(JSON.stringify(e))
  //여기서 post로 저장
}

</script>