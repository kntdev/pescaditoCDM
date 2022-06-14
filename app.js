
//Botón de menu
let btnMenu = document.getElementById("btn-menu");
//Botones internos a Menu
let btnDia = document.getElementById("btn-dia");
let btnPescado = document.getElementById("btn-pescado");
let btnHamburguesa = document.getElementById("btn-hamburguesa");
let btnSalsa = document.getElementById("btn-salsa");

//ClassActive de Menu
let menuItem = document.querySelector(".menu-items");
//ClassActive de internos de Menu
let ctnMenuDia = document.querySelector(".container_menu");
let ctnPescado = document.querySelector(".container_pescado");
let ctnHamburguesa = document.querySelector(".container_hamburguesa");
let ctnSalsa = document.querySelector(".container_salsa");

//ClassActive de Barra

let itemsBarra = document.querySelector(".barra-items");
let btnBarra = document.getElementById("btn-barra");

//Click para abrir el Menu

btnMenu.addEventListener("click",()=>{
    menuItem.classList.toggle("active");
    itemsBarra.classList.remove("active");
});

function switchMenu(){
    menuItem.classList.remove("active");
};

//Click internos de Menu
btnDia.addEventListener("click",()=>{
    desactivarBarra();
    desactivarMenu();
    ctnMenuDia.classList.toggle("active");
    
});
btnPescado.addEventListener("click",()=>{
    desactivarBarra();
    desactivarMenu();
    ctnPescado.classList.toggle("active");
});
btnHamburguesa.addEventListener("click",()=>{
    desactivarBarra();
    desactivarMenu();
    ctnHamburguesa.classList.toggle("active");
});
btnSalsa.addEventListener("click",()=>{
    desactivarBarra();
    desactivarMenu();
    ctnSalsa.classList.toggle("active");
});
// Funcion para cambiar de menu a barra
function desactivarMenu(){
    ctnSalsa.classList.remove("active");
    ctnMenuDia.classList.remove("active");
    ctnPescado.classList.remove("active");
    ctnHamburguesa.classList.remove("active");
}

function menuSwitchBarra(){
    desactivarMenu();
    itemsBarra.classList.toggle("active");
}
function switchBarra(){
    btnBarra.addEventListener("click",abrirBarra());
};
btnBarra.addEventListener("click",()=>{
    itemsBarra.classList.toggle("active");
    switchMenu();
});

// Interactividad botón internos a Barra
let btnDesayuno = document.getElementById("btn-desayuno");
let btnCerveza = document.getElementById("btn-cerveza");
let btnGaseosa = document.getElementById("btn-gaseosa");
let btnCocteles = document.getElementById("btn-cocteles");

let ctnDesayuno = document.querySelector(".container_desayuno"); 
let ctnCerveza = document.querySelector(".container_cerveza");
let ctnGaseosa = document.querySelector(".container_gaseosa");
let ctnCocteles = document.querySelector(".container_cocteles");

function desactivarBarra(){ 
    ctnDesayuno.classList.remove("active");
    ctnCerveza.classList.remove("active");
    ctnGaseosa.classList.remove("active");
    ctnCocteles.classList.remove("active");
}

btnDesayuno.addEventListener("click",()=>{
    desactivarMenu();
    desactivarBarra();
    ctnDesayuno.classList.toggle("active");
});

btnCerveza.addEventListener("click",()=>{
    desactivarMenu();
    desactivarBarra();
    ctnCerveza.classList.toggle("active");
});

btnGaseosa.addEventListener("click",()=>{
    desactivarMenu();
    desactivarBarra();
    ctnGaseosa.classList.toggle("active");
});

btnCocteles.addEventListener("click",()=>{
    desactivarMenu();
    desactivarBarra();
    ctnCocteles.classList.toggle("active");
});

/* 
Codigo reutilizable
let `` = document.getElementById("btn-``")
*/

// Objetos para agregar a las lista

class producto {
    constructor(nombre,descripcion,precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.info = `
        <h2><b>${nombre}</b></h2><br>
        <p>${descripcion}</p><br>
        <h3>$<b>${precio}</b></h3><br>
        `
    }
}

// Lista para agregar productos, y la lista de las listas

const ctnMenu = document.getElementById("ctn-menu");

// agregar producto a menu dia
let platoFalopa = new producto("Plato sumamente drogradicto","A este plato le fascina la merca no la puede parar de tomar",1400);
let platoPersonalizado = new producto("Plato personalizable","Este plato esta caracterizado porque se personaliza mucho",600);
let plato1 = platoPersonalizado.info;
let plato2 = platoFalopa.info;

const menuDelDia = [plato1,plato2]

ctnMenu.innerHTML = menuDelDia;