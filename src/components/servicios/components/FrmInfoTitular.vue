<template>
    <div class="form-container">
  
      <!-- 🔵 HEADER -->
      <div class="form-header">
        DATOS TIPO DE SERVICIO Y TITULAR
      </div>
  
      <!-- 🔹 SECCIÓN 1 -->
      <div class="section">
  
        <div class="row">
          <label>Clasificación</label>
          <select v-model="form.clasificacion">
            <option>Mascota</option>
          </select>
  
          <label>No Orden Servicio</label>
          <input v-model="form.orden" type="text" />
        </div>
  
        <div class="row">
          <label>C.C Contratante</label>
          <input v-model="form.cc" />
  
          <label>Titular</label>
          <input v-model="form.titular" />
        </div>
  
        <div class="row">
          <label>Fecha Afiliación</label>
          <input type="date" v-model="form.fechaAfiliacion" />
  
          <label>Teléfono</label>
          <input v-model="form.telefono" />
        </div>
  
      </div>
  
      <!-- 🔵 INFO MASCOTA -->
      <div class="form-header">
        INFORMACIÓN PRINCIPAL DE LA MASCOTA
      </div>
  
      <div class="section">
  
        <div class="row">
          <label>Nombres</label>
          <input v-model="form.nombreMascota" />
  
          <label>Edad</label>
          <input v-model="form.edad" type="number" />
  
          <label>Sexo</label>
          <select v-model="form.sexo">
            <option>Macho</option>
            <option>Hembra</option>
          </select>
        </div>
  
        <div class="row">
          <label>Especie</label>
          <select v-model="form.especie">
            <option>Perro</option>
            <option>Gato</option>
          </select>
  
          <label>Raza</label>
          <input v-model="form.raza" />
  
          <label>Peso</label>
          <input v-model="form.peso" type="number" />
        </div>
  
      </div>
  
      <!-- 🔵 INFO MUERTE -->
      <div class="form-header">
        INFORMACIÓN ADICIONAL
      </div>
  
      <div class="section">
  
        <div class="row">
          <label>Murió en</label>
          <select v-model="form.lugar">
            <option>Casa</option>
            <option>Clínica</option>
          </select>
  
          <label>Fecha</label>
          <input type="date" v-model="form.fechaMuerte" />
        </div>
  
        <div class="row">
          <label>Causa</label>
          <input v-model="form.causa" />
        </div>
  
      </div>
  
      <!-- 🔥 BOTÓN -->
      <div class="actions">
        <button @click="guardar">Guardar</button>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    clasificacion: 'Mascota',
    orden: '',
    cc: '',
    titular: '',
    fechaAfiliacion: '',
    telefono: '',
  
    nombreMascota: '',
    edad: '',
    sexo: 'Macho',
    especie: 'Perro',
    raza: '',
    peso: '',
  
    lugar: '',
    fechaMuerte: '',
    causa: ''
  })
  
  const guardar = () => {
    console.log(form)
  }
  </script>
  
  <style scoped>
  .form-container {

    padding: 0px;
    background: #f8fafc;
  }
  
  /* 🔵 títulos tipo sistema viejo */
  .form-header {
    background: #1e40af;
    color: white;
    font-weight: bold;
    padding: 6px 10px;
    margin-top: 10px;
    font-size: 13px;
  }
  
  /* secciones */
  .section {
    padding: 12px;
    border: 1px solid #e2e8f0;
    background: white;
  }
  
  /* filas */
  .row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  
  /* labels */
  label {
    font-size: 12px;
    min-width: 120px;
  }
  
  /* inputs */
  input, select {
    height: 30px;
    padding: 0 8px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 12px;
  }
  
  /* botón */
  .actions {
    margin-top: 15px;
  }
  
  button {
    padding: 8px 16px;
    background: #334155;
    color: white;
    border: none;
    border-radius: 6px;
  }
  </style>