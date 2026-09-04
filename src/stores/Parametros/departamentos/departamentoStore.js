import { defineStore } from "pinia";
import departamentoServicios from "../../../services/parametros/departamentos/departamentoServicios.js";

export const useDepartamentoStore = defineStore("departamento", {
  state: () => ({
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
    componenteActual: "Informacion",
    departamentos: [],
  }),

  actions: {
    async cargarDpartamentos() {
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