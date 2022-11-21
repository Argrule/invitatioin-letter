import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { get,post } from "./utils/index.js";
// debug
//导入mock
import './mock/index.js';
import router from "./router"
const invitation_app = createApp(App);
// 引入router
invitation_app.use(router);
invitation_app.mount('#app');
// 引入http
invitation_app.config.globalProperties.$http = { get,post };
