const config = useAppConfig();


/* GET /cluster/namepaces */

export const getNamespaces = async() => {
  const { data:namespaces } = await useFetch<ResponseBody>(`/cluster/namespaces`, {
    method: 'GET',
    baseURL: config.apiServer
  })
  return namespaces;
}

/* GET /crds/namespaces/{namespace}/notebooks */
export const getNotebooks = async ( namespace:string | null ) => {
  const { data:volumes } = await useFetch<ResponseBody>(`/crds/namespaces/${namespace}/notebooks`, {
    method: 'GET',
    baseURL: config.apiServer,
  }) 
  return volumes;
}


/* GET /cluster/nodes */
export const getNodes = async () => {
  const { data:nodes } = await useFetch<ResponseBody>(`/cluster/nodes`, {
    method: 'GET',
    baseURL: config.apiServer,
  })
  return nodes;
}

/* GET /cluster/volumes */
export const getVolumes = async () => {
  const { data:volumes } = await useFetch<ResponseBody>(`/cluster/volumes`, {
    method: 'GET',
    baseURL: config.apiServer,
  }) 
  return volumes;
}

/* GET /cluster/namespaces/{namespaces}/pods */
export const getPods = async ( namespace:string | null) => {
  const { data:pods } = await useFetch<ResponseBody>(`/cluster/namespaces/${namespace}/pods`, {
    method: 'GET',
    baseURL: config.apiServer,
  })
  return pods;
}

/* GET /cluster/namespaces/{namespaces}/deploys */
export const getDeploys = async ( namespace:string | null) => {
  const { data:deploys } = await useFetch<ResponseBody>(`/cluster/namespaces/${namespace}/deployments`, {
    method: 'GET',
    baseURL: config.apiServer,
  })
  return deploys;
}

/* GET /cluster/namespaces/{namespaces}/services */
export const getServices = async ( namespace:string | null)=> {
  const { data:services  } = await useFetch<ResponseBody>(`/cluster/namespaces/${namespace}/services`, {
    method: 'GET',
    baseURL: config.apiServer,
  })
  return services;
}

