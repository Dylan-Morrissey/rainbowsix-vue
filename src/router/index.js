import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Operators from '@/components/Operators'
import Operator from '@/components/Operator'
import Edit from '@/components/Edit'
import Maps from '@/components/Maps'
import Map from '@/components/Map'
import EditMap from '@/components/EditMap'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/editmap',
      name: 'EditMap',
      component: EditMap,
      props: true
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
