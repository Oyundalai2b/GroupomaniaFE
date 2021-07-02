<template>
  <div class="sign-out">Please click here to <a href="Login">login</a></div>
</template>

<script>
export default {
  name: "SignOut",
  data() {
    return {};
  },
  mounted() {
    localStorage.clear();
  },
};
</script>
