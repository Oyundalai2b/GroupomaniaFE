<template>
  <div class="sign-out">Please click here to Login</div>
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
