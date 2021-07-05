<template>
  <div class="postList">
    <div class="container posts">
      <div
        class="row singlePost"
        v-bind:class="classObject(post)"
        :key="index"
        v-for="(post, index) in displayPosts"
      >
        <img id="post-img" class="col-md-4" v-bind:src="post.imgURL" />

        <div class="col-md-8 postContext">
          <h4>{{ post.title }}</h4>
          <p>{{ post.content }}</p>
          <div class="footer-of-post">
            <div>
              Posted by:<strong> {{ post.user.name }}</strong>
            </div>
            <div class="links">
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
// .postList {
//   .posts {
//     width: 60%;
//     margin: 20px auto;

//     .singlePost {
//       display: flex;
//       border-radius: 10px;
//       padding: 20px 5px;

//       img {
//         margin-right: 20px;
//         width: 200px;
//         height: 200px;
//         object-fit: cover;
//       }
//       .postContext {
//         position: relative;
//         width: 100%;
//         background-color: #ececec;
//         text-align: center;

//         h4 {
//           text-transform: uppercase;
//           font-weight: 400;
//           border-bottom: solid #f8f9fa;
//         }
//         p {
//           width: 100%;
//           text-overflow: ellipsis;
//           white-space: wrap;
//           overflow: hidden;
//         }
//         .footer-of-post {
//           border-top: solid #f8f9fa;
//           width: 100%;
//           position: absolute;
//           display: flex;
//           justify-content: space-between;
//           bottom: 5px;

//           div {
//             color: #2c3e50;
//             margin-left: 5px;
//           }
//           .links {
//             margin-right: 5px;
//             a {
//               font-size: large;
//               text-decoration: none;
//             }
//             a#delete-post {
//               color: #dc3545;
//             }
//           }
//         }
//       }
//     }
//     .unread {
//       .postContext {
//         h4 {
//           color: #0d6efd;
//         }
//       }
//     }
//   }
// }
// #myListView.k-widget,
// #catalog-items.k-widget * {
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }
</style>
