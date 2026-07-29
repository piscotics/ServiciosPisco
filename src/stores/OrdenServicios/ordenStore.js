import { defineStore } from "pinia";
import ordenServicios from "../../services/ordenServicios";

export const useOrdenesStore = defineStore("ordenes", {
  state: () => ({
    contratos: [],
    contrato: {},
    cargado: false,
    loading: false,
  }),

  actions: {
    async cargarOrdenes(desde, hasta) {
      // 🔥 evita consultar otra vez
      if (this.cargado) return;

      try {
        this.loading = true;

        const response = await ordenServicios.getOrdenesServicio(desde, hasta);

        this.contratos = response.data;
        this.cargado = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },


    async consultarContrato(idContrato) {
      try {
        const response = await ordenServicios.consultarContrato(idContrato);
        // Guardas la información
       // this.contrato = response.data;
       this.contrato = response.data[0];
      } catch (error) {
        console.error(error);
      }
    },

    async cargarOrdenIndividual(idContrato) {
      try {
        
        const response = await ordenServicios.cargarOrdenIndividual(idContrato);
        
        // Guardas la información
       // this.contrato = response.data;
       this.contrato = response.data[0];
      } catch (error) {
        console.error(error);
      }
    },

    limpiarOrdenes() {
      this.contratos = [];
      this.cargado = false;
    },
  },
});
