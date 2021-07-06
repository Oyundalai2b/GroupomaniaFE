import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Post from "../views/Post.vue";
import PostList from "../views/PostList.vue";
import PostCreate from "../views/PostCreate.vue";
import PostUpdate from "../views/PostUpdate.vue";
import PostDelete from "../views/PostDelete.vue";
import SignUp from "../views/SignUp.vue";
import SignOut from "../views/SignOut.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (localStorage.getItem("token") == null) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("token") != null) {
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
    path: "/posts/:id/update",
    name: "PostUpdate",
    component: PostUpdate,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/posts/:id/delete",
    name: "PostDelete",
    component: PostDelete,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/signout",
    name: "SignOut",
    component: SignOut,
    beforeEnter: ifAuthenticated,
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
