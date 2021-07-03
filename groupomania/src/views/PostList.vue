<template>
  <div class="postList">
    <div class="posts">
      <div class="singlePost" :key="index" v-for="(post, index) in posts">
        <img id="post-img" v-bind:src="post.imgURL" />
        <div class="postContext">
          <h4>{{ post.title }}</h4>
          <p>{{ post }}</p>
          <router-link :to="{ name: 'Post', params: { id: post.id } }"
            >View post
          </router-link>
          <router-link
            :to="{ name: 'PostUpdate', params: { id: post.id } }"
            v-if="canUpdate(post.userId)"
            >| Edit post |
          </router-link>
          <router-link
            :to="{ name: 'PostDelete', params: { id: post.id } }"
            v-if="canUpdate(post.userId)"
            id="delete-post"
            >Delete post
          </router-link>
        </div>
      </div>
    </div>

    <div class="mt-3 align-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
        first-number
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  components: {},
  data() {
    return {
      posts: [],
      displayPosts: [],
      rows: 100,
      perPage: 5,
      currentPage: 1,
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
  methods: {
    canUpdate(id) {
      if (parseInt(localStorage.getItem("userId")) === id) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.postList {
  .posts {
    width: 60%;
    margin: 20px auto;
    .singlePost {
      display: flex;
      border: solid #6c757d;
      border-radius: 10px;
      margin: 20px 0;
      padding: 5px;
      img {
        width: 200px;
        border-radius: 10px;
        object-fit: cover;
      }
      .postContext {
        border-radius: 10px;
        word-break: break-all;
        padding: 0 20px;
        h4 {
          text-transform: uppercase;
          color: #0d6efd;
        }
        p {
          width: auto;
          // word-break: break-all;
        }
        a {
          font-size: large;
          text-decoration: none;
        }
        a#delete-post {
          color: #dc3545;
        }
      }
    }
  }
}
</style>
