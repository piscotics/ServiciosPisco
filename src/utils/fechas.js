import { computed, isRef } from "vue";

export const limpiarFecha = (objeto, campo) => {
  return computed({
    get: () => {
      const data = isRef(objeto) ? objeto.value : objeto;
      return data?.[campo]
        ? String(data[campo]).split("T")[0]
        : "";
    },

    set: (valor) => {
      const data = isRef(objeto) ? objeto.value : objeto;

      if (data) {
        data[campo] = valor;
      }
    },
  });
};