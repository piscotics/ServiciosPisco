import { defineStore } from "pinia";
import cementerioServicios from "../../../services/parametros/cementerios/cementerioServicios.js";

export const useCementerioStore = defineStore("cementerio", {
  state: () => ({
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
    componenteActual: "Informacion",
    cementerios: [],
  }),

  actions: {
    async cargarCementerios() {
      try {
        this.loading = true;

        const response = await cementerioServicios.cargarCementerios();

        console.log("Respuesta sedes:", response.data);

        this.cementerios = response.data;
        this.cargado = true;

      } catch (error) {
        console.error("Error cargando sedes:", error);
        throw error;

      } finally {
        this.loading = false;
      }
    },
  },
});