import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import Operators from '@/components/Operators'
import Operator from '@/components/Operator'
import Maps from '@/components/Maps'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'

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
    },
    {
      path: '/operator',
      name: 'Operator',
      component: Operator
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
