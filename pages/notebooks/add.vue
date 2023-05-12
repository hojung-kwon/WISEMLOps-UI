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
                label="이름"
                v-model="formValues.notebookName"
                placeholder="notebook name"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              >
              </va-input>
            </div>
          </div>
          <div class="row mb-2">
            <div class="flex flex-col md12">
              <h6 class="va-h6 mb-2">Notebook Image</h6>
            </div>
            <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
              <va-select
              label="Image" 
                v-model="formValues.imageName" 
                :options="notebooImageOptions" 
                :disabled="formValues.customImageYN"
                background="backgroundPrimary"
                outline
                class="selectbox mb-2"
              />
            </div>
            <div class="flex flex-col  xl8 lg10 md12 sm12 xs12">
              <va-checkbox v-model="formValues.customImageYN" label="CustomImage" class="mb-2"/>
            </div>
            <div v-if="formValues.customImageYN" class="flex flex-col xl8 lg10 md12 sm12 xs12">  
              <va-input
                label="Custom Image"
                v-model="formValues.customImageName"
                placeholder="custom image name"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              >
              </va-input>
              <va-select 
                label="Image pull policy"
                v-model="formValues.imagePullPolicy" 
                :options="imagePullPolicyOptions" 
                background="backgroundPrimary"
                outline
                class="selectbox mb-2"
                />
            </div>
          </div>
          <div class="row mb-2">
            <div class="flex flex-col md12">
              <h6 class="va-h6 mb-2">CPU/GPU</h6>
            </div>
            <div class="flex flex-col xl4 lg5 md6 sm12 xs12">
              <va-input
                label="Minimum CPU"
                v-model="formValues.minCpu"
                placeholder="Minimum CPU"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2 pr-4"
              />
              <va-input
                label="Maximum CPU"
                v-model="formValues.maxCpu"
                placeholder="Maximum CPU"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2 pr-4"
              />
            </div>
            <div class="flex flex-col xl4 lg5 md6 sm12 xs12">
              <va-input
                label="Minimum Memory Gi"
                v-model="formValues.minRam"
                placeholder="Maximum Memory Gi"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              />
              <va-input
                label="Maximum Memory Gi"
                v-model="formValues.maxRam"
                placeholder="Maximum Memory Gi"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              />              
            </div>
          </div>
          <div class="row mb-2">
            <div class="flex flex-col md12">
              <h6 class="va-h6 mb-2">GPU</h6>
            </div>
            <div class="flex flex-col xl4 lg5 md6 sm12 xs12">
              <va-select 
                label="Number of GPUs"
                v-model="formValues.numOfGpu" 
                :options="numOfGPUOptions" 
                background="backgroundPrimary"
                outline
                class="selectbox mb-2 pr-4"
                />
            </div>
            <div class="flex flex-col xl4 lg5 md6 sm12 xs12">
              <va-select 
                label="GPU Vendor"
                v-model="formValues.gpuVendor" 
                :options="gpuVendorOptions" 
                background="backgroundPrimary"
                outline
                class="selectbox mb-2"
                />
            </div>
          </div>
          <div class="row mb-2">
            <div class="flex flex-col md12">
              <h6 class="va-h6 mb-2">Workspace Volume</h6>
            </div>
            <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
              <va-input
                label="Volume name"
                v-model="formValues.workspaceVolumeName"
                placeholder="-volume"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              />              
              <va-input
                label="Size in Gi"
                v-model="formValues.workspaceVolumeSize"
                placeholder="GB"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              />        
            </div>
            <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
              <va-checkbox v-model="formValues.defaultStorageClassYN" label="Use default storage class" class="mb-2" readonly/>
            </div>
            <div v-if="formValues.defaultStorageClassYN" class="flex flex-col xl8 lg10 md12 sm12 xs12">  
              <div class="mb-2"><b>Access mode</b></div>
              <va-option-list
                type="radio"
                :options="['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany']"
                v-model="formValues.storageClass"
                class="mb-2"
              />
              <va-input
                label="Mount path"
                v-model="formValues.mountPath"
                placeholder="/home/workspace"
                background="backgroundPrimary"
                outline
                class="inputbox mb-2"
              />       
            </div>
          </div>
        </va-card-content>
        <va-card-actions>
          <va-button @click="startNotebook">시작</va-button>
          <va-button preset="secondary" border-color="secondary" @click="pageBack">취소</va-button>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</div>
</template>


<script setup lang="ts">

const router = useRouter();
const pageTitle = ref('Notebook 등록')

const formValues = ref({
  notebookName: '',
  imageName: '',
  customImageYN: false,
  customImageName: '',
  imagePullPolicy: '',
  minCpu: 1,
  minRam: 1,
  maxCpu: 1.2,
  maxRam: 1.2,
  numOfGpu: '',
  gpuVendor: '',
  defaultStorageClassYN: true,
  workspaceVolumeName: '',
  workspaceVolumeSize: 10,
  storageClass: 'ReadWriteOnce',
  mountPath: '/home/workspace'

})

const notebooImageOptions = ref([
  {
    text:'kubeflownotebookswg/jupyter-scipy:v1.7.0',
    value: 'kubeflownotebookswg/jupyter-scipy:v1.7.0'
  },
  {
    text:'kubeflownotebookswg/jupyter-pytorch-full:v1.7.0',
    value: 'kubeflownotebookswg/jupyter-pytorch-full:v1.7.0'
  },
  {
    text:'kubeflownotebookswg/jupyter-pytorch-cuda-full:v1.7.0',
    value: 'kubeflownotebookswg/jupyter-pytorch-cuda-full:v1.7.0'
  },
  {
    text:'kubeflownotebookswg/jupyter-tensorflow-full:v1.7.0',
    value: 'kubeflownotebookswg/jupyter-tensorflow-full:v1.7.0'
  },
  {
    text:'kubeflownotebookswg/jupyter-tensorflow-cuda-full:v1.7.0',
    value: 'kubeflownotebookswg/jupyter-tensorflow-cuda-full:v1.7.0'
  },
])

const imagePullPolicyOptions = ref([
  { text: 'Always', value:'Always'},
  { text: 'IfNotPresent', value:'IfNotPresent'},
  { text: 'Never', value:'Never'},
])

const numOfGPUOptions = ref([
  '1', '2', '4', '8'
])
const gpuVendorOptions = ref([
  'NVIDIA', 'AMD'
])


const pageBack = () => {
  router.back()
}

const startNotebook = () => {
  console.log('노트북 인스턴스 시작')
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
  padding-top: 20px;
  padding-bottom: 12px;
}

.va-select-dropdown__content {
  z-index: 3;
}


</style>