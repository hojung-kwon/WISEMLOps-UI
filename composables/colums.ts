

/* Runs */

export const runColumns = ref([
  { label: '이름', key: 'display_name' },
  // { label: '설명', key: 'description' },
  { label: '상태', key: 'state' },
  { label: '생성', key: 'created_at' },
  { label: '시작', key: 'scheduled_at' },
  { label: 'Experiment', key: 'experiment' },  
  { label: 'Pipeline', key: 'pipeline_version' },  
  { label: '상세보기', key: 'details' },  
])


export const runDetailTabs = ref([
  { id: 'graph', icon: 'visibility', title: 'Graph' },
  { id: 'runOutput', icon: 'code', title: 'Run Output' },  
  { id: 'config', icon: 'code', title: 'Config' },  
])

/* Experiments */
export const experimentColumns = ref([
  { label: '이름', key: 'display_name' },
  { label: '설명', key: 'description' },
  { label: '생성일시', key: 'created_at' },
  { label: 'Storage status', key: 'storage_state' },  
  { label: '상세보기', key: 'details' },  
])

export const experimentDetailTabs = ref([
  { id: 'active', icon: 'code', title: 'Active' },
  { id: 'archive', icon: 'code', title: 'Archive' },
])

/* /pipelines */
export const pipelineColumns = ref([
  { label: ' ' , key: 'toggle'},
  { label: '이름', key: 'display_name' },
  { label: '설명', key: 'description' },
  { label: '최종 갱신', key: 'created_at' },
  { label: '상세보기', key: 'details' },
])

export const pipelineVersionColumns = ref([
  { label: '이름', key: 'display_name'},
  { label: '최종 갱신', key: 'created_at' },
  { label: '상세보기', key: 'details' },
])

export const pipelineDetailTabs = ref([
  { id: 'graph', icon: 'visibility', title: 'Graph' },
  { id: 'yaml', icon: 'code', title: 'Yaml' },
])


/* /crds/namespaces/{namespace}/notebooks */
export const notebookColums = ref([
  { label: '이름', key: 'name'},
  { label: '이미지', key: 'image'},
  { label: 'CPU', key: 'cpus'},
  { label: 'GPU', key: 'gpus'},
  { label: 'MEMORY', key: 'memory'},
  { label: '상태', key: 'status'},
  { label: '생성일시', key: 'created_at'},
  { label: '상세보기', key: 'details' },
  { label: 'Connect', key: 'connect' },
  { label: '삭제', key: 'delete' }
])

export const notebookDetailTabs = ref([
  { id: 'overview', icon: 'visibility', title: 'Overview' },
  { id: 'logs', icon: 'article', title: 'Logs' },
  { id: 'event', icon: 'calendar_today', title: 'Event' },
  { id: 'yaml', icon: 'code', title: 'Yaml' },
])


/* /cluster/nodes */
export const nodeColumns = ref([
  { label: 'NODE명', key: 'name'},
  { label: '버전', key: 'version'},
  { label: '상태', key: 'status'},
  { label: '시작시간', key: 'create_date'},  
])

/* /cluster/pods */
export const podColumns  = ref([
  { label: 'POD명', key: 'name'},
  { label: 'Ready', key: 'ready'},
  { label: '상태', key: 'status'},
  { label: 'Restarts', key: 'restarts'},
  { label: '시작시간', key: 'create_date'},
])


/* /cluster/deploys */
export const deployColumns  = ref([
  { label: 'POD명', key: 'name'},
  { label: 'Ready', key: 'ready'},
  { label: 'Up-To-Date', key: 'up_to_date'},
  { label: 'Available', key: 'available'},
  { label: '시작시간', key: 'create_date'},
])


/* /cluster/services */
export const serviceColumns = ref([
  { label: 'SERVICE명', key: 'name'},
  { label: '타입', key: 'type'},
  { label: 'Cluster IP', key: 'cluster_ip'},
  { label: 'External IP', key: 'external_ip'},
  { label: 'Ports', key: 'ports'},
  { label: '시작시간', key: 'create_date'},
])

/* /cluster/volumes */
export const volumeColumns = ref([
  { label: 'Volume명', key: 'name'},
  { label: '용량', key: 'capacity'},
  { label: '상태', key: 'status'},
  { label: 'Storage Class', key: 'storage_class'},
  { label: '접근모드', key: 'access_mode'},
  { label: 'Reclaim Policy', key: 'reclaim_policy'},
  { label: 'Claim', key: 'claim'},
  { label: 'REASON', key: 'reason'},
  { label: '생성일시', key: 'create_date'},
])

