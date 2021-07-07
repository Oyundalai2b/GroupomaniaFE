<template>
  <div class="container post">
    <div class="row single-post" v-if="post">
      <img id="post-img" class="col-12 col-md-6" v-bind:src="post.imgURL" />
      <div class="col-12 col-md-6 post-context">
        <h4>{{ post.title }}</h4>
        <!-- <p>{{ post }}</p> -->
        <p>{{ post.content }}</p>
        <p class="posted-by">
          Posted by:<strong> {{ post.user.name }}</strong> on
          {{ post.createdAt | formatDate("DD/MM/YYYY") }}
        </p>

        <b-link href="#" @click="goBack">Back</b-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Post",
  data() {
    return {
      post: null,
    };
  },
  methods: {
    goBack() {
      router.go(-1);
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
        this.post = data;
      })
      .catch((err) => {
        console.log("Error occured!");
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.single-post {
  margin: 10px 0;
  display: flex;
  border-radius: 10px;
  a#delete-post {
    color: #dc3545;
  }
  img,
  .col-12 {
    object-fit: cover;
    padding: 0 !important;
    margin-bottom: 5px !important;
  }
  img,
  .col-md-6 {
    object-fit: cover;
    padding: 0 !important;
    margin-bottom: 0 !important;
  }

  .post-context {
    background-color: #ececec;
    width: 100%;
    padding: 0 !important;
    h4 {
      text-transform: uppercase;
      font-weight: 400;
      border-bottom: solid #f8f9fa;
    }
    p {
      text-overflow: ellipsis;
      white-space: wrap;
      overflow: hidden;
    }
    .posted-by {
      border-top: solid #f8f9fa;
    }
  }
}
</style>
