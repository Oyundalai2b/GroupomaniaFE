<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img :src="images.image" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <router-link to="/">Home</router-link>
          <router-link to="/signup">Sign Up</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/posts">Post List</router-link>
          <router-link to="/posts/create">New post</router-link>
          <router-link to="/signout">Sign Out</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import image from "../../public/images/mobile-icon-above-font-removebg-preview.png";
// import image2 from "../../public/images/icon110x110.png";

export default {
  name: "NavBar",
  data: function () {
    return {
      images: {
        image: image,
        // image2: image2,
      },
    };
  },
};
</script>

<style lang="scss">
#nav {
  background-color: #d9d9ea;
  img {
    width: 250px;
    height: auto;
  }
  a.router-link-exact-active {
    color: #fc3006 !important;
  }
  #nav-collapse {
    justify-content: flex-end;

    .navbar-nav {
      // justify-content: space-evenly;
      padding: 30px;
      a {
        font-weight: bold;
        color: #0e0302;
        text-decoration: none;
        padding-left: 10px;
        white-space: nowrap;
        &:hover {
          color: #fc3006;
        }
      }
    }
  }
  button {
    border-color: #fc3006;
    color: #fc3006;
    span {
      color: #fc3006;
    }
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28252, 48, 6, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
}
</style>
