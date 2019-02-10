import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/page/Main'
import Profile from '@/page/Profile'
import Weekly from '@/page/Weekly'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/weekly',
      name: 'Weekly',
      component: Weekly
    },
  ]
})
