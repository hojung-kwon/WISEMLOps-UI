// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset:'utf-8',
      viewport: 'initial-scale=1',
      title: '[와이즈넛] 관리도구 샘플 화면 프로젝트',
      meta:[ 
        { name: 'description', content: 'sample description'}
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: ['@vuestic/nuxt'],
  vuestic: {
    config: {

    },
    css: ['typography', 'reset']
  }
})
