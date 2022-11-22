<template>
    <div class="center">        
        <div style="color: red">Hello,page1</div>
        <div style="color: green;" @click="goPage">go page2</div>
        <router-link to="page2">go to page2</router-link>
        <!-- <img src="../assets/page1.png" alt="letter for SIPCer" /> -->
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        goPage(){
            this.$router.push('page'+2);
            // this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
/* @import backgroundPicture from "../" */
/* .center{
    background: url("../assets/page1.png");
    background-size: 100% 100%;    
} */
</style>