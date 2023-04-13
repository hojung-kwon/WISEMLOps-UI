export const sideMenuData = [
  {
    id: 'main',
    icon: 'home' ,
    title: 'main',
    path: '/',
    description: '메인페이지'
  },
  {
    id: 'tab',
    icon: 'dashboard' ,
    title: 'tab',
    path: '/tab',
    description: '탭 기능 예시'
  },
  {
    id: 'datatable',
    icon: 'inbox',
    title: 'datatable',
    path: '/datatable',
    description: '데이터테이블 기능 예시'
  },
  {
    id: 'workflow',
    icon: 'account_tree',
    title: 'workflow',
    path: '/workflow',
    description: '워크플로우 기능 예시'
  },
  {
    id: 'utils',
    icon: 'info',
    title: 'utils',
    description: '부가 기능 예시',
    subItems: [
      {
        id: 'loading',
        icon: 'home',
        title: '　loading',
        path: '/utils/loading',
        description: '로딩바 예시'
      },
      {
        id: 'alarm',
        icon: 'home',
        title: '　alarm',
        path: '/utils/alarm',
        description: '알람 예시'
      }
    ]
  }
  
]