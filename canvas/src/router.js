import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Offres from './views/offres/Offres.vue'
import Offre from './views/offres/Offre.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/others/About.vue')
    },
    {
      path: '/offres',
      name: 'offres-view',
      // component: Offres
      component: () => import(/* webpackChunkName: "offres" */ './views/offres/Offres.vue')
    },
    {
      path: '/offres/:id',
      name: 'offre-view',
      component: Offre
    },
    // {
    //   path: '/admin/offres',
    //   name: 'admin-offres-view',
    //   component: DataTable
    // },
    // {
    //   path: '/admin/offres/:id/modify/step-1',
    //   name: 'admin-offres-modify-view',
    //   component: StepOne
    // },
    // {
    //   path: '/admin/offres/:id/create/step-2',
    //   name: 'admin-offres-modify-view-2',
    //   component: StepTwo
    // },
    // {
    //   path: '/admin/candidatures',
    //   name: 'admin-candidatures-view',
    //   component: Candidatures
    // },
    // {
    //   path: '/admin/candidats/:id',
    //   name: 'admin-candidat-view',
    //   component: Candidat
    // }
  ]
})
