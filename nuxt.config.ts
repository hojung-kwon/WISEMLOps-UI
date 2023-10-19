// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset:'utf-8',
      viewport: 'initial-scale=1',
      title: 'MLOps Platform',
      meta:[ 
        { name: 'description', content: 'sample description'}
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: [
    '@vuestic/nuxt',
    'nuxt-monaco-editor'
  ],
  vuestic: {
    config: {

    },
    css: ['typography', 'reset']
  },
  monacoEditor: {
    dest: '_monaco',
    locale: 'ko',
    componentName: {
      codeEditor: 'MonacoEditor',
      diffEditor: 'MonacoDiffEditor'
    }
  },
  runtimeConfig: {
    public: {
      apiServer: process.env.API_SERVER
    }
  }
})
