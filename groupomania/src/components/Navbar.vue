<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/posts">Post List</router-link> |
    <router-link to="/posts/create">Create new post</router-link> |
    <router-link to="/signout">Sign Out</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
#nav {
  width: 50%;
  a {
    margin: 0 10px;
  }
}
</style>
