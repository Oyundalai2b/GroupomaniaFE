<template>
  <div id="header">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "Header",
  components: {
    Navbar,
  },
  data: function () {
    return {
      // image: image,
    };
  },
};
</script>

<style lang="scss"></style>
