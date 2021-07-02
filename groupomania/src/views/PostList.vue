<template>
  <div class="postList">
    <div class="posts">
      <div class="singlePost" :key="index" v-for="(post, index) in posts">
        <img id="post-img" v-bind:src="post.imgURL" />
        <div class="postContext">
          <h4>{{ post.title }}</h4>
          <p>{{ post }}</p>
          <router-link :to="{ name: 'Post', params: { id: post.id } }"
            >View post |
          </router-link>
          <router-link
            :to="{ name: 'PostUpdate', params: { id: post.id } }"
            v-if="canUpdate(post.userId)"
            >Edit post |
          </router-link>
          <router-link
            :to="{ name: 'PostDelete', params: { id: post.id } }"
            v-if="canUpdate(post.userId)"
            >Delete post
          </router-link>
        </div>
      </div>
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
      border: solid #42b983;
      border-radius: 10px;
      margin: 20px 0;
      padding: 5px;
      img {
        width: 200px;
        border-radius: 10px;
      }
      .postContext {
        border-radius: 10px;

        h4 {
          text-transform: uppercase;
        }
        p {
          padding: 0 10px;
          width: auto;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
