<template>
  <div class="global" @click="gotoHome">    
    <!-- 信封页 -->
    <div class="letter">
      <img src="../assets/letter.png" alt="letter for SIPCer" />
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
  animation: lettermove 2s ease 1s 3 normal;
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