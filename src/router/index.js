// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import AddCargoo from '../components/AddCargo.vue'
import AddUser from '../components/AddUser.vue'
import DashboardPage from '../components/DashboardPage.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'

const routes = [
  {
    path: '/add-cargoo',
    name: 'AddCargoo',
    component: AddCargoo
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
