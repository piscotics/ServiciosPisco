let timeout = null

const INACTIVITY_TIME = 15 * 60 * 1000 // 15 minutos

export const startInactivityTimer = (router) => {

  resetTimer(router)

  window.onload = () => resetTimer(router)
  document.onmousemove = () => resetTimer(router)
  document.onkeypress = () => resetTimer(router)
  document.onclick = () => resetTimer(router)
  document.onscroll = () => resetTimer(router)
}

const resetTimer = (router) => {

  clearTimeout(timeout)

  timeout = setTimeout(() => {

    logout(router)

  }, INACTIVITY_TIME)
}

export const logout = (router) => {

  localStorage.removeItem('token')
  localStorage.removeItem('user')

  router.push('/')
}