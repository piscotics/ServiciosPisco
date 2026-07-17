
<template>
  
    <section class="form-card">
    
    <div class="card-header">
      <i class="fa-solid fa-file-invoice"></i>
      <h2>PRESTACION DEL SERVICIO</h2>
    </div>
    <h4 style="color: red;">Datos Generales</h4>




    <div class="dos-columnas">
       
      <div class="grupo-checks">
    
    <div class="check">
      <input type="checkbox" id="fiador">
      <label for="fiador">Convenio</label>
    </div>
    
    <div class="check">
      <input type="checkbox" id="ramo">
      <label for="ramo">Particular</label>
    </div>
    
    <div class="check">
      <input type="checkbox" id="cofre">
      <label for="cofre">Afil CD</label>
    </div>
    
    <div class="check">
      <input type="checkbox" id="conformidad">
      <label for="conformidad">Afil SD</label>
    </div>
    
    </div>
    <div class="dos-columnas2">
    
    <div class="campo-horizontal">
           <label>*Nit</label>
           <input type="text">
      </div>
        <div class="check">
          <div> <button>Buscar</button></div>
          
        </div>  
  
  </div>
  <div class="campo-horizontal">
            <label>Sede</label>
            <select v-model="model.especie">
                  <option value="Canino">Clinica</option>
                  <option value="Felino">Calle</option>
            </select>
          </div>

  <div class="campo-horizontal">
    <label>*Nombre</label>
    <input type="text">
  </div>
  <div class="campo-horizontal">
    <label>Contrato No</label>
    <input type="text">
  </div>
  <div class="campo-horizontal">
    <label>Direccion</label>
    <input type="text">
  </div>
  <div class="campo-horizontal">
    <label>Plan Adquirido</label>
    <input type="text">
  </div>
  <div class="dos-columnas2">

<div class="campo-horizontal telefono">
  <label>Teléfono</label>
  <input type="text">
</div>

<div class="campo-horizontal ciudad">
  <label>Ciudad</label>
  <input type="text">
</div>


</div>
<div class="campo-horizontal">
    <label>Pago Hasta</label>
    <input type="text">
  </div>
  <div class="campo-horizontal">
    <label>Serv. Suministrado Por</label>
    <input type="text">
  </div> 



   
</div>
    <div class="contenedor">
      <!-- LADO IZQUIERDO -->
      <div class="lado-izquierdo">

    <div class="campo-horizontal1">
        <label>Valor Comercial:</label>
        <input type="text">
    </div>
    <div class="campo-horizontal1">
        <label>Descuento:</label>
        <input type="text">
    </div>
    <div  class="campo-horizontal1">
        <label>Valor Servicio:</label>
        <input type="text">
    </div>
    <div  class="campo-horizontal1">
        <label>vr Dest. Final:</label>
        <input type="text">
    </div>
    <div class="campo-horizontal1">
        <label>Vr. Excedente:</label>
        <input type="text">
    </div>
    <div class="campo-horizontal1">
        <label>Vr. Traslado:</label>
        <input type="text">
    </div>
    <div class="campo-horizontal1">
        <label>Vr. Adicionales:</label>
        <input type="text">
    </div>
    
    <div class="campo-horizontal1">
        <label>Valor Total:</label>
        <input type="text">
    </div>
    
    <div class="campo-horizontal1">
        <label>Letra No:</label>
        <input type="text">
    </div>
     
    <div class="check2">
        <label><input type="checkbox"> Contado</label>
        <label><input type="checkbox"> Crédito</label>
        <label><input type="checkbox"> Efectivo</label>
        <label><input type="checkbox"> Cheque</label>
    </div>
    </div>

      <!-- LADO DERECHO -->
      <div class="lado-derecho">
    
      <div class="recuadro">
    
        <h5>Abonos:</h5>
    
          <div class="tres-columnas">
          
              <div class="campo-horizontal" style="width: 180px;">
                  <label>*Recibo:</label>
                  <input type="text">
              </div>
          
              <div class="campo-horizontal" style="width: 180px;">
                  <label>*Fecha:</label>
                  <input type="date">
              </div>
              <div class="campo-horizontal" style="width: 180px;">
                  <label>*Tipo Pago:</label>
                  <select v-model="model.especie">
                  <option value="Canino">Clinica</option>
                  <option value="Felino">Calle</option>
            </select>
          

              </div>
              
          
          </div>
          <div class="cuatro-columnas">
          
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Abono:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 280px;">
              <label>*Pago:</label>
              <select v-model="model.especie">
              <option value="Canino">Clinica</option>
              <option value="Felino">Calle</option>
            </select>
        </div>
          <div class="campo-horizontal" style="width: 120px;">
              <label>No:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>Saldo Caja:</label>
              <input type="text">
          </div>
          
      
      </div>

      <div class="tres-columnas">

        <div class="campo-horizontal" style="width: 180px;">
              <label>Banco:</label>
              <select v-model="model.especie">
                <option value="Canino">Seleccione</option>
              <option value="Canino">Clinica</option>
              <option value="Felino">Calle</option>
        </select>
          </div>

          <div class="check">
      <input type="checkbox" id="cofre">
      <label for="cofre">PosFechado</label>
    </div>
         
      
          <div class="campo-horizontal" style="width: 180px;">
              <label>*F Cheque:</label>
              <input type="date">
          </div>
       
          
      
      </div>
      <div class="cuatro-columnas">

            <div style="width:180px;">
                <label>*Sede Recaudor:</label>
                <select>
                    <option>Seleccione</option>
                    <option>Clínica</option>
                    <option>Calle</option>
                </select>
            </div>

            <div  style="width:180px;">
                <label>No Factura:</label>
                <select>
                    <option>Seleccione</option>
                    <option>Clínica</option>
                    <option>Calle</option>
                </select>
            </div>

            <div class="tabla-info">
                <table>
                    <thead>
                        <tr>
                            <th>Excedente</th>
                            <th>Asesor</th>
                            <th>Solicitud Por</th>
                            <th>Valor Venta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$0</td>
                            <td></td>
                            <td></td>
                            <td>$0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
                
    <div class="dos-columnas">
      <div class="campo-horizontal" style="width: 180px;">
        <label>*Cobrador:</label>
        <select v-model="model.especie">
        <option value="Canino">Seleccione</option>
        <option value="Felino">Calle</option>
       </select>
              </div>
              <div class="check">
      <input type="checkbox" id="cofre">
      <label for="cofre">Quitar Facturas</label>
    </div>     

    <div class="campo-horizontal" >
              <label>R.Unica Banco:</label>
              <input type="text">
          </div>
          
          </div>            
          <div class="contenedor-pago">
     <div class="recuadro1">
        <h6>Pago Realizado Por:</h6>
        <div class="tres-columnas">

<div style="width:180px;">
    <label>*Tipo Id:</label>
    <select>
        <option>Seleccione</option>
        <option>Clínica</option>
        <option>Calle</option>
    </select>
</div>
<div class="campo-horizontal" style="width: 180px;">
              <label>*N*:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Nombre:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Nombre 2:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Apellido:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Apellido 2:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Dirección:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Tel:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>Ciudad:</label>
              <input type="text">
          </div>
          <div class="campo-horizontal" style="width: 180px;">
              <label>*Mail:</label>
              <input type="text">
          </div>
          <i class="fa-solid fa-plus"></i>

</div>
     </div>     
     <div class="tabla-info">
                <table>
                    <thead>
                        <tr>
                            <th>No Interno</th>
                            <th>Cedula Res</th>
                            <th>Nombres</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$0</td>
                            <td></td>
                            <td></td>
                            <td>$0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
    <div class="campo-horizontal" >
              <label>Detalle:</label>
              <input type="text">
          </div>

          <div class="tres-columnas">
            <div class="tabla-info">
                <table>
                    <thead>
                        <tr>
                            <th>NoRecibo</th>
                            <th>Fecha</th>
                            <th>Abono</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$0</td>
                            <td></td>
                            <td></td>
                            <td>$0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

           

                <div class="check">
                <input type="checkbox" id="cofre">
                <label for="cofre">Anulado</label>
                </div>
 

        <div class="tabla-info">
                        <table>
                            <thead>
                                <tr>
                                    <th>NoRecibo</th>
                                    <th>Fecha</th>
                                    <th>Abono</th>
                                    <th>Detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$0</td>
                                    <td></td>
                                    <td></td>
                                    <td>$0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

  

</div>
<Botonera/>

</div>
      </div>
    
    </div>
    
    </section>
</template>
           
           
       
           <script setup>
       import Botonera from '../../../../../utils/Botones.vue'
       import '@fortawesome/fontawesome-free/css/all.min.css'
    
           const model = defineModel()
           
              
            
const abrirModalCliente = () => {
    console.log('Abrir modal de clientes')
}  
           
              </script>
           
           <style scoped>
           /* ACA SE MODIFICO LA CARD DEL FONDO */
       
           /* ACA MANEJA EL ESPACIO ENTRE EL TITULO Y LOS CAMPOS */
       
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
          /* ==========================
   RESPONSIVE
========================== */

@media (max-width: 1200px){

.contenedor{
    grid-template-columns:1fr;
}

.lado-izquierdo,
.lado-derecho{
    width:100%;
}

}

@media (max-width:900px){

.dos-columnas{
    grid-template-columns:1fr;
}

.dos-columnas2{
    grid-template-columns:1fr;
}

.grupo-checks{
    grid-template-columns:1fr 1fr;
}

.campo-horizontal{
    flex-direction:column;
    align-items:flex-start;
    gap:6px;
}

.campo-horizontal label{
    width:100%;
}

.campo-horizontal input,
.campo-horizontal select{
    width:100%;
}

}

@media (max-width:600px){

.card-header h2{
    font-size:14px;
}

h4{
    font-size:14px;
}

.grupo-checks{
    grid-template-columns:1fr;
}

.check{
    width:100%;
}

.dos-columnas2{
    grid-template-columns:1fr;
}

.recuadro{
    padding:12px;
}

textarea{
    min-height:90px;
}

button{
    width:100%;
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

    .contenedor{
display: grid;
grid-template-columns: 0.8fr 5.5fr;
gap: 20px;
align-items: start;
}

.lado-izquierdo{
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 0; /* importante para que pueda encogerse */
}

.lado-derecho{
 
    display: flex;
    flex-direction: column;
    gap: 10px;
   
}
    
    
    
    
    
    .cartel{
        display: flex;
        align-items: end;
        gap: 20px;
    }
    
    .cartel > div:first-child{
        width: 220px;   /* ancho del combo */
    }
    
    .check{
        display: flex;
        flex-direction: row;   /* <-- ESTA ES LA QUE FALTA */
        align-items: center;
        gap: 6px;
        margin-bottom: 6px;
    }
    
    .check input{
        width: 16px;
        height: 16px;
        margin: 0;
        cursor: pointer;
    }
    
    .check label{
        margin: 0;
        white-space: nowrap;
        cursor: pointer;
    }

    .dos-columnas{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-bottom: 15px;
    }
    
    .dos-columnas2{
        display: grid;
        grid-template-columns: 10fr 1fr;
        gap: 15px;
        margin-bottom: 15px;
    }
    .tres-columnas{
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 3px;   /* espacio horizontal */
    row-gap: 8px;       /* espacio vertical */
    justify-content: start;
    margin-bottom: 15px;
}
.cuatro-columnas{
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 8px 10px;
    justify-content: start;
    margin-bottom: 15px;
}

.tabla-info table{
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
}

.tabla-info th,
.tabla-info td{
    border: 1px solid #cbd5e1;
    padding: 5px 8px;
    text-align: center;
}

.tabla-info th{
    background: #e5e7eb;
    font-weight: 600;
}

.tabla-info tbody tr{
    height: 30px;
}

@media (max-width: 900px){
    .tres-columnas{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px){
    .tres-columnas{
        grid-template-columns: 1fr;
    }
}
    .campo-horizontal{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .campo-horizontal label{
        margin: 0;
        white-space: nowrap;
    }
    
    .campo-horizontal input{
        flex: 1;
    }
    .observaciones{
        grid-column: 1 / -1; /* Ocupa todas las columnas del grid */
    }
    textarea{
        width: 100%;
        min-height: 120px;
        padding: 8px;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        font-size: 12px;
        font-family: inherit;
        box-sizing: border-box;
        resize: vertical; /* Permite agrandar solo hacia abajo */
    }
    
    textarea:focus{
        outline: none;
        border-color: #6366f1;
    }
    .grupo-checks{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px 20px;
    }
    
    
    .recuadro{
    position: relative;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 20px 18px 18px;
    margin-top: 20px;
    background: #d3f1cb;
}

.recuadro1{
    position: relative;
    width:580px;
    border:1px solid #cbd5e1;
    border-radius:8px;
    padding:20px 18px 18px;
    margin-top:20px;
    background:#689fbf;
}
.recuadro h5{
    position: absolute;
    top: -1px;
    left: -1px;
    margin: 0;
    padding: 0 6px;
  
    color: #dc2626;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
}
  
    .dos-columnas2{
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 15px;
}



.campo-horizontal1 label{
    width: 110px;      /* mismo ancho para todos los labels */
    min-width: 10px;
    margin: 0;
}

.campo-horizontal1 input,
.campo-horizontal1 select{
    flex: 1;
} 


.check2{
    display: inline-grid;
    grid-template-columns: auto auto;
    column-gap: 8px;   /* espacio entre columnas */
    row-gap: 2px;      /* espacio entre filas */
    justify-content: start;
}

.check2 label{
    display: flex;
    align-items: center;
    gap: 3px;          /* espacio entre el check y el texto */
    margin: 0;
    white-space: nowrap;
}

.check2 input{
    width: 16px;
    height: 16px;
    margin: 0;
}
.tabla-info{
    flex: 1;           /* Ocupa el espacio restante */
}

.tabla-info table{
    width: 100%;
    border-collapse: collapse;
}

.tabla-info th,
.tabla-info td{
    border: 1px solid #cbd5e1;
    padding: 6px;
    text-align: center;
}

.contenedor-pago{
    display:grid;
    grid-template-columns:580px 1fr;
    gap:15px;
    align-items:start;
}

 


           </style>