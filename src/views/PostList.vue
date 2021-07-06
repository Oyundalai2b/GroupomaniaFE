<template>
  <div class="postList">
    <div class="container posts">
      <div
        class="row singlePost mt-4"
        v-bind:class="classObject(post)"
        :key="index"
        v-for="(post, index) in displayPosts"
      >
        <img id="post-img" class="col-md-4 col-12" v-bind:src="post.imgURL" />

        <div class="col-md-8 col-12 postContext">
          <h4>{{ post.title }}</h4>
          <p>{{ post.content }}</p>
          <div class="footer-of-post">
            <div class="col-md-6 col-12">
              Posted by:<strong> {{ post.user.name }}</strong> at
              {{ post.createdAt | formatDate("DD/MM/YYYY hh:mm a") }}
            </div>
            <div class="links col-md-6 col-12">
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
      </div>
    </div>

    <div class="mt-3 align-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
        @input="paginate(currentPage)"
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
      rows: 0,
      perPage: 3,
      currentPage: 1,
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  mounted() {
    const bearer = "Bearer " + localStorage.getItem("token");
    fetch(`${process.env.VUE_APP_API_URL}/api/posts`, {
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
        console.log(data);
        this.posts = data;
        this.displayPosts = data.slice(0, this.perPage);
        this.rows = this.posts.length;
        console.log(data[0].user);
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
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.displayPosts = this.posts.slice(start, start + this.perPage);
    },

    classObject: function (currentPost) {
      return {
        unread: !currentPost.isRead,
      };
    },
  },
};
</script>

<style lang="scss">
.toast-module-opacity {
  opacity: 1 !important;
}
.postList {
  .posts {
    width: 100%;
    margin: 20px auto;

    .singlePost {
      display: flex;
      border-radius: 10px;
      a#delete-post {
        color: #dc3545;
      }
      img,
      .col-12 {
        object-fit: cover;
        padding: 0 !important;
        margin-bottom: 5px;
      }

      .col-12,
      .postContext {
        background-color: #ececec;
        width: 100%;
        // padding: 0 !important;
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
        .footer-of-post {
          border-top: solid #f8f9fa;
          display: flex;
          justify-content: space-between;
          margin-top: auto;
        }
      }
      img.col-md-4 {
        // height: 200px;
      }
      img.col-12 {
        // height: 300px;
      }
      .col-md-8,
      .postContext {
        display: flex;
        flex-direction: column;
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
          height: auto;
        }
        .footer-of-post {
          border-top: solid #f8f9fa;
          display: flex;
          margin-top: auto;
        }
      }
      .unread {
        .postContext {
          h4 {
            color: #dc3545;
          }
        }
      }
    }
  }
}
</style>
