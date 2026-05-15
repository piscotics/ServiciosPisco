<template>
    <div class="service-order-container">
      <div class="form-wrapper">
        <section class="form-card">
          <div class="card-header">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>Datos Tipo de Servicio</h2>
          </div>

    <div class="grid-4">
        <div class="check-group">
          <label class="check-item">
            <input type="checkbox" v-model="model.anulada"/>
            <span>Anulada</span>
          </label>
        </div>
   <!-- CONV -->
        <div class="field1">
            <label>Tipo</label>
            <select v-model="model.tipoAuxilio">
              <option value="No Aplica">Convenio</option>
              <option value="Ambulancia">Particular</option>
              <option value="Domicilio">Afiliado CD</option>
              <option value="Domicilio">Afiliado SD</option>
            </select>
          </div>
          <!-- NO ORDEN -->
          <div class="field">
            <label>No Orden Servicio</label>
            <input type="text" v-model="model.noOrdenServicio" />
          </div>
          <div class="fecha-hora-box">

            <!-- FECHA -->
            <div class="field compact">
              <label>Fecha</label>
              <input type="date" v-model="model.fecha" />
            </div>

            <!-- HORA -->
            <div class="field compact">
              <label>Hora Reporte</label>
              <input type="time" v-model="model.horaReporte" />
            </div>

            <!-- MARCAPASO -->
        <div class="field marcapaso-box">
          <label>MarcaPaso</label>

          <div class="radio-group">
            <label>
              <input type="radio" value="No" v-model="model.marcapaso">
              No
            </label>

            <label>
              <input type="radio" value="Si" v-model="model.marcapaso">
              Sí
            </label>
          </div>
        </div>

        <!-- ESTADO -->
        <div class="field estado-box">
          <label>Estado</label>

          <select v-model="model.estado">
            <option value="Autorizado">Autorizado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Anulado">Anulado</option>
          </select>
        </div>


            </div>

    <!-- REPORTE -->
    <div class="field">
      <label>Reporte</label>
      <input type="time" v-model="model.reporte" />
    </div>

    <!-- TIPO AUXILIO -->
    <div class="field">
      <label>Tipo Auxilio</label>

      <select v-model="model.tipoAuxilio">
        <option value="No Aplica">No Aplica</option>
        <option value="Ambulancia">Ambulancia</option>
        <option value="Domicilio">Domicilio</option>
      </select>
    </div>

 
  

    <!-- COVID -->
    <div class="field inline-check">
      <label>Covid</label>

      <div class="radio-group">
        <label>
          <input type="radio" value="No" v-model="model.covid">
          No
        </label>

        <label>
          <input type="radio" value="Si" v-model="model.covid">
          Sí
        </label>
      </div>
    </div>

    <!-- FECHA APERTURA -->
    <div class="field">
      <label>Fecha Apertura</label>
      <input type="date" v-model="model.fechaApertura" />
    </div>

    <!-- ESTADO -->
    <div class="field">
      <label>Estado</label>

      <select v-model="model.estado">
        <option value="Autorizado">Autorizado</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Anulado">Anulado</option>
      </select>
    </div>

    <!-- VALOR RETORNO -->
    <div class="field">
      <label>Valor Retorno</label>
      <input type="number" v-model="model.valorRetorno" />
    </div>

    <!-- POR QUIEN -->
    <div class="field">
      <label>Por Quien</label>
      <input type="text" v-model="model.porQuien" />
    </div>

    <!-- SERVICIO -->
    <div class="field">
      <label>Servicio</label>
      <input type="text" v-model="model.servicio" />
    </div>

    <!-- GRUPO CATEGORIA -->
    <div class="field">
      <label>Grupo Categoría</label>

      <select v-model="model.grupoCategoria">
        <option value="Empresarial">
          Empresarial
        </option>

        <option value="Individual">
          Individual
        </option>
      </select>
    </div>

    <!-- CATEGORIA SERVICIO -->
    <div class="field">
      <label>Categoría Servicio</label>

      <select v-model="model.categoriaServicio">
        <option value="Gerencial - Basico">
          Gerencial - Básico
        </option>

        <option value="Premium">
          Premium
        </option>
      </select>
    </div>

    <!-- TIPO SERVICIO -->
    <div class="field">
      <label>Tipo Servicio</label>

      <select v-model="model.tipoServicio">
        <option value="Periferia Completa">
          Periferia Completa
        </option>

        <option value="Urbano">
          Urbano
        </option>
      </select>
    </div>

  </div>
</section>
  
        <section class="form-card accent-blue">
          <div class="card-header">
            <i class="fa-solid fa-user-tie"></i>
            <h2>Información del Contratante</h2>
          </div>
          <div class="grid-3">
            <div class="field">
              <label>C.C. Contratante</label>
              <input v-model="model.ccContratante" placeholder="Documento ID" />
            </div>
            <div class="field span-2">
              <label>Nombre Completo</label>
              <input v-model="model.nombreContratante" placeholder="Nombres y Apellidos" />
            </div>
            <div class="field">
              <label>Teléfono</label>
              <input v-model="model.telefono" placeholder="Ej: 300 123 4567" />
            </div>
            <div class="field">
              <label>Ciudad</label>
              <input v-model="model.ciudad" placeholder="Ciudad de origen" />
            </div>
            <div class="field">
              <label>E-Mail</label>
              <input type="email" v-model="model.email" placeholder="correo@ejemplo.com" />
            </div>
            <div class="field span-3">
              <label>Dirección de Residencia</label>
              <input v-model="model.direccion" placeholder="Calle, Carrera, Barrio" />
            </div>
          </div>
        </section>
  
        <section class="form-card accent-indigo">
          <div class="card-header">
            <i class="fa-solid fa-paw"></i>
            <h2>Información del Fallecido</h2>
          </div>
          <div class="grid-4">
            <div class="field">
              <label>ID Fallecido</label>
              <input v-model="model.idFallecido" class="bg-light-pink" />
            </div>
            <div class="field span-2">
              <label>Nombres y Apellidos</label>
              <input v-model="model.nombreFallecido" class="bg-light-pink" />
            </div>
            <div class="field">
              <label>Fecha Nacimiento</label>
              <input type="date" v-model="model.fechaNacFallecido" />
            </div>
            <div class="field">
              <label>Especie</label>
              <select v-model="model.especie">
                <option value="Canino">Canino</option>
                <option value="Felino">Felino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div class="field">
              <label>Raza</label>
              <input v-model="model.raza" />
            </div>
            <div class="field">
              <label>Peso (KG)</label>
              <input type="number" v-model="model.peso" />
            </div>
            <div class="field">
              <label>Talla</label>
              <select v-model="model.talla">
                <option value="S">Pequeño (S)</option>
                <option value="M">Mediano (M)</option>
                <option value="L">Grande (L)</option>
              </select>
            </div>
            <div class="field span-2">
              <label>Color</label>
              <input v-model="model.color" />
            </div>
            <div class="field span-2">
              <label>Lugar de Nacimiento</label>
              <input v-model="model.lugarNac" />
            </div>
          </div>
        </section>
  
        <section class="form-card accent-slate">
          <div class="card-header">
            <i class="fa-solid fa-calendar-xmark"></i>
            <h2>Datos del Fallecimiento</h2>
          </div>
          <div class="grid-3">
            <div class="field">
              <label>Fecha de Muerte</label>
              <input type="date" v-model="model.fechaMuerte" />
            </div>
            <div class="field">
              <label>Hora</label>
              <input type="time" v-model="model.horaMuerte" />
            </div>
            <div class="field">
              <label>Tipo de Muerte</label>
              <input v-model="model.tipoMuerte" />
            </div>
            <div class="field span-3">
              <label>Causa de Muerte</label>
              <input v-model="model.causaMuerte" placeholder="Detalle la causa clínica" />
            </div>
            <div class="field span-2">
              <label>Médico que Certifica</label>
              <input v-model="model.medico" />
            </div>
            <div class="field">
              <label>Preservación</label>
              <label class="checkbox-container">
                Cuerpo Preservado
                <input type="checkbox" v-model="model.preservado" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  const model = defineModel({
    default: () => ({
      noOrden: '',
      marcapaso: 'No',
      covid: 'No',
      preservado: false
    })
  })
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
  
  .service-order-container {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
    padding: 1px 2px;
  
    color: #1e293b;
  }
  
  .form-wrapper {
    width: 98%;
  max-width: 1700px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 24px;
  }
  .form-card{
  overflow-x:auto;
}
  /* HEADER STYLES */
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 20px;
  }
  
  .form-header h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    color: #0f172a;
  }
  
  .form-header p {
    font-size: 14px;
    color: #64748b;
    margin: 4px 0 0 0;
  }
  
  .order-badge {
    text-align: right;
    background: #ffffff;
    padding: 10px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
  }
  
  .order-badge .label {
    display: block;
    font-size: 10px;
    font-weight: 800;
    color: #6366f1;
    letter-spacing: 1px;
  }
  
  .input-minimal {
    border: none;
    font-size: 18px;
    font-weight: 700;
    text-align: right;
    width: 120px;
    color: #1e293b;
    outline: none;
  }
  
  /* CARD STYLES */
  .form-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    color: #6366f1;
  }
  
  .card-header h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: #334155;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  /* GRID SYSTEM */
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .grid-4{
  display:grid;
  grid-template-columns: repeat(6, minmax(180px, 1fr));
  gap:16px;
  align-items:start;
}
  
.field{
  display:flex;
  flex-direction:column;
  gap:0;
  background-color: red;
  left:-100px;
  
}
.field1{
  display:flex;
  flex-direction:column;
  gap:0;
  background-color:blue;

  position:relative;
  left:-100px;
}
  .span-2 { grid-column: span 2; }
  .span-3 { grid-column: span 3; }
  
  label {
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
  }
  
  input, select {
    height: 40px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    color: #334155;
    transition: all 0.2s;
    background-color: #f8fafc;
  }
  
  input:focus, select:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    background-color: #fff;
  }
  
  .bg-light-pink { background-color: #fff1f2; }
  
  /* TOGGLE BUTTONS */
  .toggle-group {
    display: flex;
    background: #f1f5f9;
    padding: 4px;
    border-radius: 8px;
    height: 40px;
  }
  
  .toggle-group button {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 12px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .toggle-group button.active {
    background: white;
    color: #6366f1;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  
  /* CHECKBOX CUSTOM */
  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
  }
  
  /* RESPONSIVE */
  @media (max-width: 768px) {
    .grid-3, .grid-4 { grid-template-columns: 1fr; }
    .span-2, .span-3 { grid-column: span 1; }
  }

  .check-group{
  display:flex;
  align-items:center;
  justify-content:center;
  width:90px;
  background-color: #6366f1;
}

.check-item{
  display:flex;
  align-items:center;
  gap:4px;
  font-size:12px;
  font-weight:600;
  cursor:pointer;
  white-space:nowrap;
}

.check-item input{
  width:14px;
  height:14px;
  margin:0;
}
.fecha-hora-box{
  display:flex;
  flex-direction:column;
  gap:6px;
  width:180px;
}

.compact label{
  margin-bottom:2px;
  font-size:12px;
}

.compact input{
  height:34px;
}
  </style>