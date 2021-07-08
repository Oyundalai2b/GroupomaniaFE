<template>
  <div id="post-delete">
    <b-form @submit="onSubmit">
      <h4>
        {{ title }}
      </h4>

      <p>
        {{ content }}
      </p>
      <div class="delete-current-image">
        <img v-bind:src="currentImage" alt="" />
      </div>

      <b-button class="mr-2" type="submit" variant="danger">Delete</b-button>
    </b-form>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "PostDelete",
  data() {
    return {
      title: "",
      content: "",
      file1: null,
      currentImage: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const bearer = "Bearer " + localStorage.getItem("token");
      let postId = this.$router.currentRoute.params.id;

      fetch(`${process.env.VUE_APP_API_URL}/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status == 200) {
            this.$root.$bvToast.toast(`Your post has been deleted!`, {
              title: "Post deleted",
              // autoHideDelay: 3000,
              appendToast: false,
              variant: "success",
              solid: true,
            });
            router.push({ name: "PostList" });
          }
        })
        .catch((err) => {
          console.log("Error occured!");
          console.log(err);
        });
    },
  },
  mounted() {
    let postId = this.$router.currentRoute.params.id;
    const bearer = "Bearer " + localStorage.getItem("token");
    fetch(`${process.env.VUE_APP_API_URL}/api/posts/${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.title = data.title;
        this.content = data.content;
        this.currentImage = data.imgURL;

        if (data.userId !== parseInt(localStorage.getItem("userId"))) {
          router.push({ name: "PostList" });
        }
      })
      .catch((err) => {
        console.log("Error occured!");
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
#post-delete {
  height: auto;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  form {
    h4 {
      font-weight: 700;
      text-transform: uppercase;
    }
    p {
      margin-top: 20px;
    }
    div.custom-file {
      margin-top: 10px;
    }
    .delete-current-image img {
      width: 100%;
    }
    button {
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
img {
  width: 500px;
  height: auto;
}
</style>
