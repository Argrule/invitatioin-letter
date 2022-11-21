<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
// 引入axios，setup中缺少this
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

// 响应式对象
let content = ref('Vite  + Vue');

async function updayeStr() {
  content.value = '==========';
  // 测试
  const { data: res } = await proxy.$http.get('/test');
  console.log('result is', res);
  // debug
  proxy.$http.post('/login', {
    username: 'admin',
    password: '123123'
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}
</script>

<script>
export default {
  data() {
    return {}
  },
  created() {
    console.log('888888888888888', this);
  }
}
</script>
<template>
  <!-- 占位 -->
  <router-view/>   
</template>

<style scoped>
</style>
