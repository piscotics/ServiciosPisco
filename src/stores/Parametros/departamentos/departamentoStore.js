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
    ciudades: [],
  }),

  getters: {
    ciudadesPorDepartamento: (state) => {
      return (coddane) => {
        return state.ciudades.filter(
          municipio =>
            String(municipio.coddepartamento) === String(coddane)
        );
      };
    },
  },
  actions: {
    async cargarDepartamentos() {
      try {
        this.loading = true;

        const response =
          await departamentoServicios.cargarDepartamentos();

        this.departamentos = response.data;
        this.cargado = true;
      } catch (error) {
        throw error;

      } finally {
        this.loading = false;
      }
    },

    async cargarCiudades() {
      try {
        this.loading = true;
    
        const response = await departamentoServicios.cargarCiudades();
    
        this.ciudades = response.data;
        this.cargado = true;
    
      } catch (error) {
    
        if (Array.isArray(error.response?.data)) {
        
          this.ciudades = error.response.data;
          this.cargado = true;
    
          return this.ciudades;
        }
    
        throw error;
    
      } finally {
        this.loading = false;
      }
    },

    async cargarTodo() {
      this.loading = true;

      try {
        await Promise.all([
          this.cargarDepartamentos(),
          this.cargarCiudades(),
        ]);
      } finally {
        this.loading = false;
      }
    },
  },
});