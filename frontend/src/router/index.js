import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/CreateComponent.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../components/ContactComponent.vue"),
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => import("../components/EditComponent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
