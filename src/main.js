import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { get,post } from "./utils/index.js";
// debug
//导入mock
import './mock/index.js';

const invitation_app = createApp(App);
invitation_app.mount('#app');
// 引入http
invitation_app.config.globalProperties.$http = { get,post };
