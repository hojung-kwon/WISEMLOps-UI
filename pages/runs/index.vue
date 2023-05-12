<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <PageTitle :pageTitle="pageTitle"/>
        </template>
        <template #right>
          <ToolButton :toolButtons="toolButtons"/>
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col md12 xs12 lg12">
        <va-card outlined>
          <va-card-title>{{ pageTitle }}</va-card-title>
          <va-card-content>
            여기에 콘텐츠
          </va-card-content>
          <va-card-actions align="between">
            <div>여기에 action</div>
            <div>여기에 action</div>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </div> 
  </template>
  
  <script setup lang="ts">
  import { runsToolButton } from '~~/assets/data/ToolButton/runs'
  
  
  const toolButtons = ref(runsToolButton);
  
  const pageTitle = ref('Runs')
  
  
  
  </script>
  
  <style scoped>
  
  
  </style>
  