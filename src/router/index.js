import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import seguimientoNew from '../views/seguimientoNew.vue'
import seguimientoEdit from '../views/seguimientoEdit.vue'
import seguimientoView from '../views/seguimientoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/createS',
    name: 'createS',
    component: seguimientoNew
  },
  {
    path: '/editS/:id',
    name: 'editS',
    component: seguimientoEdit
  },
  {
    path: '/viewS/:id',
    name: 'viewS',
    component: seguimientoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
