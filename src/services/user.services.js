import api from './api'

export default {
  getUsuarios() {
    return api.get('/usuarios')
  },

  Login(username, password) {
    
    const dominio = window.location.hostname
  .replace(/^www\./, '')
  .split('.')[0];

  const data = { username, password, subdominio: dominio.split('.')[0] }
    return api.post('/api/users/login', data)
  },

  eliminarUsuario(id) {
    return api.delete(`/usuarios/${id}`)
  },

  loguearUsario(data) { 
    return api.post('/usuarios/login', data)
  }
}