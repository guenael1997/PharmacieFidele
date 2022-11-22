import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Product from '../views/Product.vue'
import Pannier from '../views/Pannier.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: Product
    },
    {
      path: '/pannier',
      name: 'Pannier',
      component: Pannier
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
