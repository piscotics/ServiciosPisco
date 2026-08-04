import { defineStore } from "pinia";
import ordenServicios from "../../services/ordenServicios";

export const useOrdenesStore = defineStore("ordenes", {
  state: () => ({
    contratos: [],
    contrato: {},
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
  }),

  actions: {
    setConsulta() {
      this.modo = "consulta";
    },

    setEditar() {
      this.modo = "editar";
    },

    setNuevo() {
      this.modo = "nuevo";
    },
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

    async cargarPrestacion(idContrato) {
      try {
        const response = await ordenServicios.cargarPrestacion(idContrato);
        this.contrato = response.data[0];
      } catch (error) {
        console.error(error);
      }
    },

    async cargarOrdenIndividual(idContrato) {
      try {
        const response = await ordenServicios.cargarOrdenIndividual(idContrato);
        this.contrato = response.data[0];
      } catch (error) {
        console.error(error);
      }
    },

    async cargarAbonos(idContrato) {
      try {
        const response = await ordenServicios.cargarAbonos(idContrato);
        this.abono = response.data[0];
      } catch (error) {
        console.error(error);
      }
    },

    limpiarContrato() {
      Object.keys(this.contrato).forEach((key) => {
        this.contrato[key] = "";
      });
    },
    
    abrirArbolContratos() {
      this.abrirContratos = true;
    }
  
  },
});
