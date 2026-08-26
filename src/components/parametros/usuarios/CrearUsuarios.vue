<template>
    <div class="usuarios">
  
      <div class="titulo">
        <h2>Gestión de Usuarios</h2>
      </div>
  
      <!-- TABLA -->
      <div class="tabla-container">
  
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Estado</th>
            </tr>
          </thead>
  
          <tbody>
            <tr
              v-for="usuario in usuarios"
              :key="usuario.id"
              :class="{ seleccionado: usuarioSeleccionado?.id === usuario.id }"
              @click="seleccionarUsuario(usuario)"
            >
              <td>{{ usuario.username }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.estado }}</td>
            </tr>
          </tbody>
        </table>
  
      </div>
  
      <!-- BOTONES -->
      <div class="acciones">
  
        <button @click="nuevo">
          Nuevo
        </button>
  
        <button
          @click="editar"
          :disabled="!usuarioSeleccionado"
        >
          Editar
        </button>
  
        <button>
          Cerrar
        </button>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const usuarios = ref([
    {
      id: 1,
      username: "admin",
      nombre: "Administrador",
      estado: "Activo"
    },
    {
      id: 2,
      username: "juan",
      nombre: "Juan Pérez",
      estado: "Activo"
    },
    {
      id: 3,
      username: "maria",
      nombre: "María López",
      estado: "Inactivo"
    }
  ]);
  
  const usuarioSeleccionado = ref(null);
  
  const seleccionarUsuario = (usuario) => {
    usuarioSeleccionado.value = usuario;
  };
  
  const nuevo = () => {
    console.log("Crear nuevo usuario");
  };
  
  const editar = () => {
    if (!usuarioSeleccionado.value) return;
  
    console.log(
      "Editar usuario:",
      usuarioSeleccionado.value
    );
  };
  </script>
  
  <style scoped>
  
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