<template>
    <div class="form_list">
        <div class="word">信息收集</div>
        <input type="text" placeholder="姓名" v-model="query.name">
        <input type="text" placeholder="邮箱" v-model="query.email">
        <input type="text" placeholder="电话" v-model="query.phone">
        <select v-model="query.gift">
            <!-- placeholder效果 -->
            <option value='' disabled selected style="display:none;">是否需要礼物</option>
            <!-- gift list -->
            <template v-for="(item, i) in this.giftList" :key="i">
                <option :value="item">{{ item }}</option>
            </template>
        </select>
        <input v-if="this.query.gift=='是'" type="text" placeholder="收货地址" v-model="query.adress">
        <button class="btn_col" @click="putQuery">提交</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            query: {
                name: '',
                email: '',
                phone: '',
                gift: '',
                adress: ''
            },
            giftList:['是','否']
        }
    },
    methods:{
        putQuery(){
            console.log('query',this.query);
        }
    }
}
</script>

<style scoped>
.word{
    color: black;
    font-weight: 500;
    font-family:'Times New Roman', Times, serif;
    font-size: 30px;
}

.form_list {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%);
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
</style>