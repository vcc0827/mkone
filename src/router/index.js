import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home}
  ]
})
export default router