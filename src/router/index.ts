import { createRouter, createWebHistory } from "vue-router";
import Applications from "../views/DecisionView.vue";

export const routes = [
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
