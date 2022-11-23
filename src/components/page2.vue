<template>  
    <div class="incenter">
      <div style="color: red">Hello,page2</div>
      <router-link to="page3">go to page3</router-link>
    </div>  
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPage() {
      this.$router.push("page" + 3);
      // this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.incenter {
  background: url("../assets/page2.png");
  background-size: 100% 100%;
  height: 70%;
  width: 75%;
}
</style>
