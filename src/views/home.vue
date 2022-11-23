<template>
    <!-- 信的内容，容器 -->
    <div class="letter_content">
        <div class="center">
            <!-- 左箭头 -->
            <div class="arrow_l" @click="goPageLast"></div>
            <router-view />
            <!-- 右箭头 -->
            <div class="arrow_r" @click="goPageNext"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num:1,
        };
    },    
    methods: {
        goPageLast() {
            this.num--;
            if (this.num==0) {
                this.$router.push('/letter');
            } else {
                this.$router.push("page" + this.num);   
            }            
            // this.$router.go(-1);
        },
        goPageNext() {
            this.num++;
            if(this.num>4) 
            this.$router.push("/collect");
            else
            this.$router.push("page" + this.num);
            // this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.center {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.arrow_l {
    height: 40px;
    width: 40px;
    background: url("../assets/left.png");
    background-size: 100% 100%;
}

.arrow_r {
    height: 40px;
    width: 40px;
    background: url("../assets/right.png");
    background-size: 100% 100%;
}

.letter_content {
    width: 65vw;
    height: 80vh;
    padding: auto;
    background-color: rgb(253, 247, 241);
}
</style>
