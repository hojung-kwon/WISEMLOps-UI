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
            workflow component를 이용해 pipeline 작성
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const router = useRouter();
const pageTitle = ref('Pipeline 등록')

const pageBack = () => {
  router.back()
}
</script>