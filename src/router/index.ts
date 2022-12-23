import { createRouter, createWebHistory } from "vue-router";
import Applications from "../views/ApplicationsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "applications",
      component: Applications,
    },
    {
      path: "/later",
      name: "later",
      component: () => import("../views/LaterView.vue"),
    },
    {
      path: "/interviews",
      name: "interviews",
      component: () => import("../views/InterviewView.vue"),
    },
  ],
});

export default router;
