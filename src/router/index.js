import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/me.vue')
    },
    {
      path: '/post/:postId',
      name: 'post',
      props: true,
      component: () => import('../views/post.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
