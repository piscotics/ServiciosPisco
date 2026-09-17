import api from "../../api.js";

export default {
  cargarCatalogos() {
    return api.get("/api/parametros-generales/loadConvenios?estado=0");
  },
};