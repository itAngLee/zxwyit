import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';

import Test from './router/test.js';
import Base from './router/base.js';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
          ...Test,
          ...Base
      ]

    },
    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/aaa',
      name: 'aaa',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/aaa.vue')
    }
  ]
})
