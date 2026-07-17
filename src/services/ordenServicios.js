import api from './api'

export default {

  getOrdenesServicio(desde, hasta) {
    return api.get('/api/services/loadServices', {
      params: {
        desde,
        hasta
      }
    })
  },
  cargarServicio(id) {
    return api.get(`/servicios/${id}`)
  },

  guardarServicio(data) {
    return api.post('/servicios', data)
  }

}