<template>
  <div id="post-delete">
    <b-form @submit="onSubmit">
      <b-form-input
        id="input-title"
        v-model="title"
        placeholder="Enter post title"
      ></b-form-input>

      <b-form-textarea
        id="textarea"
        v-model="content"
        placeholder="Enter something..."
        rows="3"
        max-rows="10"
      >
      </b-form-textarea>
      <div class="delete-current-image">
        <p>Current Image</p>
        <img v-bind:src="currentImage" alt="" />
      </div>
      <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>

      <!-- Plain mode -->
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
            console.log("User added successfully!");
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
    #input-title {
      font-weight: 700;
      text-transform: uppercase;
    }
    #textarea {
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
