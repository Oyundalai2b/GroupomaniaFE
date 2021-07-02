<template>
  <div class="post">
    <div class="single-post" v-if="post">
      <img id="post-img" v-bind:src="post.imgURL" />
      <div class="post-context">
        <h4>{{ post.title }}</h4>
        <!-- <p>{{ post }}</p> -->
        <p>{{ post.content }}</p>
        <p>Created at: {{ post.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: null,
    };
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
        this.post = data;
      })
      .catch((err) => {
        console.log("Error occured!");
        console.log(err);
      });
  },
};
</script>
