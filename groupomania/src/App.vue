<template>
  <div id="app">
    <Header></Header>
    <div class="content"><router-view /></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content {
    width: 100%;
    // height: 500px;
  }
}

#nav {
  margin-bottom: 50px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
