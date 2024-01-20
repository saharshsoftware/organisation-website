import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_CONSTANTS } from "../shared/route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_CONSTANTS.HOME,
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: ROUTE_CONSTANTS.ABOUT,
      name: "about",
      component: () => import("../views/aboutUs.vue"),
    },
    {
      path: ROUTE_CONSTANTS.CONTACT_US,
      name: "contact",
      component: () => import("../views/contactUs.vue"),
    },
    {
      path: ROUTE_CONSTANTS.BLOG,
      name: "blog",
      component: () => import("../views/blogs.vue"),
    },
    {
      path: ROUTE_CONSTANTS.PROJECTS,
      name: "projects",
      component: () => import("../views/projects.vue"),
    },
    {
      path: `${ROUTE_CONSTANTS.BLOG}/:id`,
      component: () => import("../views/blogDetail.vue"),
      props: (route) => ({ id: route.params.id }),
    },
  ],
});

export default router;
