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
    return api.get(`api/services/loadPrestacion/${id}`)
  },

  guardarServicio(data) {
    return api.post('/servicios', data)
  },


  consultarContrato(idContrato) {
    return api.get(`api/services/loadPrestacion/${idContrato}`);
},

cargarOrdenIndividual(idContrato) {
  return api.get(`/api/services/loadServicesByParam?dato=${idContrato}&parametro=ORDEN`);
}
}