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

}