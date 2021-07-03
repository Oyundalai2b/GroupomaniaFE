<template>
  <div id="new-post">
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

      <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder=""
        drop-placeholder="Drop file here..."
      ></b-form-file>

      <!-- Plain mode -->
      <b-button class="mr-2" type="submit" variant="primary">Post</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "PostCreate",
  data() {
    return {
      title: "",
      content: "",
      file1: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const bearer = "Bearer " + localStorage.getItem("token");

      if (this.file1) {
        let data = new FormData();
        data.append(
          "post",
          JSON.stringify({ title: this.title, content: this.content })
        );
        data.append("image", this.file1);

        fetch(`http://localhost:3000/api/posts`, {
          method: "POST",
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
        fetch(`http://localhost:3000/api/posts/`, {
          method: "POST",
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
};
</script>

<style lang="scss">
#new-post {
  height: auto;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  form {
    #textarea {
      margin-top: 20px;
    }
    div.custom-file {
      margin: 10px;
    }
    button {
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
