import { defineStore } from "pinia";
import catalogoServicios from "../../../services/parametros/catalogos/catalogoServicios.js";

export const useCatalogoStore = defineStore("catalogos", {
  state: () => ({
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
    componenteActual: "Informacion",
    catalogos: [],
  }),

  actions: {
    async cargarCatalogos() {
      try {
        this.loading = true;

        const response = await catalogoServicios.cargarCatalogos();

        console.log("Respuesta sedes:", response.data);

        this.catalogos = response.data;
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