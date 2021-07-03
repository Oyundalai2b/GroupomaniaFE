<template>
  <div id="header">
    <div class="imageLogo">
      <img :src="image" alt="" />
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
import image from "../../public/images/icon-left-font-removebg-preview.jpg";
// import image from "../../public/images/icon200x200.png";

import Navbar from "./Navbar";
export default {
  name: "Header",
  components: {
    Navbar,
  },
  data: function () {
    return {
      image: image,
    };
  },
};
</script>

<style lang="scss">
#header {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #d9d9ea;
  color: #0e0302;
  .imageLogo {
    width: 40%;
    img {
      position: absolute;
      left: 0;
      height: 100px;
      width: auto;
    }
  }
  div#nav {
    position: absolute;
    right: 0;
  }
}
</style>
