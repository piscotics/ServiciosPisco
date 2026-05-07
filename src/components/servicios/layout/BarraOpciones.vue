<template>
  <div class="menu-bar">

    <!-- Archivo -->
    <div class="menu-item">
      Archivo ▾

      <div class="dropdown">
        <div class="dropdown-item">Nuevo</div>
        <div class="dropdown-item">Abrir</div>
        <div class="dropdown-item">Guardar</div>
      </div>
    </div>

    <!-- Contrato -->
    <div class="menu-item">
      Contrato ▾

      <div class="dropdown">
        <div class="dropdown-item">Crear</div>
        <div class="dropdown-item">Editar</div>
        <div class="dropdown-item">Eliminar</div>
      </div>
    </div>

    <!-- Configuración -->
    <div class="menu-item">
      Configuración ▾

      <div class="dropdown">
        <div class="dropdown-item">Usuarios</div>
        <div class="dropdown-item">Permisos</div>
        <div class="dropdown-item">Preferencias</div>
      </div>
    </div>

  </div>
</template>

<style scoped>

/* 🔥 barra */
.menu-bar {
  display: flex;
  gap: 12px;
}

/* 🔥 item principal */
.menu-item {
  position: relative;

  display: flex;
  align-items: center;

  height: 38px;
  padding: 0 14px;

  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;

  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  transition: all 0.2s ease;
}

/* hover item */
.menu-item:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

/* 🔥 dropdown */
.dropdown {
  position: absolute;
  top: 48px;
  left: 0;

  min-width: 190px;

  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;

  box-shadow:
    0 10px 25px rgba(15, 23, 42, 0.08),
    0 4px 10px rgba(15, 23, 42, 0.04);

  overflow: hidden;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);

  transition: all 0.22s ease;

  z-index: 999;
}

/* 🔥 aparece suave */
.menu-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* items internos */
.dropdown-item {
  padding: 12px 14px;
  font-size: 13px;
  color: #334155;

  transition: all 0.15s ease;
}

/* hover bonito */
.dropdown-item:hover {
  background: #f1f5f9;
  color: #0f172a;
  padding-left: 18px;
}

</style>