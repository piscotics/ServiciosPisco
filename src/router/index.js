import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/views/Home.vue'
import { useUserStore } from '../stores/users'

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home , meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔥 Middleware
router.beforeEach((to, from, next) => {

  // usuario guardado
  const usuario = localStorage.getItem('user')

   if(usuario) useUserStore().setUsuario(usuario) // Guardar datos del usuario en el store

  // si ya está logueado y quiere entrar al login
  if (usuario && to.path === '/') {
    
    next('/home')
  }

  // si NO está logueado y quiere entrar a home
  else if (!usuario && to.path === '/home') {
    next('/')
  }

  else {
    next()
  }
})

export default router