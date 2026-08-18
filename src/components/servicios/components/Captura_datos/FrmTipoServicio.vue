<template>
<section class="form-card">
    <div class="card-header">
        <i class="fa-solid fa-file-invoice"></i>
        <h2>DATOS TIPO DE SERVICIO</h2>
      </div>
    <div class="field">
      <div>
        <label>*No. Orden Servicio</label>
        <input v-model="contrato.idscontrato" placeholder="" :disabled="soloLectura" />
      </div>

      <div>
        <label>*Contrato de Servicios</label>
        <select v-model="model.horaReporte " :disabled="soloLectura" >
          <option value="Canino">Convenio</option>
          <option value="Felino">Particular</option>
          <option value="Otro">Afil CD</option>
        </select>
      </div>

      <div>
        <label>*Fecha</label> 
        <input type="date" v-model="contrato.sfecha" :disabled="soloLectura" />
      </div>

      <div>
        <label>Hora Reporte</label>
        <input type="time" v-model="model.horaReporte" :disabled="soloLectura"  />
      </div>

      <div>
        <label>*Marca Paso</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option value="Canino">Convenio</option>
          <option value="Felino">Particular</option>
        </select>
      </div>

      

      <div>
        <label>*Fondo</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option value="Canino">Cali</option>
          <option value="Felino">Barranquilla</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      
      <button class="icon-btn">✅</button>
      <button class="icon-btn">✅</button>
    </div>
  
    <div class="field">
      <div>
        <label>*Estado</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option value="Canino">Directo Fallecido</option>
        </select>            
      </div>
      <div>
        <label>*Valor Retorno</label>
        <input v-model="contrato.valretorno" placeholder="" :disabled="soloLectura" />
      </div>
      <div>
        <label>*Por Quien</label>
        <input v-model="contrato.autorizadopor" placeholder="" :disabled="soloLectura" />
      </div>
      <div>
        <label>*Ext</label>
        <input v-model="model.direccion" placeholder="" :disabled="soloLectura"  />
      </div>
      <div>
        <label>Hora</label>
        <input type="time" v-model="model.horaReporte" :disabled="soloLectura" />
      </div>

      <div>
        <label>*Tipo de Auxilio</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option value="Canino">Convenio</option>
          <option value="Felino">Particular</option>
        </select>
      </div>
      <div style="width: 100px;">
        <label>*Covid</label>
        <select v-model="model.especie" :disabled="soloLectura" > 
          <option value="Canino">Si</option>
          <option value="Felino">No</option>

        </select>
      </div>
    
    </div>
    <div class="field">
      <div>
        <label style="color: red;">*Servicio (SC) </label>
        <input v-model="model.direccion" placeholder="" :disabled="soloLectura" />
      </div>
      <div>
        <label style="color: red;">*Grupo Categoria</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option value="Canino">Directo</option>            
        </select>
      </div>
      <div >
        <label style="color: red;">*Categorias de Servicio</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option value="Canino">Particulares</option>          
        </select>
      </div>
     
      <div class="tipo-servicio">
        <label style="color:red;">*Tipos de Servicio</label>
        <select v-model="model.especie" :disabled="soloLectura" >
          <option>Particulares</option>
        </select>
      </div>
      <div>
        <label>*Fecha Apertura</label>
        <input type="date" v-model="model.fechaReporte" :disabled="soloLectura" />
      </div>
    </div>
    <div class="field">
      <div>
        <label>Nit Empresa</label>
        <input v-model="contrato.nitempresaafil" placeholder="" :disabled="soloLectura" />
      </div>
      <div style="width: 180px;">
        <label>Empresa</label>
        <input v-model="contrato.empresaafil" placeholder="" :disabled="soloLectura" />
      </div>
      <div>
        <label>*Fecha Afiliacion</label>
        <input type="date" v-model="model.fechaReporte" :disabled="soloLectura" />
      </div>
      <div style="width: 180px;">
        <label>Tipo Plan</label>
        <input type="text" v-model="model.direccion" placeholder="" :disabled="soloLectura" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, watch } from "vue";
import { useOrdenesStore } from "../../../../stores/OrdenServicios/ordenStore.js";
const ordenesStore = useOrdenesStore();
const contrato = computed(() => ordenesStore.contrato);
const soloLectura = computed(() => ordenesStore.modo === "consulta");
const model = defineModel();
</script>

<style scoped>
/* ACA SE MODIFICO LA CARD DEL FONDO */
.form-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}
/* ACA MANEJA EL ESPACIO ENTRE EL TITULO Y LOS CAMPOS */
.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  color: #6366f1;
}
/* ACA MANEJA EL TITULO LETRA Y COLOR */
.card-header h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #334155;
  text-transform: uppercase;
}
/* ACA MANEJA EL ESTILO PARA LOS SELECT */
input,
select {
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 12px;
  box-sizing: border-box;
}
/* ACA MANEJA EL COLOR CUANDO SE SELECCIONE EL IMPUT TEXT */
input:focus,
select:focus {
  outline: none;
  border-color: #6366f1;
}
/* ACA MANEJA EL RESPONSIVE*/
@media (max-width: 1200px) {
  .field {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .field {
    grid-template-columns: 1fr !important;
  }
}
/* ACA SE ACOMODAN LOS CAMPOS*/
.field {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 0.5fr 0.8fr 1fr 32px 0.8fr;
  gap: 10px;
  align-items: end;
  margin-bottom: 15px;
}
/* ACA SE ACOMODAN LOS CAMPOS*/
.field > div {
  display: flex;
  flex-direction: column;
}
/* ACA SE ACOMODAN EL COLOR DE LAS LETRAS*/
label {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 4px;
}
/* ACA SE ACOMODA EL COLOR DEL BOTTON*/
.icon-btn {
    width: 32px;
    height: 32px;
}
.tipo-servicio{
    grid-column: span 2;
}
</style>