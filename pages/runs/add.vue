<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <va-button icon="arrow_back" preset="secondary" @click="pageBack" class="pr-4"></va-button>
          <PageTitle :pageTitle="pageTitle" />
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
                <va-input label="Pipeline" v-model="formValues.pipeline_name" placeholder="pipeline name"
                  background="backgroundPrimary" outline class="inputbox mb-2">
                  <template #appendInner>
                    <va-button class="px-4" icon="search" @click="showPopup.pipeline = !showPopup.pipeline"></va-button>
                  </template>
                </va-input>
                <PipelinePopup v-model="showPopup.pipeline" @getPipeline="getPipeline" />
                <va-input label="Pipeline version" v-model="formValues.version_name" placeholder="pipeline version"
                  background="backgroundPrimary" outline class="inputbox mb-2">
                  <template #appendInner>
                    <va-button class="px-4" icon="search"
                      @click="showPopup.pipelineVersion = !showPopup.pipelineVersion"></va-button>
                  </template>
                </va-input>
                <PipelineVersionPopup v-model="showPopup.pipelineVersion" v-model:pipelineId="formValues.pipeline_id"
                  @getPipelineVersion="getPipelineVersion" />
                <va-input label="이름" v-model="formValues.runName" placeholder="Run name" background="backgroundPrimary"
                  outline class="inputbox mb-2">
                </va-input>
                <va-input label="Experiment" v-model="formValues.experiment_name" placeholder="Run name"
                  background="backgroundPrimary" outline class="inputbox mb-2">
                  <template #appendInner>
                    <va-button class="px-4" icon="search"
                      @click="showPopup.experiment = !showPopup.experiment"></va-button>
                  </template>
                </va-input>
                <ExperimentPopup v-model="showPopup.experiment" @getExperiment="getExperiment" />
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col md12">
                <h6 class="va-h6 mb-2">종류</h6>
              </div>
              <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
                <va-radio v-for="(option, index) in runTypeOptions" :key="index" v-model="formValues.runType"
                  :option="option.value" :label="option.text" class="mb-2" />
              </div>
              <div v-if="formValues.runType == 'schedule'" class="flex flex-col xl6 lg10 md12 sm12 xs12">
                <div class="d-flex mb-2">
                  <va-input label="최대 반복 횟수" v-model="formValues.maxRepeatCount" placeholder="Maximum Memory Gi"
                    background="backgroundPrimary" outline class="inputbox mb-2 pr-4" />
                  <va-select label="반복 간격" v-model="formValues.repeatTerm" :options="repeatTermOptions"
                    background="backgroundPrimary" outline class="selectbox mb-2" />
                </div>
                <div class="d-flex justify-start mb-2">
                  <va-checkbox v-model="formValues.startDateYN" label="시작일" class="flex flex-col lg2 mb-2 mr-4 " />
                  <va-date-input class="flex flex-col lg4 px-2" />
                  <va-time-input class="flex flex-col lg4 px-2" />
                </div>
                <div class="d-flex mb-2">
                  <va-checkbox v-model="formValues.endDateYN" label="종료일" class="flex flex-col lg2 mb-2 mr-4" />
                  <va-date-input class="flex flex-col lg4 px-2" />
                  <va-time-input class="flex flex-col lg4 px-2" />
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

import PipelinePopup from '~~/components/popup/Pipeline.vue';
import PipelineVersionPopup from '~~/components/popup/PipelineVersion.vue';
import ExperimentPopup from '~~/components/popup/Experiment.vue';




const router = useRouter();
const pageTitle = ref('Run 등록')

const showPopup = ref({
  pipeline: false,
  pipelineVersion: false,
  experiment: false,
})

const formValues = ref({
  pipeline_id: '',
  pipeline_name: '',
  version_id: '',
  version_name: '',
  experiment_id: '',
  experiment_name: '',
  pipeline_root: '',
  runName: '',
  job_name: '',
  pipeline_package_path: '',
  params: {},
  enable_caching: true,
  runType: 'once',
  maxRepeatCount: 10,
  repeatTerm: 'Hour',
  startDateYN: false,
  endDateYN: false,
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  pipeline_file: '',
})


const runBody = ref({
  experiment_id: '',
  job_name: '',
  params: {},
  pipeline_id: '',
  version_id: '',
  pipeline_root: '',
  enable_caching: true,

})

const runTypeOptions = ref([
  { text: '단순 실행', value: 'once' },
  { text: '반복 실행', value: 'schedule' },
])


const repeatTermOptions = ref([
  { text: 'Minute', value: 'Minute' },
  { text: 'Hour', value: 'Hour' },
  { text: 'Day', value: 'Day' },
  { text: 'Week', value: 'Week' },
  { text: 'Month', value: 'Month' },
])

const pageBack = () => {
  router.back()
}

const startRun = () => {
  console.log(JSON.stringify(formValues.value))
  runBody.value.job_name = formValues.value.runName;
  runBody.value.experiment_id = formValues.value.experiment_id;
  runBody.value.pipeline_id = formValues.value.pipeline_id;
  runBody.value.version_id = formValues.value.version_id;


  console.log(JSON.stringify(runBody.value))
  addRun(runBody)
    .then(run => {

      if (run.value && run.value.code == 102200) {
        navigateTo(`/runs`, {
          replace: true,
          redirectCode: 301,
          external: true
        })

      } else {
        alert("오류발생" + run.value ? run.value?.result : '')
      }
    })


}

const getPipeline = (pipeline: any) => {
  showPopup.value.pipeline = false;
  formValues.value.pipeline_id = pipeline.pipeline_id;
  formValues.value.pipeline_name = pipeline.display_name;
  formValues.value.version_name = '';
}

const getPipelineVersion = (pipelineVersion: any) => {

  showPopup.value.pipelineVersion = false;
  formValues.value.version_id = pipelineVersion.pipeline_version_id;
  formValues.value.version_name = pipelineVersion.display_name;
}


const getExperiment = (experiment: any) => {
  console.log(experiment)
  showPopup.value.experiment = false;
  formValues.value.experiment_id = experiment.experiment_id;
  formValues.value.experiment_name = experiment.display_name;
}

const resetVersion = () => {

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