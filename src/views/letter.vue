<template>
  <!-- <audio ref="audio" src="../assets/bgm.mp3" loop preload="auto"></audio> -->
  <!-- <video id="video" src="../assets/bgm.mp3" controls="controls" hidden="hidden" autoplay="autoplay"  loop="loop"> </video> -->
  <div class="global" @click="gotoHome">
    <!-- 信封页 -->
    <div class="letter">
      <img src="../assets/letter.png" :class="[userAgent()? 'letter_m':'']" alt="letter for SIPCer" />
    </div>    
  </div>
</template>

<script>
  export default {
    data(){
      return {        
      }
    },
    methods:{
      // 是手机端
      userAgent(){
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)!=null
      },
      // 跳转home页
      gotoHome(){
        this.$router.push('/home');
      }
    }
  }  
</script>

<style scoped>
/* .global {
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
} */
.letter {
  /* height: ; */
  animation: lettermove 2s ease 0.4s 3 normal;
}
.letter_m {
  width: 100%;
}

@keyframes lettermove {
  0% {
    transform: scale(0.9) rotate(-8deg);
  }

  10% {
    transform: scale(0.8) rotate(-15deg);
  }

  20% {
    transform: scale(0.8) rotate(-15deg);
  }

  30% {
    transform: scale(1) rotate(0deg);
  }

  35% {
    transform: scale(1) rotate(-10deg);
  }

  /* 40% {
    transform: scale(1) rotate(0deg);
  } */

  45% {
    transform: scale(1) rotate(10deg);
  }

  /* 50% {
    transform: scale(1) rotate(0deg);
  } */

  55% {
    transform: scale(1) rotate(-10deg);
  }

  60% {
    transform: scale(1) rotate(0deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
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