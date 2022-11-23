<template>
  <div class="incenter">
    <div class="text1">
      <p>参与项目开发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打了许多比赛</p>
      <p>自己在一间小小的工作室</p>
      <p>和一群志同道合的伙伴</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
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
}
p {
  font-size: larger;
  font-weight: 700;
}
</style>
