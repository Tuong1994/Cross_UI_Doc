import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { iconList } from './libs/icon'
import { loadSlim } from '@tsparticles/slim'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import highLightDirective from './components/View/Code/directive'
import Particles from '@tsparticles/vue3'
import 'highlight.js/styles/tokyo-night-dark.css'
import './style/main.scss'

declare module '@tsparticles/vue3'

hljs.registerLanguage('javascript', javascript)

iconList()

const app = createApp(App)

app.component('fa', FontAwesomeIcon)

app.use(createPinia())

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  }
})

app.use(router)

app.directive('highlight', highLightDirective)

app.mount('#app')
