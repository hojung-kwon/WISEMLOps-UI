const runtimeConfig = useRuntimeConfig();
console.log('runtimeConfig.apiServer', runtimeConfig.public.apiServer);
/* GET /cluster/namepaces */

export const getNamespaces = async() => {
  const { data:namespaces } = await useFetch<ResponseBody>(`/cluster/namespaces`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return namespaces;
}


/* GET /crds/namespaces/{namespace}/notebooks */
export const getNotebooks = async ( namespace:string | null ) => {
  const { data:notebooks } = await useFetch<ResponseBody>(`/crds/namespaces/${namespace}/notebooks`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  }) 
  return notebooks;
}

export const getNotebookDetails = async ( namespace:string | null, name:string | string[]) => {
  const { data:notebookDetails } = await useFetch<ResponseBody>(`/crds/namespaces/${namespace}/notebooks/${name}`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return notebookDetails;
}

export const addNotebook = async ( namespace:string | null, body:any ) => {
  const options = {
    headers: { "Content-type": "application/json" },
    method: 'POST',
    baseURL: String(runtimeConfig.public.apiServer),
    body: body.value

  }
  const { data:notebook } = await useFetch<ResponseBody>(`/crds/namespaces/${namespace}/notebooks`, options as object )
  return notebook;
}

export const deleteNotebook = async( namespace:string | null, name:string ) => {
  const options = {
    headers: { "Content-type": "application/json" },
    method: 'DELETE',
    baseURL: String(runtimeConfig.public.apiServer),
  }
  const { data:notebook } = await useFetch<ResponseBody>(`/crds/namespaces/${namespace}/notebooks/${name}`, options as object )

  return notebook;
}



export const getRuns = async ( experiment_id:string | string[] | null ) => {
  
  let query:any = {}
  if (experiment_id) query.experiment_id = experiment_id;

  const { data:runs } = await useFetch<ResponseBody>(`/kfp/runs`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
    query: query
  }) 
  return runs;  
}

export const getRunDetails = async( run_id: string | string[] ) => {
  const { data:runDetail } = await useFetch<ResponseBody>(`/kfp/runs/${run_id}`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return runDetail;
}



/* GET /kfp/experiment */
export const getExperiments = async () => {

  const { data:experiments } = await useFetch<ResponseBody>(`/kfp/experiments`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  }) 
  return experiments;
}

export const addExperiment = async (body:any ) => {
  const options = {
    headers: { "Content-type": "application/json" },
    method: 'POST',
    baseURL: String(runtimeConfig.public.apiServer),
    body: body.value

  }
  const { data:experiment } = await useFetch<ResponseBody>(`/kfp/experiments`, options as object )
  return experiment;
}


export const getPipelines = async () => {

  const { data:pipelines } = await useFetch<ResponseBody>(`/kfp/pipelines`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return pipelines
}

export const getPipelineVersions = async(pipeline_id:string | string[]) => {
  const { data:pipelineVersions } = await useFetch<ResponseBody>(`/kfp/pipelines/${pipeline_id}/versions`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return pipelineVersions;
}

// custom pipelinedetail사용
export const getPipelineDetails = async ( pipeline_id:string | string[], version:string) => {

  const { data: pipelineDetail } = await useFetch<ResponseBody>(`/pipeline/${pipeline_id}`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return pipelineDetail;
  /*
  if (version) {
    const { data:pipelineDetail } = await useFetch<ResponseBody>(`/kfp/pipelines/versions/${version}`, {
      method: 'GET',
      baseURL: String(runtimeConfig.public.apiServer)
    })
    return pipelineDetail;
  } else {
    const { data:pipelineDetail } = await useFetch<ResponseBody>(`/kfp/pipelines/${pipeline_id}`, {
      method: 'GET',
      baseURL: String(runtimeConfig.public.apiServer)
    })
    return pipelineDetail;
  }
  */

}


export const getPipelineVersionTemplate = async (version:string) => {
  const { data:template } = await useFetch<ResponseBody>(`/kfp/pipelines/versions/${version}/template`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer)
  })
  return template;
}


export const addPipelineWowrkflow = async (body:any) => {
  const options = {
    headers: { "Content-type": "application/json" },
    method: 'POST',
    baseURL: String(runtimeConfig.public.apiServer),
    body: body.value

  }
  const { data:pipeline } = await useFetch<ResponseBody>(`/workflow/pipeline`, options as object )
  return pipeline;  
}


/* GET /cluster/nodes */
export const getNodes = async () => {
  const { data:nodes } = await useFetch<ResponseBody>(`/cluster/nodes`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  })
  return nodes;
}

/* GET /cluster/volumes */
export const getVolumes = async () => {
  const { data:volumes } = await useFetch<ResponseBody>(`/cluster/volumes`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  }) 
  return volumes;
}

/* GET /cluster/namespaces/{namespaces}/pods */
export const getPods = async ( namespace:string | null) => {
  const { data:pods } = await useFetch<ResponseBody>(`/cluster/namespaces/${namespace}/pods`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  })
  return pods;
}

/* GET /cluster/namespaces/{namespaces}/deploys */
export const getDeploys = async ( namespace:string | null) => {
  const { data:deploys } = await useFetch<ResponseBody>(`/cluster/namespaces/${namespace}/deployments`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  })
  return deploys;
}

/* GET /cluster/namespaces/{namespaces}/services */
export const getServices = async ( namespace:string | null)=> {
  const { data:services  } = await useFetch<ResponseBody>(`/cluster/namespaces/${namespace}/services`, {
    method: 'GET',
    baseURL: String(runtimeConfig.public.apiServer),
  })
  return services;
}

