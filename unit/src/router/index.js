import Vue from 'vue'
import Router from 'vue-router'
import Unitselect from '@/components/Unitselect'
import Unitclick from '@/components/Unitclick'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Unitselect',
      component: Unitselect
    },
    {
      path: '/unit',
      name: 'Unitclick',
      component: Unitclick
    }
  ]
})
