<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
// 引入axios
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

let content=ref('Vite  + Vue');

async function updayeStr(){
  content.value='==========';  
  // 测试
  const {data:res} = await proxy.$http.get('/test');
  console.log('result is',res);
  // debug
  proxy.$http.post('/login',{
    username:'admin',
    password:'123123'
  }).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  });
}

// console.log('conyen',content)

</script>
<script>
  export default {
    data(){
      return {

      }
    },
    created(){
      console.log('888888888888888',this);
    }
  }
</script>
<template>
  <div @click="updayeStr">+-----------------+</div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="content" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
