<template>
  <div id="sign-out" class="container">
    <div class="row main">
      <div class="col-md-6 company-text">
        <h1>Bring your workforce from disjointed to connected</h1>
        <h3>Please click here to <a href="Login">login</a></h3>
      </div>

      <img :src="image" class="pic col-md-6" alt="technology image" />
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
  .main {
    margin-top: 10px;
    margin-bottom: 10px;
    div.col-md-6.company-text {
      padding-right: 30px !important;
    }
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    img.col-md-6 {
      padding: 0 !important;
    }
  }
}
</style>
