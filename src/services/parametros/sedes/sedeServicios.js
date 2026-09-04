import api from "../../api.js";

export default {
  cargarSedes() {
    return api.get("/api/sede/loadSedes?cc_factura=1");
  },
};