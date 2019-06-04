import Vue from 'vue'
import Router from 'vue-router'
import Hero from '../components/hero/Hero.vue'
import Candidat from '../components/admin/details_page/Candidat.vue'
import Candidatures from '../components/admin/page_three/Candidatures.vue'
import DataTable from '../components/admin/page_one/DataTable.vue'
import Offres from '../components/offres/Offres.vue'
import Offre from '../components/offres/Offre.vue'
import StepOne from '../components/admin/actions/StepOne.vue'
import StepTwo from '../components/admin/actions/StepTwo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hero-view',
      component: Hero
    },
    {
      path: '/offres',
      name: 'offres-view',
      component: Offres
    },
    {
      path: '/offres/:id',
      name: 'offre-view',
      component: Offre
    },
    {
      path: '/admin/offres',
      name: 'admin-offres-view',
      component: DataTable
    },
    {
      path: '/admin/offres/:id/modify/step-1',
      name: 'admin-offres-modify-view',
      component: StepOne
    },
    {
      path: '/admin/offres/:id/create/step-2',
      name: 'admin-offres-modify-view-2',
      component: StepTwo
    },
    {
      path: '/admin/candidatures',
      name: 'admin-candidatures-view',
      component: Candidatures
    },
    {
      path: '/admin/candidats/:id',
      name: 'admin-candidat-view',
      component: Candidat
    }
  ]
})
