<template>
  <div class="post-update">
    <b-form @submit="onSubmit">
      <b-form-input
        v-model="title"
        placeholder="Enter post title"
      ></b-form-input>
      <b-form-textarea
        id="textarea"
        v-model="content"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      >
      </b-form-textarea>
      <div>
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
      <b-button class="mr-2" type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "PostUpdate",
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

      if (this.file1) {
        let data = new FormData();
        data.append(
          "post",
          JSON.stringify({ title: this.title, content: this.content })
        );
        data.append("image", this.file1);

        fetch(`http://localhost:3000/api/posts/${postId}`, {
          method: "PUT",
          body: data,
          headers: {
            Authorization: bearer,
          },
        })
          .then((res) => {
            if (res.status == 201) {
              console.log("User added successfully!");
            }
          })
          .catch((err) => {
            console.log("Error occured!");
            console.log(err);
          });
      } else {
        fetch(`http://localhost:3000/api/posts/${postId}`, {
          method: "PUT",
          body: JSON.stringify({
            post: { title: this.title, content: this.content },
          }),
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status == 201) {
              console.log("User added successfully!");
            }
          })
          .catch((err) => {
            console.log("Error occured!");
            console.log(err);
          });
      }
    },
  },
  mounted() {
    let postId = this.$router.currentRoute.params.id;
    const bearer = "Bearer " + localStorage.getItem("token");
    fetch(`http://localhost:3000/api/posts/${postId}`, {
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
.post-update {
  height: auto;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  form {
    #textarea {
      margin-top: 20px;
    }
    img {
      width: 300px;
      height: auto;
    }
    button {
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
