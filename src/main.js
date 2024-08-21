import { createApp } from "vue";
import { createPinia } from 'pinia'
import "./style.css";
import "./assets/main.css";
import "./assets/fonts/font.css";
import vuetyped from "vue3typed";
import VueKinesis from "vue-kinesis";
import "./assets/fonts/iconfont.css";
import Antd from "ant-design-vue";
import 'animate.css';
import './assets/animate.compat.css'
const pinia = createPinia()
import router from "./router";
import App from "./App.vue";
createApp(App).use(router).use(Antd).use(vuetyped).use(pinia).use(VueKinesis).mount("#app");
