import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import CoolDude from './views/CoolDude.vue'
import {auth} from 'firebase';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignUp
		},
		{
			path: '/cool-dude',
			name: 'coolDude',
			component: CoolDude,
			meta: {
				requiresAuth: true
			}
		}
  ]
})

export default router;
