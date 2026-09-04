import { defineStore } from "pinia";
import sedeServicios from "../../../services/parametros/sedes/sedeServicios.js";

export const useSedeStore = defineStore("sede", {
  state: () => ({
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
    componenteActual: "Informacion",
    sedes: [],
  }),

  actions: {
    async cargarSedes() {
      try {
        this.loading = true;

        const response = await sedeServicios.cargarSedes();

        //console.log("Respuesta sedes:", response.data);

        this.sedes = response.data;
        this.cargado = true;

      } catch (error) {
        //console.error("Error cargando sedes:", error);
        throw error;

      } finally {
        this.loading = false;
      }
    },
  },
});