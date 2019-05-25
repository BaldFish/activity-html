import Vue from 'vue'
import Router from 'vue-router'
import myGolocarsTechnician1 from '@/components/golocars/technician1'
import myGoloclassTechnician1 from '@/components/goloclass/technician1'
import myGolomasterTechnician1 from '@/components/golomaster/technician1'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/golocars/technician/1"
    },
    {
      path:'/golocars/technician/1',
      name:'technician1',
      component:myGolocarsTechnician1
    },
    {
      path:'/goloclass/technician/1',
      name:'technician1',
      component:myGoloclassTechnician1
    },
    {
      path:'/golomaster/technician/1',
      name:'technician1',
      component:myGolomasterTechnician1
    },
  ]
})

