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
          <div class="row mb-2">
            <div class="flex flex-col md12">
              <h6 class="va-h6 mb-2">기본정보</h6>
            </div>
            <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
              <va-radio
                v-for="(option, index) in pipelineTypeOptions"              
                :key="index"
                v-model="formValues.pipelineType"
                :option="option.value"
                :label="option.text"
                class="mb-2"
              />
              <va-input
                label="이름"
                v-model="formValues.pipelineName"
                placeholder="pipeline name"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              >
              </va-input>
              <va-input
                label="설명"
                v-model="formValues.descriptiton"
                placeholder="description"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              >
              </va-input>
              <va-radio
                v-for="(option, index) in uploadTypeOptions"              
                :key="index"
                v-model="formValues.uploadType"
                :option="option.value"
                :label="option.text"
                class="mb-2"
              />
            </div>
            <div v-if="formValues.uploadType == 'file'" class="flex flex-col xl8 lg10 md12 sm12 xs12">
              <va-file-upload 
                  v-model="formValues.uploadFile" 
                  dropzone 
                  file-types="yaml, yml"
                  type="single"
              />
            </div>
            <div v-else-if="formValues.uploadType == 'url'" class="flex flex-col xl8 lg10 md12 sm12 xs12">
              <va-input
                label="Package URL"
                v-model="formValues.packageUrl"
                placeholder=""
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              />
            </div>
            <div v-else>
              <span></span>
            </div>
          </div>
        </va-card-content>
        <va-card-actions>
          <va-button @click="addPipeline">등록</va-button>
          <va-button preset="secondary" border-color="secondary" @click="pageBack">취소</va-button>
        </va-card-actions>
      </va-card>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">

const router = useRouter();
const pageTitle = ref('파이프라인 업로드')

const formValues = ref({
  pipelineType: 'NewPipeline',
  pipelineName: '',
  descriptiton: '',
  uploadType: 'file',
  uploadFile: '',
  packageUrl: ''
})


const pipelineTypeOptions = ref([
  { text: '새 파이프라인 업로드', value: 'NewPipeline'},
  { text: '기존 파이프라인에 새 버전 업로드', value: 'NewVersion'},
])

const uploadTypeOptions = ref([
  { text: '파일 업로드', value: 'file'},
  { text: 'URL에서', value: 'url'},
])

const pageBack = () => {
  router.back()
}

const addPipeline = () => {
  console.log('파이프라인 등록')
}
</script>

<style>
.inputbox {
  width: 100%;
}
.inputbox label {
  margin: 4px 0;
}

.inputbox input {
  padding: 12px 0;
}
</style>
