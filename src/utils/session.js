let timeout = null

//const INACTIVITY_TIME = 15 * 60 * 1000 // 15 minutos
const INACTIVITY_TIME = 10 * 1000
export const startInactivityTimer = (router) => {

  resetTimer(router)

  const events = [
    'load',
    'mousemove',
    'mousedown',
    'click',
    'scroll',
    'keypress',
    'touchstart'
  ]

  events.forEach(event =>
    window.addEventListener(event, () => resetTimer(router))
  )
}

const resetTimer = (router) => {

  clearTimeout(timeout)

  timeout = setTimeout(() => {

    logout(router)

  }, INACTIVITY_TIME)
}

export const logout = (router) => {

  clearTimeout(timeout)

  localStorage.removeItem('token')
  localStorage.removeItem('user')

  const userStore = useUserStore()
  userStore.$reset()

  router.replace('/')
}

// router.beforeEach((to, from, next) => {

//   const token = localStorage.getItem('token')

//   if (to.path !== '/' && !token) {
//     return next('/')
//   }

//   next()
// })























// export const startInactivityTimer = (router) => {

//   resetTimer(router)

//   window.onload = () => resetTimer(router)
//   document.onmousemove = () => resetTimer(router)
//   document.onkeypress = () => resetTimer(router)
//   document.onclick = () => resetTimer(router)
//   document.onscroll = () => resetTimer(router)
// }

// const resetTimer = (router) => {

//   clearTimeout(timeout)

//   timeout = setTimeout(() => {

//     logout(router)

//   }, INACTIVITY_TIME)
// }

// export const logout = (router) => {

//   localStorage.removeItem('token')
//   localStorage.removeItem('user')

//   router.push('/')
// }