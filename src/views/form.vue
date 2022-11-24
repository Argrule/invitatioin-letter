<template>
    <div class="extend">
        <div class="form_list">
            <p class="title1">&nbsp;&nbsp;亲爱的学长学姐:</p>
            <div class="inner">
                <div class="word">若您有时间参加本次生日活动，请填写以下信息，并加入微信群qwq</div>
                <div class="title">基本信息</div>
                <input type="text" placeholder="姓名" v-model="query.name">
                <input type="text" placeholder="邮箱" v-model="query.mailbox">
                <input type="text" placeholder="电话" v-model="query.phone">
                <p class="word">我们为您准备了小礼物，若您喜欢，请填写邮寄地址</p>
                <input type="text" placeholder="地址" v-model="query.address">
                <button class="btn_col" @click="putQuery">提交</button>
                <img src="../assets/wx_code.png" style="width:65%;margin: 15px auto; " alt="微信群二维码">
            </div>
        </div>
    </div>
</template>

<script>
import { post } from '../utils/index.js';
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus';
export default {
    data() {
        return {
            query: {
                name: '',
                mailbox: '',
                phone: '',
                giftId: 1,
                address: ''
            },
            giftList: ['是', '否']
        }
    },
    components: {
        ElMessage
    },
    methods: {
        async putQuery() {
            if (this.checkQuery()) return;            
            if (this.query.address==='') {
              this.query.giftId = 0;
            }else{
              this.query.giftId = 1;
            }
            const { data: res } = await post('/invitation/submit', this.query);
            // console.log('res', res);
            if (res.code == '00000') {                
                ElMessage.success(res.message);
                this.$router.replace('/letter');
            } else {
                ElMessage.error(res.message);             
            }
        },
        // 校验
        checkQuery() {
            if (this.query.name === '') {                
                ElMessage.error('请输入姓名');              
            } else if (this.query.phone === '') {                
                ElMessage.error('请输入手机号');
            } else if (this.query.mailbox === '') {                
                ElMessage.error('请输入邮箱');
            } else {
                return false;
            }
            return true;
        }
    }
}
</script>

<style scoped>
.title {
    color: black;
    margin-top: 10px;
    font-size: larger;
    font-weight: 700;
}

.title1 {
    color: black;
    font-size: larger;
    font-weight: 700;
    text-align: left;
}

.inner {
    display: flex;
    flex-direction: column;
    width: 380px;
    padding: 5px 30px;
    background-color: white;
    /* opacity: 0.7; */
}

.word {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    line-height: 130%;
    color: black;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
}

.extend {
    background: url('../assets/collect_info.png');
    background-size: 100% 100%;
    padding: 50px 30px;
}

.form_list {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    min-width: 380px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    opacity: 0.7;
}

.btn_col {
    font-size: larger;
    margin: 10px auto;
    width: 250px;
}

option {
    font-size: larger;
    background-color: azure;
}

input,
select {
    opacity: 1;
    background-color: #ffffff;
    color: black;
    font-size: large;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid rgb(78, 77, 77);
    border-radius: 5px;
}
</style>