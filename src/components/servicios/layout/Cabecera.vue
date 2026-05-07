<template>
  <header class="header">
    <BarraBusqueda />

    <div class="actions">
      <div class="icon">🔍</div>
      <div class="icon">🔔</div>
      <div class="icon">📩</div>
      <div class="icon">⚙️</div>
      <div class="icon">📊</div>
      <div class="icon">📁</div>
      <div class="icon">🧾</div>

      <!-- Grupo extra -->
      <div class="more">
        ⋯
        <div class="dropdown">
          <div>📅 Calendario</div>
          <div>📌 Tareas</div>
          <div>💬 Chat</div>
          <div>🔒 Seguridad</div>
          <div>🌐 Red</div>
          <div>🗂️ Archivos</div>
          <div>🧠 IA</div>
          <div>⚡ Procesos</div>
        </div>
      </div>

      <div class="user-wrapper">
        <div class="user" @click="showMenu = !showMenu">
          <span class="avatar">A</span>
          <span>Admin</span>
        </div>

        <div v-if="showMenu" class="menu">
          <div class="user-wrapper">

    <div v-if="showMenu" class="">

      <div class="menu-bar">

        <div class="menu-item">
          Archivo v

          <div class="menu-dropdown">
            <div class="dropdown-item">Nuevo</div>
            <div class="dropdown-item">Abrir</div>
            <div class="dropdown-item">Guardar</div>
          </div>
        </div>

        <div class="menu-item">
          Contrato v

          <div class="menu-dropdown">
            <div class="dropdown-item">Crear</div>
            <div class="dropdown-item">Editar</div>
            <div class="dropdown-item">Eliminar</div>
          </div>
        </div>

        <div class="menu-item">
          Configuracion v

          <div class="menu-dropdown">
            <div class="dropdown-item">Usuarios</div>
            <div class="dropdown-item">Permisos</div>
            <div class="dropdown-item">Preferencias</div>
          </div>
        </div>

        <!-- 🔴 CERRAR SESIÓN -->
        <div class="menu-item logout" @click="logout">
          Cerrar sesión
        </div>

  </div>

</div>

</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BarraBusqueda from '../layout/BarraBusqueda.vue'
import { useRouter } from 'vue-router'
const showMenu = ref(false)
const router = useRouter()

const logout = () => {

localStorage.removeItem('user')
localStorage.removeItem('token')

router.push('/')

}

</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px 0 288px;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #e2e8f0;
  backdrop-filter: blur(14px);
  z-index: 1000;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  cursor: pointer;
  background: #f1f5f9;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.2s ease;
}

.icon:hover {
  background: #e2e8f0;
}

.more {
  position: relative;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  background: #f1f5f9;
}

.dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  width: 180px;
  display: none;
  flex-direction: column;
  padding: 10px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.more:hover .dropdown {
  display: flex;
}

.dropdown div {
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}

.dropdown div:hover {
  background: #f1f5f9;
}

.user-wrapper {
  position: relative;
}

.user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 12px 5px 6px;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  background: #ffffff;
  font-size: 14px;
  cursor: pointer;
}

.avatar {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #334155;
  color: white;
  font-size: 13px;
}

.menu {
  position: absolute;
  top: 52px;
  right: 0;
  width: max-content;
  z-index: 1200;
  animation: fadeDown 0.2s ease;
}

.menu-bar {
  display: flex;
  gap: 12px;
  padding: 10px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow:
    0 10px 25px rgba(15, 23, 42, 0.08),
    0 4px 10px rgba(15, 23, 42, 0.04);
}

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
  white-space: nowrap;
  transition: all 0.2s ease;
}

.menu-item:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.menu-dropdown {
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

.menu-item:hover .menu-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  padding: 12px 14px;
  font-size: 13px;
  color: #334155;
  transition: all 0.15s ease;
}

.dropdown-item:hover {
  background: #f1f5f9;
  color: #0f172a;
  padding-left: 18px;
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
