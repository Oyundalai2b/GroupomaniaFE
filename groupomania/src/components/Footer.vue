<template>
  <div class="home">
    <div class="contacts">
      <i class="bi bi-facebook"> facebook | </i>
      <i class="bi bi-instagram"> instagram | </i>
      <br />
      <span>&copy; 2021 Groupomania</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #0f1b34;
  color: white;
  .contacts {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    height: 30%;
    margin: auto;
    span {
      font-size: large;
    }
  }
}
</style>
