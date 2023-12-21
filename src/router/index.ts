import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact-us',
      name: 'home',
      component: () => import('../views/contactUs.vue')
    },
  ]
})

export default router
