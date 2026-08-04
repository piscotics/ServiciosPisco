<template>
    <section class="form-card">
        <div class="card-header">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>DATOS DEL FALLECIDO</h2>
          </div>
        <div class="field">
          <div>
            <label>Murio En:</label>
            <select v-model="contrato.lugar_muerte" :disabled="soloLectura" >
              <option value="Canino">Clinica</option>
              <option value="Felino">Calle</option>
            </select>
          </div> 

          <div>
            <label>Direccion Fallecimiento:</label>
            <input v-model="contrato.tiempo_permanencia" :disabled="soloLectura"  />
          </div>
          <div>
            <label>*Fecha Muerte</label>
            <input type="date" v-model="contrato.fechamuerte" :disabled="soloLectura" />
          </div>
          <div>
            <label>Hora</label>
            <input type="time" v-model="contrato.hora_muerte" :disabled="soloLectura" />
          </div>
          <div>
            <label>Tipo Muerte:</label>
            <select v-model="contrato.causamuerte" :disabled="soloLectura" >
              <option value="Canino">Natural</option>
              <option value="Felino">Violenta</option>
            </select>
          </div> 
          <div>
            <label>Causa Muerte:</label>
            <input v-model="contrato.causamuerte" :disabled="soloLectura"  />
          </div>
          <div class="medico">
    <label>Medico Comprobó Muerte:</label>
    <input v-model="contrato.medico" :disabled="soloLectura"  />
</div>
        </div>
        <div class="field">    
          <div>
            <label>Preserv. del Cuerpo:</label>
            <select v-model="contrato.preservacion" :disabled="soloLectura" >
              <option value="Canino">Especial</option>
              <option value="Felino">Ordinario</option>
            </select>
          </div> 
          <div>
            <label style="color: green;">Numero Licencia:</label>
            <input v-model="contrato.lic_inhumacion" :disabled="soloLectura" />
          </div>
          <div>
            <label style="color: green;">R. Defunción:</label>
            <input v-model="contrato.registro" :disabled="soloLectura" />
          </div>
          <div>
            <label style="color: green;">Notaria:</label>
            <input v-model="contrato.notaria" :disabled="soloLectura" />
          </div>
          <div>
            <label style="color: green;">Fecha de Registro</label>
            <input type="date" v-model="contrato.fecharegistro" :disabled="soloLectura" />
          </div>
          <div>
            <label style="color: green;">Fecha Llega Req</label>
            <input type="date" v-model="contrato.fechadigitaregistro" :disabled="soloLectura" />
          </div>
          <div style="width: 120px;">
            <label style="color: green;">Certifi. Defunción:</label>
            <input v-model="contrato.certificado"  :disabled="soloLectura" />
          </div>
        
        </div>
        <div class="field">
          <div>
            <label >Paz y Salvo</label>
            <input v-model="contrato.pazysalvo" :disabled="soloLectura"  />
          </div>
          <div style="width: 180px;">
            <label>Ocupación del Difunto:</label>
            <input v-model="model.direccion"  :disabled="soloLectura" />
          </div>
          <div>
            <label>Grado:</label>
            <select v-model="model.especie" :disabled="soloLectura" >
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div>  
          <div style="width: 180px;">
            <label>Nombre del Conyugue:</label>
            <select v-model="model.especie" :disabled="soloLectura" >
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div style="width: 180px;">
            <label>*Nombre del Padre:</label>
            <input v-model="model.direccion" :disabled="soloLectura" />
          </div>
          <div style="width: 180px;">
            <label>*Nombre dela Madre:</label>
            <input v-model="model.direccion" :disabled="soloLectura"  />
          </div>
        </div>
        <br><br>
        <div class="field">
     
          <div>
            <label>Departamento Fallecimiento:</label>
            <select v-model="contrato.departamentofallecido" :disabled="soloLectura" >
              <option value="Canino">Cali</option>
              <option value="Felino">Femenino</option>
            </select>
          </div>  
          <div>
            <label>Municipio Fallecimiento</label>
            <select v-model="contrato.ciudadmuerte" :disabled="soloLectura" >
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div>
            <label>Como Llega el Servicio</label>
            <select v-model="contrato.llegadaservicio" :disabled="soloLectura" >
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div>
            <label>Otro:</label>
            <input v-model="contrato.llegadaserviciootro" :disabled="soloLectura"  />
          </div>
        </div>
        
      </section>
       </template>
       
       
   
       <script setup>
       import { computed } from "vue";
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
       .medico{
    grid-column: span 2;
}
.field:first-of-type {
    display: grid;
    grid-template-columns:
        1.5fr   /* Murió en */
        1.8fr   /* Dirección */
        1.2fr   /* Fecha */
        .8fr    /* Hora */
        1fr     /* Tipo */
        1.3fr   /* Causa */
        1.4fr;  /* Médico */
    gap: 10px;
    align-items: end;
}
.registro{
    display:grid;
    grid-template-columns:
    1.5fr
    1.2fr
    1.2fr
    .8fr
    1.1fr
    1.1fr
    .8fr
    1fr;
    gap:10px;
    align-items:end;
}
.datos{
    display:grid;
    grid-template-columns:
    1.7fr
    1fr
    1.4fr
    1fr
    1.3fr;
    gap:10px;
    align-items:end;
}
       </style>