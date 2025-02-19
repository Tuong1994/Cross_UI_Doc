import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { iconList } from './libs/icon'
import App from "./App.vue";
import router from "./router";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import highLightDirective from "./components/View/Code/directive";
import 'highlight.js/styles/tokyo-night-dark.css'
import './style/main.scss'

hljs.registerLanguage('javascript', javascript);

iconList()

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(createPinia());

app.use(router);

app.directive('highlight', highLightDirective)

app.mount("#app");
