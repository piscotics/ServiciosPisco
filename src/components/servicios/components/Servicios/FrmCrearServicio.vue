<template>
  <div>
    <div class="">
      <section class="form-card">
        <div class="card-header">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>DATOS TIPO DE SERVICIO</h2>
          </div>
        <div class="field">
          <div>
            <label>*No. Orden Servicio</label>
            <input v-model="model.direccion" placeholder="PA555441" />
          </div>

          <div>
            <label>*Contrato de Servicios</label>
            <select v-model="model.especie">
              <option value="Canino">Convenio</option>
              <option value="Felino">Particular</option>
              <option value="Otro">Afil CD</option>
            </select>
          </div>

          <div>
            <label>*Fecha</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>

          <div>
            <label>Hora Reporte</label>
            <input type="time" v-model="model.horaReporte" />
          </div>

          <div>
            <label>*Marca Paso</label>
            <select v-model="model.especie">
              <option value="Canino">Convenio</option>
              <option value="Felino">Particular</option>
            </select>
          </div>

          

          <div>
            <label>*Fondo</label>
            <select v-model="model.especie">
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
            <select v-model="model.especie">
              <option value="Canino">Directo Fallecido</option>
            </select>            
          </div>
          <div>
            <label>*Valor Retorno</label>
            <input v-model="model.direccion" placeholder="" />
          </div>
          <div>
            <label>*Por Quien</label>
            <input v-model="model.direccion" placeholder="" />
          </div>
          <div>
            <label>*Ext</label>
            <input v-model="model.direccion" placeholder="" />
          </div>
          <div>
            <label>Hora</label>
            <input type="time" v-model="model.horaReporte" />
          </div>

          <div>
            <label>*Tipo de Auxilio</label>
            <select v-model="model.especie">
              <option value="Canino">Convenio</option>
              <option value="Felino">Particular</option>
            </select>
          </div>
          <div>
            <label>*Covid</label>
            <select v-model="model.especie">
              <option value="Canino">Cali</option>
              <option value="Felino">Barranquilla</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div>
            <label>*Fecha Apertura</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
        </div>
        <div class="field">
          <div>
            <label style="color: red;">*Servicio (SC) </label>
            <input v-model="model.direccion" placeholder="" />
          </div>
          <div>
            <label style="color: red;">*Grupo Categoria</label>
            <select v-model="model.especie">
              <option value="Canino">Directo</option>            
            </select>
          </div>
          <div>
            <label style="color: red;">*Categorias de Servicio</label>
            <select v-model="model.especie">
              <option value="Canino">Particulares</option>          
            </select>
          </div>
          <div>
            <label style="color: red;">*Categorias de Servicio</label>
            <select v-model="model.especie">
              <option value="Canino">Particulares</option>          
            </select>
          </div>
          
        
        </div>
        <div class="field">
          <div>
            <label>Nit Empresa</label>
            <input v-model="model.direccion" placeholder="" />
          </div>
          <div>
            <label>Empresa</label>
            <input v-model="model.direccion" placeholder="" />
          </div>
          <div>
            <label>*Fecha Afiliacion</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label>Empresa</label>
            <input type="text" v-model="model.direccion" placeholder="" />
          </div>
        </div>
      </section>
      <section class="form-card">
        <div class="card-header">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>Información DEL CONTRATANTE DEL SERVICIO</h2>
          </div>
        <div class="field">
          <div>
            <label>*C.C. Contratante</label>
            <input v-model="model.direccion" placeholder="1225412" />
          </div>

          <div>
            <label>*Contratante</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>

          <div>
            <label>*Telefono</label>
            <input v-model="model.direccion" type ="number"/>
          </div>

          <div>
            <label>*E Mail</label>
            <input v-model="model.direccion" type ="mail"/>
          </div>

         
          <div>
            <label>*Dirección</label>
            <input v-model="model.direccion" type ="mail"/>
          </div>

        </div>
        <div class="field">
          <div>
            <label>Departamento</label>
            <select v-model="model.especie">
              <option value="Canino">Directo Fallecido</option>
            </select>
          </div>
          <div>
            <label>Ciudad</label>
            <select v-model="model.especie">
              <option value="Canino">Directo Fallecido</option>
            </select>
          </div>
          <div>
            <label>Fecha Nacimiento</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label>Parentesco</label>
            <select v-model="model.especie">
              <option value="Canino">Padre</option>
              <option value="Felino">Madre</option>
            </select>
          </div>         
        </div>
      </section>
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
          <div>
            <label>Apellidos del Fallecido:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Fecha de Expedicion</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label>Fecha de Nacimiento</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label>Años</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Mes:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Dia:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>

        </div>
        <div class="field">
          <div>
            <label>Lugar de Nacimiento:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
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
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Dirección de Residencia:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>*Telefono</label>
            <input v-model="model.direccion" type ="number"/>
          </div>
        </div>
        <div class="field">
          <div>
            <label>Ocupación del Difunto:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
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
          <div>
            <label>*Nombre del Padre:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>*Nombre dela Madre:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
        </div>
      </section>
      <section class="form-card">
        <div class="card-header">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>DATOS DEL FALLECIDO</h2>
          </div>
        <div class="field">
          <div>
            <label>Murio En:</label>
            <select v-model="model.especie">
              <option value="Canino">Clinica</option>
              <option value="Felino">Calle</option>
            </select>
          </div> 

          <div>
            <label>Direccion Fallecimiento:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>*Fecha Muerte</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label>Hora</label>
            <input type="time" v-model="model.horaReporte" />
          </div>
          <div>
            <label>Tipo Muerte:</label>
            <select v-model="model.especie">
              <option value="Canino">Natural</option>
              <option value="Felino">Violenta</option>
            </select>
          </div> 
          <div>
            <label>Causa Muerte:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>Medico Comprobó Muerte:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
        </div>
        <div class="field">    
          <div>
            <label>Preserv. del Cuerpo:</label>
            <select v-model="model.especie">
              <option value="Canino">Especial</option>
              <option value="Felino">Ordinario</option>
            </select>
          </div> 
          <div>
            <label style="color: green;">Numero Licencia:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label style="color: green;">R. Defunción:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label style="color: green;">Notaria:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label style="color: green;">Fecha de Registro</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label style="color: green;">Fecha Llega Req</label>
            <input type="date" v-model="model.fechaReporte" />
          </div>
          <div>
            <label style="color: green;">Certifi. Defunción:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label >Paz y Salvo</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
        </div>
        <div class="field">
          <div>
            <label>Ocupación del Difunto:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
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
          <div>
            <label>*Nombre del Padre:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
          <div>
            <label>*Nombre dela Madre:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
          </div>
        </div>
        <br><br>
        <div class="field">
     
          <div>
            <label>Departamento Fallecimiento:</label>
            <select v-model="model.especie">
              <option value="Canino">Cali</option>
              <option value="Felino">Femenino</option>
            </select>
          </div>  
          <div>
            <label>Municipio Fallecimiento</label>
            <select v-model="model.especie">
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div>
            <label>Como Llega el Servicio</label>
            <select v-model="model.especie">
              <option value="Canino">Masculino</option>
              <option value="Felino">Femenino</option>
            </select>
          </div> 
          <div>
            <label>Otro:</label>
            <input v-model="model.direccion" placeholder="Lomas Fecom" />
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
</style>