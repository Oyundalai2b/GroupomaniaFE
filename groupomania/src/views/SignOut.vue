<template>
  <div id="sign-out">
    <div class="main">
      <div class="company-text">
        <h1>Bring your workforce from disjointed to connected</h1>
        <h3>Please click here to <a href="Login">login</a></h3>
      </div>
    </div>
    <div class="pic">
      <img :src="image" alt="technology image" />
    </div>
  </div>
</template>

<script>
import image from "../../public/images/home.jpg";
export default {
  name: "SignOut",
  // data() {
  //   return {};
  // },
  data: function () {
    return {
      image: image,
    };
  },
  mounted() {
    localStorage.clear();
  },
};
</script>

<style lang="scss">
#sign-out {
  height: auto;
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .main {
    width: 35%;
    height: auto;
    display: flex;

    justify-content: center;
    align-items: center;
  }
  h3 {
    padding-top: 30px;
  }
  .pic {
    width: 50%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
}
</style>
