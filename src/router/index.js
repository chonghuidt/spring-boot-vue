import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'register',
      component: HelloWorld
    }
  ]
})
