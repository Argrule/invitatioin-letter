<template>
  <div class="incenter">
    <div  :class="[showActive?'text1':'text1 hidden']">
      <p>一起安静的自习</p>
      <p>一起团建</p>
      <p>时光荏苒</p>
      <p>毕业后</p>
      <p>我们各奔东西</p>
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
  justify-content: flex-end;
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
  align-items: center;
  transition: all 1s ease-in-out;
}
p {
  font-size: large;
  font-weight: 700;
}
</style>
