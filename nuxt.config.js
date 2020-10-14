
export default {
  mode: 'universal',
  target: 'server',
  loading: {
    color: '#0000ff',
    height: '10px',
    failedColor: '#ff0000',
    throttle: '100'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /* Global CSS */
  css: [
    './assets/main.css'
  ],
  plugins: [
  ],
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  bootstrap: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  /* Axios module configuration */
  axios: {},
  /* Build configuration */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  },
  srcDir: 'client/',
  typescript: {
    formatter: 'default'
  }
}
