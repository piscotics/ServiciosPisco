<template>
    <div class="dashboard-container">
      <header class="header">
        <div class="title-group">
          <i class="fa-solid fa-chart-line icon-main"></i>
          <h1>Información de las Órdenes de Servicio</h1>
        </div>
        <div class="status-badge">Panel en Vivo</div>
      </header>
  
      <div class="charts-grid">
        <div class="chart-card">
          <h3>Tipo de Servicio</h3>
          <div class="pie-chart" style="--p:70; --c:#6366f1;"> 70% </div>
          <div class="chart-labels">
            <span><i class="dot mascot"></i> Mascota</span>
            <span><i class="dot human"></i> Humano</span>
          </div>
        </div>
  
        <div class="chart-card">
          <h3>Estado de Órdenes</h3>
          <div class="pie-chart" style="--p:85; --c:#10b981;"> 85% </div>
          <div class="chart-labels">
            <span><i class="dot complete"></i> Completado</span>
            <span><i class="dot pending"></i> Pendiente</span>
          </div>
        </div>
  
        <div class="chart-card">
          <h3>Categoría</h3>
          <div class="pie-chart" style="--p:45; --c:#f59e0b;"> 45% </div>
          <div class="chart-labels">
            <span><i class="dot individual"></i> Individual</span>
            <span><i class="dot group"></i> Previsión</span>
          </div>
        </div>
      </div>
  
      <div class="stats-footer">
        <div class="stat-item">
          <span class="stat-value">{{ model.totalOrders || 128 }}</span>
          <span class="stat-label">Total Órdenes</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ model.activeToday || 12 }}</span>
          <span class="stat-label">Ingresos Hoy</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const model = defineModel({
    default: () => ({
      totalOrders: 128,
      activeToday: 12
    })
  })
  </script>
  
  <style scoped>
  /* Contenedor Principal */
  .dashboard-container {
    padding: 30px;
    background: #f8fafc;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    font-family: 'Inter', sans-serif;
    color: #1e293b;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f1f5f9;
  }
  
  .title-group {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .icon-main {
    font-size: 24px;
    color: #6366f1;
  }
  
  h1 {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }
  
  .status-badge {
    background: #ecfdf5;
    color: #059669;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }
  
  /* Grilla de Torticas */
  .charts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .chart-card {
    background: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f1f5f9;
  }
  
  .chart-card h3 {
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 20px;
  }
  
  /* Lógica de la Tortica en CSS Puro */
  .pie-chart {
    --w: 120px;
    width: var(--w);
    aspect-ratio: 1;
    position: relative;
    display: inline-grid;
    place-content: center;
    font-size: 18px;
    font-weight: 700;
    color: #1e293b;
  }
  
  .pie-chart:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: conic-gradient(var(--c) calc(var(--p)*1%), #f1f5f9 0);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(99% - 15px),#000 calc(100% - 15px));
            mask: radial-gradient(farthest-side,#0000 calc(99% - 15px),#000 calc(100% - 15px));
  }
  
  /* Etiquetas de los gráficos */
  .chart-labels {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    font-size: 12px;
    font-weight: 500;
  }
  
  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .mascot { background: #6366f1; }
  .human { background: #e2e8f0; }
  .complete { background: #10b981; }
  .pending { background: #f1f5f9; }
  .individual { background: #f59e0b; }
  .group { background: #f1f5f9; }
  
  /* Footer de Stats */
  .stats-footer {
    display: flex;
    gap: 40px;
    background: #1e293b;
    padding: 20px 30px;
    border-radius: 12px;
    color: white;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: 700;
  }
  
  .stat-label {
    font-size: 12px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    .charts-grid { grid-template-columns: 1fr; }
  }
  </style>