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
                <h6 class="va-h6, mb-2">기본정보</h6>
              </div>
              <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
                <va-input
                  label="이름"                
                  v-model="formValues.experimentName"
                  placehholder="experiment name"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
                <va-input
                  label="설명"                
                  v-model="formValues.description"
                  placeholder="description"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
              <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
                <va-checkbox v-model="formValues.createRunYN" label="등록 후 Run 생성" class="mb2" />
              </div>
            </div>
          </va-card-content>
          <va-card-actions>
          <va-button @click="addExperiment">등록</va-button>
          <va-button preset="secondary" border-color="secondary" @click="pageBack">취소</va-button>
        </va-card-actions>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const pageTitle = ref('Experment 등록')

const formValues = ref({
  experimentName: '',
  description: '',
  createRunYN: false,
})


const pageBack = () => {
  router.back()
}

const addExperiment = () => {
  console.log("Experiment 등록")
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