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
    return {

    }
  },
  created() {
    console.log('888888888888888', this);
  }
}
</script>
<template>
  <div class="global">    
    <div class="letter">
        <img src="./assets/letter.png" alt="letter for SIPCer" />      
    </div>
    <!-- <HelloWorld :msg="content" /> -->
  </div>
</template>

<style scoped>
/* .global {
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
} */
.letter{
  animation: lettermove 2s ease 1s 3 normal;
}
@keyframes lettermove{
  0%   { transform: scale(0.9) rotate(-8deg);}
  10%   { transform: scale(0.8) rotate(-15deg);}
	20%  { transform: scale(0.8) rotate(-15deg);}
	30%  { transform: scale(1) rotate(0deg);}
	35%  { transform: scale(1) rotate(-15deg);}
	40%  { transform: scale(1) rotate(0deg);}
	45%  { transform: scale(1) rotate(15deg);}
	50%  { transform: scale(1) rotate(0deg);}
	55%  {transform: scale(1) rotate(-15deg);}
  60%  { transform: scale(1) rotate(0deg);}
  100%   { transform: scale(1) rotate(0deg);}
}
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
