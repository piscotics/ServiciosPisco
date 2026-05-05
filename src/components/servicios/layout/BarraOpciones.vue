<template>
    <div class="menu-bar">
  
      <!-- Item 1 -->
      <div class="menu-item">
        Archivo ▾
        <div class="dropdown">
          <div>Nuevo</div>
          <div>Abrir</div>
          <div>Guardar</div>
        </div>
      </div>
  
      <!-- Item 2 -->
      <div class="menu-item">
        Contrato ▾
        <div class="dropdown">
          <div>Crear</div>
          <div>Editar</div>
          <div>Eliminar</div>
        </div>
      </div>
  
      <!-- Item 3 -->
      <div class="menu-item">
        Configuración ▾
        <div class="dropdown">
          <div>Usuarios</div>
          <div>Permisos</div>
          <div>Preferencias</div>
        </div>
      </div>
  
      <!-- Item 4 -->
      <div class="menu-item">
        Estadísticas ▾
        <div class="dropdown">
          <div>Reportes</div>
          <div>Gráficas</div>
          <div>Exportar</div>
        </div>
      </div>
  
    </div>
  </template>
  
  <style scoped>
  
  /* 🔥 barra horizontal */
  .menu-bar {
    display: flex;
    gap: 10px;
  }
  
  /* cada opción */
  .menu-item {
    position: relative;
    padding: 8px 12px;
    background: #f1f5f9;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }
  
  /* dropdown */
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
  
    display: none;
    flex-direction: column;
  
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  
    min-width: 160px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }
  
  /* 🔥 aparece SOLO el del item */
  .menu-item:hover .dropdown {
    display: flex;
  }
  
  /* items */
  .dropdown div {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown div:hover {
    background: #f1f5f9;
  }
  </style>