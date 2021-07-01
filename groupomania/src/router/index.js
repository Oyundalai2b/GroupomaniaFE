import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import PostList from "../views/PostList.vue";
import PostCreate from "../views/PostCreate.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (
    localStorage.getItem("token") == "" ||
    localStorage.getItem("token") == null
  ) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("token") != "") {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostList,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/posts/create",
    name: "PostCreate",
    component: PostCreate,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: Post,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: ifNotAuthenticated,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
