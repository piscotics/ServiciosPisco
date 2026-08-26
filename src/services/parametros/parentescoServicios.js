import api from "../api";

export default {
  cargarParentescos() {
    return api.get("/api/parentesco/loadParentesco");
  },
};