/* ----------------------Calculadora de Préstamos */


function prestamo (){
        let contenedor = document.getElementById("resultado");
        contenedor.innerHTML = ""
        let contendorError = document.getElementById("errorMontoCuota");
        contendorError.innerHTML = "";
       
         
        let cuota=document.getElementById("cuotas");
        let errorMonto = document.createElement("p");
        
        if(monto.value>1000000){
            errorMonto.innerHTML = "*El monto supera el tope para solicitar";
            errorMonto.className = "colorError mt-5";
            contendorError.appendChild(errorMonto);
            
        }
        else{
            
            if(cuota.value>11&& cuota.value<24){
                let tna=0.5;
                let tem=tna/12;
                let seguro=0.01;
                calcularTabla(monto.value,tem, cuota.value, seguro, tna);
               
                
            }
            else if (cuota.value>23 && cuota.value<36){
                let tna=0.6;
                let tem=tna/12;
                let seguro=0.012;
                calcularTabla(monto.value,tem, cuota.value, seguro, tna);
                

            }
            else if(cuota.value>35 && cuota.value<48){
                let tna=0.69;
                let tem=tna/12;
                let seguro=0.015;
                calcularTabla(monto.value,tem, cuota.value, seguro, tna);
                
            }
            else if(cuota.value>47 && cuota.value<73){
                let tna=0.72;
                let tem=tna/12;
                let seguro=0.018;
                calcularTabla(monto.value,tem, cuota.value, seguro, tna);
                
                
                
            }
            else if(cuota.value<12  || cuota.value>72){
                let errorCuota = document.createElement("p");
                errorCuota.innerHTML = "*Los valores de las cuotas están fuera de parámetro, introduzca un valor entre 12 y 72";
                errorCuota.className = "colorError mt-5";
                let contendorError = document.getElementById("errorMontoCuota");
                contendorError.appendChild(errorCuota);
               
                
            }
                
            }
    
       
    
}



function calcularTabla(capital, interes, cuotas,seguro,tna){
    let valorCuota= ((capital*(interes)*Math.pow(1+interes, cuotas)))/(Math.pow(1+interes, cuotas)-1);
    let tabla="";
    let intCuota=0;
    let titulo = document.createElement("h2");
    let datos = document.createElement("h4");
    let contenedor = document.getElementById("resultado");
    let lista = document.createElement("ul")
    lista.className = "contenedor";
    let tablaHtml = document.createElement("table")
    tablaHtml.className = "table table-primary table-striped col-8 m-5";
    tablaHtml.innerHTML = ` <thead>
                            <tr>
                                <th scope="col">Cuota</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Interes Cuota</th>
                                <th scope="col">Capital Adeudado</th>
                            </tr>
                            </thead>`;
                            
    let cuerpoTabla = document.createElement("tbody");
    for(let i=1; i<=cuotas; i++){
        valorCuotaSeguro=valorCuota+(capital*seguro)
        intCuota=capital*interes;
        capital = (capital*(1+interes))-valorCuota;
        tabla=tabla + "Valor de la cuota "+i+": "+ valorCuotaSeguro.toFixed(2) + " Interes cuota: "+ intCuota.toFixed(2)+" Capital adeudado: "+capital.toFixed(2)+"\n";
        let filasTabla = document.createElement("tr")
       
        let th = document.createElement("th");
        th.scope = "row";
        
        th.innerHTML = `<th>${i}</th>`;
        let td = document.createElement("td");
        td.innerHTML = `<td>$${valorCuotaSeguro.toFixed(2)}</td>`
        let td1 = document.createElement("td");
        td1.innerHTML = `<td>$${intCuota.toFixed(2)}</td>`
        let td2 = document.createElement("td");
        td2.innerHTML = `<td>$${capital.toFixed(2)}</td>`
                                    
       
        filasTabla.append(th, td, td1, td2)
        cuerpoTabla.append(filasTabla)
}

titulo.innerHTML = "<u>Datos del péstamo y tabla de amortización</u>";
datos.innerHTML = `Valor Promedio Cuota $${valorCuota.toFixed(2)} TNA:${tna*100}% Porcentaje de seguro sobre capital ${(seguro*100).toFixed(2)}%`;


tablaHtml.appendChild(cuerpoTabla);
contenedor.append(titulo, datos, tablaHtml);

}
let botonPrestamo = document.getElementById("botonPrestamo");
botonPrestamo.addEventListener("click", prestamo)

/* -------------------------Fin calculadora Préstamos */

/* -----------Calificación empleados Empresa------------------ */
class Nomina{
    constructor(nombre, apellido, salario, antiguedad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
        this.antiguedad = antiguedad;
    }
}


let formularioEmpleados = document.getElementById("formularioEmpleados")
let nombreEmpleado = document.getElementById("nombreEmpleado");
let apellidoEmpleado = document.getElementById("apellidoEmpleado");
let salarioEmpleado = document.getElementById("salarioEmpleado");
let antiguedadEmpleado = document.getElementById("antiguedadEmpleado");
let nominaCompleta = [];
let calificaSolaFirma=[];
let calificaConGarantia=[];

function agregar () {
    nominaCompleta.push(new Nomina(nombreEmpleado.value, apellidoEmpleado.value, salarioEmpleado.value, antiguedadEmpleado.value));
    formularioEmpleados.reset();
    }
    
let botonSiguiente = document.getElementById("siguienteEmpleado");
botonSiguiente.addEventListener("click", agregar);

function calificar(){
    calificaSolaFirma=[];
    calificaConGarantia=[];
    let lista1 = nominaCompleta.filter(element => element.salario>150000 && element.antiguedad>=2);
    lista1.forEach(element => {
        calificaSolaFirma.push(element);
    });
    let lista2 = nominaCompleta.filter(empleado => empleado.salario>70000 && empleado.salario<150000 && empleado.antiguedad >=3);
    lista2.forEach(element =>{
        calificaConGarantia.push(element);
    })

    
   
    let cuadro1 = document.getElementById("nominaCompleta");
    let cuadro2 = document.getElementById("nominaSolaFirma");
    let cuadro3 = document.getElementById("nominaGarantia");
    tablaEmpelados("Nomina Ingresada", nominaCompleta, cuadro1);
    tablaEmpelados("Califica Sola Firma", calificaSolaFirma, cuadro2);
    tablaEmpelados("Necesita Garantía", calificaConGarantia, cuadro3);

    function tablaEmpelados(tipoTitulo, tipoLista, contenedor){
        
        contenedor.innerHTML = "";
        let titulo = document.createElement("h2");
        let tablaHtml = document.createElement("table")
        titulo.innerHTML = tipoTitulo;
        tablaHtml.className = "table table-primary table-striped col-8 m-5";
        tablaHtml.innerHTML = ` <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Salario</th>
                                    <th scope="col">Antigüedad</th>
                                </tr>
                                </thead>`;
        let cuerpoTabla = document.createElement("tbody");                        
        tipoLista.forEach(element => {
        let filasTabla = document.createElement("tr")
       
        let th = document.createElement("th");
        th.scope = "row";
        th.innerHTML = `<th>${element.nombre}</th>`;
        let td = document.createElement("td");
        td.innerHTML = `<td>${element.apellido}</td>`
        let td1 = document.createElement("td");
        td1.innerHTML = `<td>${element.salario}</td>`
        let td2 = document.createElement("td");
        td2.innerHTML = `<td>${element.antiguedad}</td>`
        filasTabla.append(th, td, td1, td2);
        cuerpoTabla.append(filasTabla)
    });
    tablaHtml.appendChild(cuerpoTabla)
    contenedor.append(titulo, tablaHtml);
    nominaCompleta = [];
    }

    


}

let botonCalificar = document.getElementById("botonCalificar");
botonCalificar.addEventListener("click", calificar)



/* -----------------------------Fin calificador Empleado Empresas */
   
    
    
    



/* -------------------Conversor de monedas---------------- */


class Moneda{
    constructor (precioComprador, precioVendedor){
        this.precioComprador = precioComprador;
        this.precioVendedor = precioVendedor;
        this.impuestoVenta = (porcentaje)=>{
            return ((precioVendedor*porcentaje/100));
        }
    }
}

const dolar = new Moneda(121.75, 127.75)
const euro = new Moneda (125.75, 132.75)

let montoDivisa = document.getElementById("montoCambio");
let usd = document.getElementById("dolar");
let eu = document.getElementById("euro");
let divisa = document.getElementById("divisa");
let contenedorCambio = document.getElementById("contenedorCambio");

function vender (){
    contenedorCambio.innerHTML = "";
    let resultado = document.createElement("h3");
    divisa.value=="Dolar" && (valorTotal=(dolar.precioVendedor*montoDivisa.value)+(dolar.impuestoVenta(30)*montoDivisa.value),
    resultado.innerHTML = `Usted debe abonar $${valorTotal.toFixed(2)}`,contenedorCambio.append(resultado));
    
    divisa.value=="Euro" && (
        valorTotal=(euro.precioVendedor*montoDivisa.value)+(euro.impuestoVenta(25)*montoDivisa.value),resultado.innerHTML = `Usted debe abonar $${valorTotal.toFixed(2)}`,
        contenedorCambio.append(resultado));
    }
    


let botonCompra = document.getElementById("comprarDivisas");
botonCompra.addEventListener("click", vender)

function comprar(){
    contenedorCambio.innerHTML = "";
    let resultado = document.createElement("h3");
    divisa.value=="Dolar" && (
        valorTotal=(dolar.precioComprador*montoDivisa.value),resultado.innerHTML = `Usted recibirá $${valorTotal.toFixed(2)}`,
        contenedorCambio.append(resultado));
    
    divisa.value=="Euro" && (valorTotal=(euro.precioComprador*montoDivisa.value),resultado.innerHTML = `Usted recibirá $${valorTotal.toFixed(2)}`,
    contenedorCambio.append(resultado));
}

let botonVender = document.getElementById("venderDivisas");
botonVender.addEventListener("click", comprar)


/* ---------------------------Fin de Conversor de Monedas----------------- */

/* -------------------------Password con localstorage Acceso de empleados------------- */

localStorage.setItem("usuarioBanco", "Administrador")
localStorage.setItem("claveBanco", "Banco")

let usuario = document.getElementById("usuarioBanco");
let clave = document.getElementById("claveBanco");
let btnAcceso = document.getElementById("btnAcceso")
let ok = document.getElementById("accesoOk")
let errorAcceso = document.getElementById("accesoError")
let logInForm = document.getElementById("logInForm")

const validarUsuario = () =>{
    usuario.value==="Administrador" && clave.value==="Banco"? (seccionPrestamos.className="invisible",seccionEmpresas.className = "invisible",
    seccionDivisas.className = "invisible",loginEmpleados.className = "invisible",seccionClientes.className = ""): errorAcceso.innerHTML="Usuario o Password incorrectos"
    errorAcceso.className="";
    logInForm.reset();
        
    
}

btnAcceso.addEventListener("click", validarUsuario)

/* --------------------Carga de clientes a la base de datos------------- */



let dni = document.getElementById("dni");
let nombreCliente = document.getElementById("nombreCliente");
let apellidoCliente = document.getElementById("apellidoCliente");
let emailCliente = document.getElementById("emailCliente");
let telCliente = document.getElementById("telCliente");
let dirCliente = document.getElementById("dirCliente");
let btnCarga = document.getElementById("btnCarga");
let btnBorrar = document.getElementById("btnBorrar");
let btnListar = document.getElementById("btnListar");
let avisoError = document.getElementById("avisoError");
let contenedorClientes = document.getElementById("seccionClientes");
let formCarga = document.getElementById("formCarga");
let btnConsultar = document.getElementById("btnConsultar");
let tablaClientes = document.createElement("table")
let cuerpoTablaCLientes = document.createElement("tbody")

class ClienteBanco{
    constructor(dni,nombre, apellido, email, tel, dir ){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tel = tel;
        this.dir = dir;
        
    }
}


function carga(){
   
    cuerpoTablaCLientes.innerHTML="";
    let clave = dni.value;
    let valor;
    (clave>0 && (nombreCliente.value).length>0 && (apellidoCliente.value).length>0 && (emailCliente.value).length>0)?
    (localStorage.getItem(clave.toString())? avisoError.innerHTML="Ya existe ese DNI": 
    (valor = new ClienteBanco (dni.value, nombreCliente.value, apellidoCliente.value, emailCliente.value, telCliente.value, dirCliente.value),
    localStorage.setItem(clave.toString() , JSON.stringify(valor)),
    formCarga.reset(),
    avisoError.innerHTML="",
    avisoError.innerHTML="Cliente Cargado Correctamente",
    avisoError.className = "colorOk")):avisoError.innerHTML="Debes llenar los campos Obligatorios"
    
}

function consultar(){
    cuerpoTablaCLientes.innerHTML="";
    avisoError.innerHTML="";
    let clave=dni.value
    let cliente = JSON.parse(localStorage.getItem(clave))
    localStorage.getItem(clave.toString())? (nombreCliente.value = cliente.nombre,
    apellidoCliente.value = cliente.apellido, emailCliente.value = cliente.email, telCliente.value = cliente.tel, 
    dirCliente.value = cliente.dir):
    avisoError.innerHTML="No existe cliente asociado a ese DNI" 
    
}

function borrar(){
    cuerpoTablaCLientes.innerHTML="";
    avisoError.innerHTML="";
    let clave=dni.value;
    localStorage.removeItem(clave.toString());
    avisoError.innerHTML="Cliente borrado satisfactoriamente"; 
    formCarga.reset();
}

function listar() {
    avisoError.innerHTML="";
    cuerpoTablaCLientes.innerHTML="";
    let elementos=[]
    let objetosClientes=[]

    for(let i=0; i<localStorage.length; i++){
    let elemento = localStorage.key(i);
    localStorage.key(i)!="claveBanco" && localStorage.key(i)!= "usuarioBanco"? elementos.push(elemento):
    console.log()
}
    if(elementos.length>0){
        for (const elemnt of elementos) {
            objetosClientes.push(JSON.parse(localStorage.getItem(elemnt))) 
        }
        tablaClientes.innerHTML=`<thead>
                            <tr>
                                <th scope="col">DNI</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Dirección</th>
                            </tr>
                            </thead>`;

        for (const cliente of objetosClientes) {
            
            let filasTabla = document.createElement("tr")
            let th = document.createElement("th");
            th.scope = "row";
            th.innerHTML = `<th>${cliente.dni}</th>`;
            let td = document.createElement("td");
            td.innerHTML = `<td>${cliente.nombre}</td>`
            let td1 = document.createElement("td");
            td1.innerHTML = `<td>${cliente.apellido}</td>`
            let td2 = document.createElement("td");
            td2.innerHTML = `<td>${cliente.email}</td>`
            let td3 = document.createElement("td");
            td3.innerHTML = `<td>${cliente.tel}</td>`
            let td4 = document.createElement("td");
            td4.innerHTML = `<td>${cliente.dir}</td>`
        
        
                                    
    
        filasTabla.append(th, td, td1, td2, td3, td4)
        cuerpoTablaCLientes.append(filasTabla)
    }

        tablaClientes.append(cuerpoTablaCLientes)
        tablaClientes.className="table table-primary table-striped col-8"
        contenedorClientes.append(tablaClientes) 
    }else{
        avisoError.innerHTML="No hay elemenotos en la base de datos";
        contenedorClientes.append(avisoError)
    }
    
    

    
}


btnCarga.addEventListener("click", carga);
btnConsultar.addEventListener("click", consultar);
btnBorrar.addEventListener("click", borrar);
btnListar.addEventListener("click", listar)

/* -------------------------------Mostrar y ocultar contenido------------------------------- */
let btnLogInEmpleados = document.getElementById("btnLogInEmpleados");
let btnIngresoPrestamos = document.getElementById("btnIngresoPrestmamos");
let btnIngresoEmpresas = document.getElementById("btnIngresoEmpresas");
let btnIngresoDivisas = document.getElementById("btnIngresoDivisas");
let seccionPrestamos = document.getElementById("seccionPrestamos");
let seccionEmpresas = document.getElementById("seccionEmpresas");
let seccionDivisas = document.getElementById("seccionDivisas");
let loginEmpleados = document.getElementById("loginEmpleados");
let seccionClientes = document.getElementById("seccionClientes");



const verPrestamos = ( )=>{
    seccionPrestamos.className="";
    seccionEmpresas.className = "invisible";
    seccionDivisas.className = "invisible";
    loginEmpleados.className = "invisible";
    seccionClientes.className = "invisible";

}

btnIngresoPrestamos.addEventListener("click", verPrestamos)

const verEmpresas = ( )=>{
    seccionPrestamos.className="invisible";
    seccionEmpresas.className = "";
    seccionDivisas.className = "invisible";
    loginEmpleados.className = "invisible";
    seccionClientes.className = "invisible";

}

btnIngresoEmpresas.addEventListener("click", verEmpresas)

const verDivisas = ( )=>{
    seccionPrestamos.className="invisible";
    seccionEmpresas.className = "invisible";
    seccionDivisas.className = "";
    loginEmpleados.className = "invisible";
    seccionClientes.className = "invisible";

}

btnIngresoDivisas.addEventListener("click", verDivisas)


const logIn = ( )=>{
    seccionPrestamos.className="invisible";
    seccionEmpresas.className = "invisible";
    seccionDivisas.className = "invisible";
    loginEmpleados.className = "";
    seccionClientes.className = "invisible";

}

btnLogInEmpleados.addEventListener("click", logIn)

