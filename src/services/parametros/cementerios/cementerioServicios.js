import api from "../../api.js";

export default {
  cargarCementerios() {
    return api.get("/api/cementerio/loadCementerio");
  },
};