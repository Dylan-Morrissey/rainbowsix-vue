import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import Operators from '@/components/Operators'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/operators',
      name: 'Operators',
      component: Operators
    }
  ]
})
