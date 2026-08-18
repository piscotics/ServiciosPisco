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
    componenteActual: "Informacion",
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

    async guardarOrden() {
      try {
        this.loading = true;
    
        console.log("Datos a guardar:");
        console.log(this.contrato);
    
        // Cuando tengas el endpoint:
        // const response = await ordenServicios.guardarOrden(this.contrato);
    
        this.setConsulta();
    
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    limpiarContrato() {
      Object.keys(this.contrato).forEach((key) => {
        this.contrato[key] = "";
      });
    },
    
    abrirArbolContratos() {
      this.abrirContratos = true;
    },
    cambiarComponente(componente) {
      this.componenteActual = componente;
    }
  },
});
