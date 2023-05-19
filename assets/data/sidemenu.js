export const sideMenuData = [
  {
    id: 'home',
    icon: 'home' ,
    title: 'home',
    path: '/',
    description: '홈 화면'
  },
  {
    id: 'notebooks',
    icon: 'description' ,
    title: 'Notebooks',
    path: '/notebooks',
    description: 'Notebooks'
  },
  {
    id: 'experiments',
    icon: 'science',
    title: 'Experiments',
    path: '/experiments',
    description: '실험 관리'
  },
  {
    id: 'pipelines',
    icon: 'account_tree',
    title: 'Pipelines',
    path: '/pipelines',
    description: '파이프라인 관리'
  },
  {
    id: 'runs',
    icon: 'play_arrow',
    title: 'Runs',
    path: '/runs',
    description: 'Runs',
  },
  {
    id: 'jobs',
    icon: 'work',
    title: 'Jobs',
    path: '/jobs',
    description: 'jobs',
  },
  {
    id: 'endpoints',
    icon: 'share',
    title: 'EndPoints',
    path: '/endpoints',
    description: 'endpoints',
  },
  {
    id: 'cluster',
    icon: 'hub',
    title: 'Cluster',
    description:'클러스터 관리',
    subItems: [
      {
        id: 'nodes',
        icon: 'workspaces',
        title: 'Nodes',
        path: '/cluster/nodes',
        description: ''
      },
      {
        id: 'pods',
        icon: 'view_in_ar',
        title: 'Pods',
        path: '/cluster/pods',
        description: ''
      },
      {
        id: 'deploys',
        icon: 'downloading',
        title: 'Deploys',
        path: '/cluster/deploys',
        description: ''
      },
      {
        id: 'services',
        icon: 'widgets',
        title: 'Services',
        path: '/cluster/services',
        description: ''
      },
      {
        id: 'volumes',
        icon: 'storage',
        title: 'Volumes',
        path: '/cluster/volumes',
        description: ''
      }
    ]
  }, 
  {
    id: 'settings',
    icon: 'settings',
    title: 'Settings',
    path: '/settings',
    description: 'settings',
  }
  
]