import api from "../../api.js";

export default {
  cargarDepartamentos() {
    return api.get("/api/regional/departamento");
  },
  cargarCiudades() {
    return api.get("/api/regional/loadciudad");
  },
};