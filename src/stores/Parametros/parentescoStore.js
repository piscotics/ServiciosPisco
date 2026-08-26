import { defineStore } from "pinia";
import parentescoServicios from "../../services/parametros/parentescoServicios";

export const parentescoStore = defineStore("parentesco", {
  state: () => ({
    //contratos: [],
    //contrato: {},
    cargado: false,
    loading: false,
    modo: "consulta",
    abrirContratos: false,
    componenteActual: "Informacion",
    parentescos: [],
  }),

  actions: {
   
    async cargarParentescos() {
        try {
          this.loading = true;
      
          const response = await parentescoServicios.cargarParentescos();
      
          this.parentescos = response.data;
      
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      }

   
  },
});
