import api from "../../api.js";

export default {
  cargarTipoPago() {
    return api.get("/api/pagos/loadTipospAgos");
  },
};