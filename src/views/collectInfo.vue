<template>
    <div class="title">
        <h2> Happy 12th Anniversary </h2>
    </div>
    <!-- 左箭头 -->
    <div class="arrow_l" @click="goPageLast"></div>
    <!-- 右箭头 -->
    <div class="arrow_r" @click="goPageNext"></div>
    <div class="picture">
        <!-- 图片 -->
        <div v-if="this.showActive">
            <img @click="showForm" src="../assets/collect.png" style="width: 100%;"
                alt="letter-background for SIPCer" />
        </div>
        <!-- 收集信息页面 -->
        <div v-else class="col_form">
            <div class="form_list">
                <input type="text" placeholder="姓名">
                <input type="text" placeholder="年龄">                
                <input type="text" placeholder="电话">                
                <input type="text" placeholder="礼物选取">                
                <input type="text" placeholder="收货地址">              
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showActive: 1,
        }
    },
    methods: {
        showForm() {
            // 必要时加setTimeOut
            this.showActive = 0;
            console.log('showForm');
        }
    }
}
</script>

<style scoped>
.title {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%);
    font-size: larger;
    color: black;
}

.picture {
    animation: pic_ani 2s ease 0.1s 1 normal;
}

.col_form {
    /* 不透明度 */
    opacity: 0.5;
    background: url("../assets/collect.png");
    background-size: 100% 100%;
    height: 530px;
    width: 800px;
}
.form_list {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    width: 380px;
}
input{
    background-color: azure;
    color: black;
    font-size: larger;
    margin: 20px;
    padding: 15px;
    border-radius: 10px;

}

@keyframes pic_ani {
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

.arrow_l {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    height: 40px;
    width: 40px;
    background: url("../assets/left.png");
    background-size: 100% 100%;
}

.arrow_r {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(0, -50%);
    height: 40px;
    width: 40px;
    background: url("../assets/right.png");
    background-size: 100% 100%;
}
</style>