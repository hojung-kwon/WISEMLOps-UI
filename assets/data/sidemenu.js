export const sideMenuData = [
  {
    id: 'dashboard',
    icon: 'dashboard' ,
    title: 'Dashboard',
    path: '/dashboard',
    description: '대시보드'
  },
  {
    id: 'jobs',
    icon: 'account_tree',
    title: '작업관리',
    path: '/jobs',
    description: 'ETL 작업을 관리합니다'
  },
  {
    id: 'connection',
    icon: 'link',
    title: '연결 정보 관리',
    path: '/connections',
    description: '연결 정보를 관리합니다'
  },
  {
    id: 'settings',
    icon: 'settings',
    title: '설정',
    path: '/settings',
    description: '시스템을 관리합니다'
  },
  // {
  //   id: 'account',
  //   icon: 'info',
  //   title: 'Account',
  //   path: '/account',
  //   description: '사용자 계정을 관리합니다'
  // },
  // {
  //   id: 'admin',
  //   icon: 'info',
  //   title: 'Admin',
  //   path: '/admin',
  //   description: '시스템을 관리합니다'
  // },
  {
    id: 'test',
    icon: 'info',
    title: 'Test',
    description: '테스트',
    subItems: [
      {
        id: 'sub1',
        icon: 'info' ,
        title: 'Sub1',
        path: '/sub1',
        description: '하위메뉴1'
      },
      {
        id: 'sub2',
        icon: 'info',
        title: 'Sub2',
        path: '/sub2',
        description: '하위메뉴2'
      },
      {
        id: 'sub3',
        icon: 'help',
        title: 'Sub3',
        path: '/sub3',
        description: '하위메뉴3'
      },
    ]
  }
  
]