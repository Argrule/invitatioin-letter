<template>
  <div class="incenter">
    <div :class="[showActive?'text1':'text1 hidden']">
      <p>有时你是否会想起</p>
      <p>自己在一间小小的工作室</p>
      <p>和一群志同道合的伙伴</p>
      <p>为未来奋斗，砥砺前行</p>
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
}
</script>

<style scoped>
.hidden{  
  opacity: 0;
}
.incenter {
  background: url("../assets/page1.png");
  background-size: 100% 100%;
  height: 70%;
  width: 75%;
  display: flex;
  align-items: center;
}
.text1 {
  height: 85%;
  width: 35%;
  background-color: rgba(252, 189, 107, 0.9);
  border-radius: 10px;
  margin: 5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  transition: all 1s ease-in-out;
  /* animation: opacity 1s; */
}
p {
  font-size: large;
  font-weight: 700;
}
</style>
