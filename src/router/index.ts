import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../views/contactUs.vue')
    },
  ]
})

export default router
