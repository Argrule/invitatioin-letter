<template>
    <!-- <div class="title">
        <h2> Happy 12th Anniversary </h2>
    </div> -->
    <div v-show="this.showActive">
        <!-- 左箭头 -->
        <div class="arrow_l" @click="goPageLast"></div>
        <!-- 右箭头 -->
        <div class="arrow_r" @click="goPageNext"></div>
    </div>
    <div class="picture">
        <!-- 图片 -->
        <div>
            <img @click="showForm" src="../assets/collect.png" style="width: 100%;"
                alt="letter-background for SIPCer" />
        </div>
        <!-- <div v-if="this.showActive">
            <img @click="showForm" src="../assets/collect.png" style="width: 100%;"
                alt="letter-background for SIPCer" />
        </div> -->
        <!-- 收集信息页面 -->
        <!-- <div v-else class="col_form">
            <div class="form_list"> -->
                <!-- <div class="word">信息收集</div>
                <input type="text" placeholder="姓名" v-model="query.name">
                <input type="text" placeholder="年龄" v-model="query.age">
                <input type="text" placeholder="电话" v-model="query.phone">                
                <select v-model="query.gift"> -->
                    <!-- placeholder效果 -->
                    <!-- <option value='' disabled selected style="display:none;">礼物选取</option> -->
                    <!-- gift list -->
                    <!-- <template v-for="(item,i) in this.giftList" :key="i">
                        <option :value="item">{{ item }}</option>                    
                    </template>
                </select> -->
                <!-- <input type="text" placeholder="收货地址" v-model="query.adress">
                <button class="btn_col" @click="putQuery">提交</button>
            </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            showActive: 1,
            query: {
                name: '',
                age: '',
                phone: '',
                gift: '',
                adress: ''
            },
            giftList:['Volvo','Saab','Opel','Audi']
        }
    },
    methods: {
        showForm() {
            // 必要时加setTimeOut
            this.showActive = 0;
            this.$router.push('/form');
            console.log('showForm');
        },
        putQuery() {
            console.log(this.query);
            this.$router.push('/form');
        },
        goPageLast() {
            this.$router.push('/home');
        },
        goPageNext() {
            this.showActive = 0;
            this.$router.push('/form');
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
.word{
    color: black;
    font-weight: 500;
    font-family:'Times New Roman', Times, serif;
    font-size: 30px;
}
.picture {
    animation: pic_ani 2s ease 0.1s 1 normal;
}

.col_form {
    /* 不透明度 */
    opacity: 0.6;
    background: url("../assets/collect.png");
    background-size: 100% 100%;
    height: 530px;
    width: 800px;
}

.form_list {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;    
    width: 380px;
}

/* /修改option/  */
option::-ms-expand {
    display: none;
}

option {
    -moz-appearance: none;
    /* Firefox */
    -webkit-appearance: none;
    /* Safari 和 Chrome */
    appearance: none;
    border-radius: 15px;
    font-size: larger;
    /* color: ; */
    background-color: #ffffde;
}

/* --背景色字体颜色-- */
option:hover {
    color: #fff;
    background-color: red;
    /* background-color: #1E90FF; */
}
.btn_col{
    font-size: larger;
    margin: 10px auto;    
    width: 250px;
}
input,
select {
    opacity: 1;
    background-color: azure;
    color: black;
    font-size: larger;
    margin: 10px;
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
    animation: showHide 1s ease 0.1s infinite normal;
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
    animation: showHide 1s ease 0.1s infinite normal;
}
@keyframes showHide {
    50% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>
