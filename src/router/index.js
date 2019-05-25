import Vue from 'vue'
import Router from 'vue-router'
import myTechnician1 from '@/components/golocars/technician1'
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
      component:myTechnician1
    },
  ]
})

