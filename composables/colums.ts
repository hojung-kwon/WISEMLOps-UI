
/* /pipelines */
export const pipelineColums = ref([
  { label: '이름', key: 'name' },
  { label: '설명', key: 'description' },
  { label: '최종 갱신', key: 'created_at' },
  { label: '작업', key: 'job' },
])

/* /cluster/nodes */
export const nodeColums = ref([
  { label: '노드명', key: 'name'},
  { label: '버전', key: 'version'},
  { label: '상태', key: 'status'},
  { label: '시작시간', key: 'create_date'},  
])

/* /cluster/pods */
export const podColums  = ref([
  { label: '노드명', key: 'name'},
  { label: 'Ready', key: 'ready'},
  { label: '상태', key: 'status'},
  { label: 'Restarts', key: 'restarts'},
  { label: '시작시간', key: 'create_date'},
])

/* /cluster/services */
export const serviceColums = ref([
  { label: '노드명', key: 'name'},
  { label: '버전', key: 'version'},
  { label: '상태', key: 'status'},
  { label: '시작시간', key: 'create_date'},
])

/* /cluster/volumes */
export const volumeColums = ref([
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

