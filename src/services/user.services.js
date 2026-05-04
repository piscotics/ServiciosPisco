import api from './api'

export default {
  getUsuarios() {
    return api.get('/usuarios')
  },

  crearUsuario(data) {
    return api.post('/usuarios', data)
  },

  eliminarUsuario(id) {
    return api.delete(`/usuarios/${id}`)
  },

  loguearUsario(data) { 
    return api.post('/usuarios/login', data)
  }
}