<template>
  <header class="header">

    <h1>Panel de Servicios</h1>

    <!-- 🔔 Zona de acciones -->
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

      <!-- Usuario -->
      <div class="user">
        <span class="avatar">A</span>
        <span>Admin</span>
      </div>

    </div>

  </header>
</template>

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

/* 🔥 zona derecha */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* iconos */
.icon {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border-radius: 10px;
  cursor: pointer;

  background: #f1f5f9;
  transition: all 0.2s ease;
}

.icon:hover {
  background: #e2e8f0;
}

/* menú more */
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
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;

  display: none;
  flex-direction: column;
  padding: 10px;

  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
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

/* usuario */
.user {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 5px 12px 5px 6px;
  border: 1px solid #e2e8f0;
  border-radius: 999px;

  background: #ffffff;
  font-size: 14px;
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
</style>