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
            <h6 class="va-h6">History</h6>
            <li>2023.05.12 - 기본 설정</li>
            <li>2023.05.12 - Notebooks목록 화면 및 등록화면</li>
            <li>2023.05.15 - Experiments, Pipeliens, Runs 목록화면 및 등록화면(팝업 제외)</li>
            <li>2023.05.16 - Runs 등록화면 팝업</li>
            <li>2023.05.17 - K8S Node목록 화면</li>
            <li>2023.06.01 - Notebook connect 붙임</li>
            <li>2023.06.02 - Notebook 등록기능, 삭제기능 추가</li>
            <li>2023.07.28 - Pipelines기능 추가</li>
            <li>2023.08.02 - Pipelines, Experiments, Runs 기능추가</li>
          </va-card-content>
        </va-card>
      </div>
    </div>

</div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})

const pageTitle = ref('Home')
</script>
<style>

</style>