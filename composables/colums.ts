
/* /pipelines */
export const pipelineColumns = ref([
  { label: '이름', key: 'name' },
  { label: '설명', key: 'description' },
  { label: '최종 갱신', key: 'created_at' },
  { label: '작업', key: 'job' },
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
  { label: '상세보기', key: 'details'},
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

