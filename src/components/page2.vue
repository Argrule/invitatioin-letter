<template>
  <div class="incenter">
    <div  :class="[showActive?'text1':'text1 hidden']">
      <p>参与项目开发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打了许多比赛</p>
      <p>自己在一间小小的工作室</p>
      <p>和一群志同道合的伙伴</p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  computed:{
    ...mapState('m_user',['showActive'])
  },
  methods:{
    ...mapMutations('m_user',['changeShow'])
  }
};
</script>

<style scoped>
.hidden{
  opacity: 0;
}
.incenter {
  background: url("../assets/page2.png");
  background-size: 100% 100%;
  height: 70%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text1 {
  height: 65%;
  width: 70%;
  background-color: rgba(252, 189, 107, 0.9);
  border-radius: 10px;
  margin: 3%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 1s ease-in-out;
}
p {
  font-size: larger;
  font-weight: 700;
}
</style>
