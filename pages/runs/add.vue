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
                <va-input
                  label="Pipeline"
                  v-model="formValues.pipelineName"
                  placeholder="pipeline name"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                  <template #appendInner >
                    <va-button class="px-4" icon="search"></va-button>
                  </template>
                </va-input>
                <va-input
                  label="Pipeline version"
                  v-model="formValues.pipelineVersion"
                  placeholder="pipeline version"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                  <template #appendInner >
                    <va-button class="px-4" icon="search"></va-button>
                  </template>
                </va-input>
                <va-input
                  label="이름"
                  v-model="formValues.pipelineVersion"
                  placeholder="Run name"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
                <va-input
                  label="Experiment"
                  v-model="formValues.experimentName"
                  placeholder="Run name"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                  <template #appendInner >
                    <va-button class="px-4" icon="search"></va-button>
                  </template>
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col md12">
                <h6 class="va-h6 mb-2">종류</h6>
              </div>
              <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
                <va-radio
                  v-for="(option, index) in runTypeOptions"
                  :key="index"
                  v-model="formValues.runType"
                  :option="option.value"
                  :label="option.text"
                  class="mb-2"
                />
              </div>
              <div v-if="formValues.runType == 'schedule'" class="flex flex-col xl6 lg10 md12 sm12 xs12">
                <div class="d-flex mb-2">
                  <va-input
                    label="최대 반복 횟수"
                    v-model="formValues.maxRepeatCount"
                    placeholder="Maximum Memory Gi"
                    background="backgroundPrimary"
                    outline
                    class="inputbox mb-2 pr-4"
                  />           
                  <va-select 
                    label="반복 간격"
                    v-model="formValues.repeatTerm" 
                    :options="repeatTermOptions" 
                    background="backgroundPrimary"
                    outline
                    class="selectbox mb-2"
                    />
                </div>
                <div class="d-flex justify-start mb-2">
                  <va-checkbox v-model="formValues.startDateYN" label="시작일" class="flex flex-col lg2 mb-2 mr-4 "/>
                  <va-date-input class="flex flex-col lg4 px-2" />   
                  <va-time-input class="flex flex-col lg4 px-2" />
                </div>
                <div class="d-flex mb-2">
                  <va-checkbox v-model="formValues.endDateYN" label="종료일" class="flex flex-col lg2 mb-2 mr-4"/>
                  <va-date-input class="flex flex-col lg4 px-2"/>   
                  <va-time-input class="flex flex-col lg4 px-2"/>
                </div>
              </div>
            </div>
          </va-card-content>
          <va-card-actions>
          <va-button @click="startRun">시작</va-button>
          <va-button preset="secondary" border-color="secondary" @click="pageBack">취소</va-button>
        </va-card-actions>

        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const router = useRouter();
const pageTitle = ref('Run 등록')


const formValues = ref({
  pipelineId: '',
  pipelineName: '',
  pipelineVersion: '',
  runName: '',
  experimentId: '',
  experimentName: '',
  runType:'once',
  maxRepeatCount: 10,
  repeatTerm: 'Hour',
  startDateYN: false,
  endDateYN: false,
  startDate: '',
  startTime: '',
  endDate: '',
  endTime : ''
})

const runTypeOptions = ref([
{ text: '단순 실행', value: 'once'},
{ text: '반복 실행', value: 'schedule'},
])


const repeatTermOptions = ref([
  { text: 'Minute', value:'Minute'},
  { text: 'Hour', value:'Hour'},
  { text: 'Day', value:'Day'},
  { text: 'Week', value:'Week'},
  { text: 'Month', value:'Month'},
])

const pageBack = () => {
  router.back()
}

const startRun= () => {
  console.log("Run 실행")
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

.selectbox {
  width: 100%;
  z-index: 2;
}

.selectbox label {
  margin-top: 4px;
}

.selectbox .va-input-wrapper__text {
  padding-top: 24px;
  padding-bottom: 12px;
}

.va-select-dropdown__content {
  z-index: 3;
}

.va-date-input__dropdown-content {
  z-index: 3;
}

.va-dropdown__content {
  z-index: 3;
}

</style>