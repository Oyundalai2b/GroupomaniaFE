<template>
  <div class="postList">
    <ul>
      <li :key="index" v-for="(post, index) in posts">
        <h2>{{ post.title }}</h2>
        <img v-bind:src="post.imgURL" />
        {{ post }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
  components: {},
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    const bearer = "Bearer " + localStorage.getItem("token");
    fetch("http://localhost:3000/api/posts", {
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
        this.posts = data;
      })
      .catch((err) => {
        console.log("Error occured!");
        console.log(err);
      });
  },
};
</script>
