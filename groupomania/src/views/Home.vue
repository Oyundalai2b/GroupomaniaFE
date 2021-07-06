<template>
  <div class="container home">
    <div class="row main">
      <div class="col-md-6 company-text">
        <h1>Bring your workforce from disjointed to connected</h1>
        <p>
          An 8-hour workday can feel like forever when you feel disconnected
          from your coworkers. Not with Jostle! Our intranet helps your people
          understand their company culture and find the information they need.
          <br />✔ Don’t waste your time building a custom intranet <br />
          ✔ Connect everyone, everywhere <br />✔ Intuitive and quick to learn
        </p>
      </div>
      <img :src="image" class="col-md-6 pic" alt="technology image" />
    </div>
  </div>
</template>

<script>
import image from "../../public/images/home1.jpg";
export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      image: image,
    };
  },
};
</script>

<style lang="scss">
.home {
  .main {
    margin-top: 10px;
    margin-bottom: 10px;
    div.col-md-6.company-text {
      padding-right: 30px !important;
      p {
        text-align: justify;
      }
    }
    img {
      width: 100%;
      // padding: 10px;
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
