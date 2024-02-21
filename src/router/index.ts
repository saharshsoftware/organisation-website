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
      name: "blog-detail-route",
      component: () => import("../views/blogDetail.vue"),
      props: (route) => ({ id: route.params.id }),
    },
    {
      path: `${ROUTE_CONSTANTS.PROJECTS}/:id`,
      name: "project-detail-route",
      component: () => import("../views/projectDetail.vue"),
      props: (route) => ({ id: route.params.id }),
    },
    {
      path: `${ROUTE_CONSTANTS.PROJECT_MODULES}/:id`,
      name: "project-modulese",
      component: () => import("../views/projectModules.vue"),
      props: (route) => ({ id: route.params.id }),
    },
    {
      path: `${ROUTE_CONSTANTS.PROJECT_MODULE_DETAIL}/:id`,
      name: "project-module-details",
      component: () => import("../views/projectModuleDetails.vue"),
      props: (route) => ({ id: route.params.id }),
    },
    {
      path: ROUTE_CONSTANTS.PRODUCT_ENGINEERING,
      name: "project-engineering",
      component: () => import("../views/productEngineering.vue"),
    },
    {
      path: ROUTE_CONSTANTS.STAFF_AUGMENTATION,
      name: "staff-augmentation",
      component: () => import("../views/staffAugmentation.vue"),
    },
  ],
});

export default router;
