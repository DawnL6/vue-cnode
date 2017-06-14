import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
