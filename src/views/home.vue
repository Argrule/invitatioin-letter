<template>
    <!-- 信的内容，容器 -->
    <div class="letter_content">
        <router-view/>
    </div>
    <!-- <Test msg="this is a vue3 appliaction? hello world"/> -->
    <!-- debug -->
    <router-link to="/about">跳转关于页面</router-link>
</template>

<script setup>
    // import Test from '../components/Test.vue'
</script>
<style scoped>
.letter_content{
    width: 70vw;
    height: 80vh;
    padding: auto;
    background-color: rgb(253, 247, 241);
}
</style>