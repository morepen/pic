import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
import Detail from '../views/index/detail'
import Login from '../views/login/login'
import Register from '../views/login/register'
import Publish from '../views/publish/index'
import Pass from '../views/pass/index'
import cart from '../views/cart/index'
import chat from '../views/chat/index'
import room from '../views/chat/room'
import near from '../views/near/index'
import Usercenter from '../views/usercenter/index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Index',
      	component: Index,
        children: [
          {
            path: '/detail',
            name: 'detail',
            component: Detail
          },
          {
            path: '/detail',
            name: 'detail',
            component: Detail
          }
        ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
    	path: '/publish',
      name: 'publish',
   		component: Publish
    },
    {
      path: '/pass',
      name: 'pass',
      component: Pass
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: Usercenter
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/near',
      name: 'near',
      component: near
    },    
    { 
                path: '/chat', 
                component: chat, 
                children:[
                    { path: '/chat/index', component: chat},
                    { path: '/chat/room', component: room}
                ]
            },

  ]
})
