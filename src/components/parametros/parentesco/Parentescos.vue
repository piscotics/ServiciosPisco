<template>
  <div class="parentescos">

    <div class="titulo">
      <h2>Gestión de Parentescos</h2>
    </div>

    <!-- TABLA -->
    <div class="tabla-container">

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Parentesco</th>
            <th>Línea</th>
            <th>Edad Límite</th>
            <th>Cambiado Por</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          <tr
            v-for="parentesco in parentescosStore.parentescos"
            :key="parentesco.idparentesco"
          >
            <td>{{ parentesco.idparentesco }}</td>
            <td>{{ parentesco.parentesco }}</td>
            <td>{{ parentesco.linea }}</td>
            <td>{{ parentesco.edadlimite }}</td>
            <td>{{ parentesco.cambiadopor }}</td>

            <td class="acciones-tabla">
              <button @click="editar(parentesco)">
                Editar
              </button>

              <button @click="eliminar(parentesco)">
                Eliminar
              </button>
            </td>

          </tr>

        </tbody>
      </table>

    </div>

    <!-- FORMULARIO -->
    <div class="formulario">

      <div class="campo">
        <label>Nombre del parentesco</label>
        <input
          v-model="form.parentesco"
          type="text"
          placeholder="Ej: Padre"
        />
      </div>

      <div class="campo">
        <label>Línea</label>

        <select v-model="form.linea">
          <option value="">
            Seleccione...
          </option>

          <option value="Directa">
            Directa
          </option>

          <option value="Colateral">
            Colateral
          </option>
        </select>
      </div>

      <div class="campo">
        <label>Edad límite</label>

        <input
          v-model="form.edadlimite"
          type="number"
          min="0"
          placeholder="Ej: 25"
        />
      </div>

    </div>

    <!-- BOTONES -->
    <div class="acciones">

      <button @click="nuevo">
        Nuevo
      </button>

      <button
        @click="guardar"
        :disabled="!form.parentesco"
      >
        Guardar
      </button>

      <button
        @click="cancelar"
      >
        Cancelar
      </button>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { parentescoStore } from "../../../stores/parametros/parentescoStore.js";

const parentescosStore = parentescoStore();

const parentescoSeleccionado = ref(null);

const form = ref({
  idparentesco: null,
  parentesco: "",
  linea: "",
  edadlimite: ""
});


const cargar = async () => {

  Swal.fire({
    title: "Cargando",
    text: "Consultando parentescos...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {

    await parentescosStore.cargarParentescos();

  } finally {

    Swal.close();

  }
};


onMounted(async () => {
  await cargar();
});


const nuevo = () => {

  parentescoSeleccionado.value = null;

  form.value = {
    idparentesco: null,
    parentesco: "",
    linea: "",
    edadlimite: ""
  };

};


const editar = (parentesco) => {

  parentescoSeleccionado.value = parentesco;

  form.value = {
    idparentesco: parentesco.idparentesco,
    parentesco: parentesco.parentesco,
    linea: parentesco.linea,
    edadlimite: parentesco.edadlimite
  };

};


const cancelar = () => {

  parentescoSeleccionado.value = null;

  form.value = {
    idparentesco: null,
    parentesco: "",
    linea: "",
    edadlimite: ""
  };

};


const guardar = () => {

  console.log("Datos para guardar:", form.value);

};


const eliminar = (parentesco) => {

  console.log("Eliminar:", parentesco);

};
</script>


  
  <style scoped>
  
  .parentescos {
  width: 100%;
}

.titulo {
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.titulo h2 {
  margin: 0 0 10px;
  font-size: 20px;
}

.tabla-container {
  max-height: 350px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 9px 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

th {
  background: #f5f5f5;
}

.acciones-tabla {
  display: flex;
  gap: 5px;
}

.formulario {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.campo label {
  font-size: 13px;
  font-weight: 600;
  color: #475569;
}

.campo input,
.campo select {
  padding: 9px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}

.campo input:focus,
.campo select:focus {
  border-color: #6366f1;
}

.acciones {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

  .usuarios {
    width: 100%;
  }
  
  .titulo {
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
  }
  
  .titulo h2 {
    margin: 0 0 10px;
    font-size: 20px;
  }
  
  .tabla-container {
    max-height: 400px;
    overflow-y: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  
  th {
    background: #f5f5f5;
  }
  
  tbody tr {
    cursor: pointer;
  }
  
  tbody tr:hover {
    background: #f1f5f9;
  }
  
  .seleccionado {
    background: #e0e7ff;
  }
  
  .acciones {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  
  button {
    padding: 8px 18px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  </style>