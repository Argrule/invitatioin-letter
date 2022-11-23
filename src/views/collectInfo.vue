<template>
    <div class="picture">
        <!-- <div style="color: black;">Hello</div> -->
        <!-- 收集信息页面 -->
        <img @click="showForm" src="../assets/collect.png" style="width: 70%;" alt="letter-background for SIPCer" />
        <div class="col_form">

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
        showForm(){
            console.log('showForm');
        }
    }
}
</script>

<style scoped>
.picture{
    /* height: 500px;
    width: 500px;     */
    animation: pic_ani 2s ease 1s 1 normal;
}
.col_form{
    background: url("../assets/collect.png");
    background-size: 100% 100%;
    height: 70%;
    width: 50%;
}
@keyframes pic_ani{
  0% {
    transform: scale(1);
  }

  40% {
    transform: scale(1.1);
  }

  80% {
    transform: scale(1);
  }
}
</style>