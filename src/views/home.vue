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
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            num: 1,
        };
    },
    computed: {
        ...mapState('m_user', ['showActive']),
        // 是手机端
        isMobile() {
            return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) != null
        },
    },
    methods: {
        ...mapMutations('m_user', ['changeShow']),
        goPageLast() {
            this.num--;
            if (this.num == 0) {
                this.$router.push('/letter');
            } else {
                this.$router.push("page" + this.num);
            }
            // this.$router.go(-1);
        },
        goPageNext() {
            if (this.showActive == false && this.num <= 3) {
                return this.changeShow();
            }
            this.num++;
            if (this.num > 4) {
                // this.changeShow();
                this.$router.push("/collect");
            }
            else {
                this.changeShow();
                this.$router.push("page" + this.num);
            }
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
    animation: showHide 1s ease 0.1s infinite normal;
}

.arrow_r {
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

    100% {
        opacity: 1;
    }
}

.letter_content {
    /* min-width: ; */
    width: 65vw;
    height: 80vh;
    padding: auto;
    background-color: rgb(253, 247, 241);
}
</style>

