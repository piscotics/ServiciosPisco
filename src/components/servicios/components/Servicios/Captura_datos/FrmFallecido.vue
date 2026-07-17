<template>
<section class="form-card">
        <div class="card-header">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>Información DEL FALLECIDO</h2>
          </div>
        <div class="field">
          <div>
            <label>*No. Identif Fallecido</label>
            <input v-model="model.direccion" placeholder="1225412" />
          </div>

          <div>
            <label>Expedida En:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Nombres Del Fallecido:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div class="span-2">
            <label>Apellidos del Fallecido:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Fecha de Expedicion</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div  class="span-2">
            <label>Fecha de Nacimiento</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label>*Telefono</label>
            <input v-model="model.direccion" type ="number"/>
          </div>
          <div style="width: 100px;">
            <label>Años</label>
            <input v-model="model.direccion"  />
          </div>
          <div style="width: 100px;">
            <label>Mes:</label>
            <input v-model="model.direccion" />
          </div>
          <div style="width: 100px;">
            <label>Dia:</label>
            <input v-model="model.direccion" />
          </div>

        </div>
        <div class="field">
          <div>
            <label>Lugar de Nacimiento:</label>
            <input v-model="model.direccion" />
          </div>
          <div>
            <label>Sexo:</label>
            <select v-model="model.especie">
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div>  
          <div>
            <label>Estado Civil:</label>
            <select v-model="model.especie">
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div>
            <label>Hijos:</label>
            <input v-model="model.direccion"  />
          </div>
          <div class="span-2">
            <label>Dirección de Residencia:</label>
            <input v-model="model.direccion"/>
          </div>
       
        </div>
        <div class="field">
          <div>
            <label>Ocupación del Difunto:</label>
            <input v-model="model.direccion"  />
          </div>
          <div>
            <label>Grado:</label>
            <select v-model="model.especie">
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div>  
          <div>
            <label>Nombre del Conyugue:</label>
            <select v-model="model.especie">
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div class="span-2">
            <label>*Nombre del Padre:</label>
            <input v-model="model.direccion"/>
          </div>
          <div class="span-2">
            <label>*Nombre dela Madre:</label>
            <input v-model="model.direccion"  />
          </div>
        </div>
      </section>
   </template>
   
   
   
   <script setup>
   
   

const model = defineModel()

   
   

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
   .span-2{
    grid-column: span 2;
}
   </style>