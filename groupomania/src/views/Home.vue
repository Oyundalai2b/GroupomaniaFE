<template>
  <div class="container home">
    <div class="row main">
      <div class="col company-text">
        <h1>Bring your workforce from disjointed to connected</h1>
        <p>
          An 8-hour workday can feel like forever when you feel disconnected
          from your coworkers. Not with Jostle! Our intranet helps your people
          understand their company culture and find the information they need. ✔
          Don’t waste your time building a custom intranet ✔ Connect everyone,
          everywhere ✔ Intuitive and quick to learn
        </p>
      </div>
    </div>
    <div class="row pic">
      <img :src="image" alt="technology image" />
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

  .pic {
    align-self: center;
    width: 50%;
    height: 100%;
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
