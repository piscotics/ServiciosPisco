import { defineStore } from "pinia";
import tipoPagoServicios from "../../../services/parametros/tipoPagos/tipoPagoServicios.js";

export const useTipoPagoStore = defineStore("tipoPagos", {
  state: () => ({
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
    componenteActual: "Informacion",
    tipoPagos: [],
  }),

  actions: {
    async cargarTipoPagos() {
      try {
        this.loading = true;

        const response = await tipoPagoServicios.cargarTipoPago();

        console.log("Respuesta tipos de pago:", response.data);

        this.tipoPagos = response.data;
        this.cargado = true;

        return response.data;

      } catch (error) {
        console.error("Error cargando tipos de pago:", error);
        throw error;

      } finally {
        this.loading = false;
      }
    },
  },
});