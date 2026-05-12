import { defineStore } from 'pinia'
import ordenServicios from '../../services/ordenServicios'

export const useOrdenesStore = defineStore('ordenes', {

  state: () => ({
    contratos: [],
    cargado: false,
    loading: false
  }),

  actions: {

    async cargarOrdenes(desde, hasta) {

      // 🔥 evita consultar otra vez
      if (this.cargado) return

      try {

        this.loading = true

        const response = await ordenServicios.getOrdenesServicio(
          desde,
          hasta
        )

        this.contratos = response.data
        this.cargado = true

      } catch (error) {

        console.error(error)

      } finally {

        this.loading = false

      }
    },

    limpiarOrdenes() {
      this.contratos = []
      this.cargado = false
    }

  }

})