<script setup>

</script>

<template>
    <div class="global">  
    <router-link to="/home">跳转首页页面</router-link>    
    <div class="letter">
        <img src="../assets/letter.png" alt="letter for SIPCer" />      
    </div>
    <!-- <HelloWorld :msg="content" /> -->
  </div>
</template>

<style>
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