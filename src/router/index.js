import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Home from "../views/Home";
import Tasks from "../views/Tasks";
import Login from "../views/Login";
import Score from "../views/Score";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.isUserLoggedIn) {
        router.push("/");
        next();
      } else {
        next();
      }
    }
  },
  {
    path: "/score",
    name: "Score",
    component: Score,
    beforeEnter: (to, from, next) => {
      if (!store.state.isUserLoggedIn) {
        router.push("/login");
        next();
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
