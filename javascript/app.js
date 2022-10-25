import data from './products.json' assert {type: 'json'}
let inicio = document.querySelector(".inicio");

//Upper
let up = document.querySelector(".btn-upper");
let flecha = document.querySelector(".flechita");
up.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
});
function activarUpper(){
    up.classList.add("active");
    flecha.classList.add("active");
}
//Botón de menu
let btnMenu = document.getElementById("btn-menu");
//Botones internos a Menu
let btnHayPique = document.getElementById("btn-haypique");
let btnVaPlomo = document.getElementById("btn-vaplomo");
let btnCardumen = document.getElementById("btn-cardumen");
let btnSalsa = document.getElementById("btn-anclas");

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
btnHayPique.addEventListener("click",()=>{
    const ctnPique = document.getElementById('menu-dia-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnMenuDia.classList.toggle("active");
    ctnPique.innerHTML = ""

    // Funciones
    mostrarData(ctnPique, data.haypique, "comida")

});
btnVaPlomo.addEventListener("click",()=>{
    const ctnPlomo = document.getElementById('menu-pescado-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnPescado.classList.toggle("active");
    ctnPlomo.innerHTML = ""

    // Funciones
    mostrarData(ctnPlomo, data.vaplomo, "comida")

});
btnCardumen.addEventListener("click",()=>{
    const ctnCardumen = document.getElementById('menu-cardumen-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnHamburguesa.classList.toggle("active");
    ctnCardumen.innerHTML = ""

    // Funciones
    mostrarData(ctnCardumen, data.cardumen, "comida")

});
btnSalsa.addEventListener("click",()=>{
    const ctnAnclas = document.getElementById('menu-anclas-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnSalsa.classList.toggle("active");
    ctnAnclas.innerHTML = ""

    // Funciones
    mostrarData(ctnAnclas, data.anclas, "comida")

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

let ctnDesayuno = document.querySelector(".container_desayuno"); 
let ctnCerveza = document.querySelector(".container_cerveza");

function desactivarBarra(){ 
    ctnDesayuno.classList.remove("active");
    ctnCerveza.classList.remove("active");
}

btnDesayuno.addEventListener("click",()=>{
    const ctnClasicos = document.getElementById('barra-clasicos-poo');
    const ctnBloodys = document.getElementById('bloodys-poo');
    const ctnCervezas = document.getElementById('cerveza-poo');
    const ctnTinto = document.getElementById('tintos-poo');
    const ctnBlanco = document.getElementById('blancos-poo');
    const ctnRosado = document.getElementById('rosado-poo');
    const ctnEspumante = document.getElementById('espumante-poo');

    desactivarMenu();
    desactivarBarra();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnDesayuno.classList.toggle("active");

    ctnClasicos.innerHTML = ""
    ctnBloodys.innerHTML = ""
    ctnCervezas.innerHTML = ""
    ctnTinto.innerHTML = ""
    ctnBlanco.innerHTML = ""
    ctnRosado.innerHTML = ""
    ctnEspumante.innerHTML = ""

    // Funciones
    mostrarData(ctnClasicos, data.clasicos, "botella")
    mostrarData(ctnBloodys, data.bloodys, "botella")
    mostrarData(ctnCervezas, data.cervezas, "botella")
    mostrarData(ctnTinto, data.tintos, "botella")
    mostrarData(ctnBlanco, data.blancos, "botella")
    mostrarData(ctnRosado, data.rosado, "botella")
    mostrarData(ctnEspumante, data.espumante, "botella")
})

btnCerveza.addEventListener("click",()=>{
    desactivarMenu();
    desactivarBarra();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnCerveza.classList.toggle("active");

    const ctnSabores = document.getElementById('barra-sabores-poo')
    const ctnNoAlcohol = document.getElementById('barra-sinalcohol-poo')

    ctnSabores.innerHTML = ""
    ctnNoAlcohol.innerHTML = ""

    // Funciones
        mostrarData(ctnSabores, data.sabores, "jarra")
        mostrarData(ctnNoAlcohol, data.sinalcohol, "jarra")
});

function mostrarData(ctn, param, tipo){
    
    if(tipo == "jarra"){
        param.forEach(product =>{
            if(typeof product.precio == 'object'){
                ctn.innerHTML += `
                <div class="ctn-barra-item">
                <div class="ctn-barra-item_titulo">
                <h2 class="nombre"><b>${product.nombre}</b></h2><br>
                <p class="descrip">${product.desc}</p><br>
                </div>
                <div class="ctn-barra-item_precio">
                <h3 class="precio">Jarra: $<b>${product.precio.jarra}</b></h3>
                <h3 class="precio">Copa: $<b>${product.precio.copa}</b></h3>
                </div>
                </div>
                `
            } else {
                ctn.innerHTML +=  `
                <div class="ctn-barra-item">
                <div class="ctn-barra-item_titulo">
                <h2 class="nombre"><b>${product.nombre}</b></h2><br>
                <p class="descrip">${product.desc}</p><br>
                </div>
                <div class="ctn-barra-item_precio">
                <h3 class="precio">$<b>${product.precio}</b></h3>
                </div>
                </div>
                `
            }
        })
    }
    else if (tipo == "botella"){
        param.forEach(product =>{
            if(typeof product.precio == 'object'){
                ctn.innerHTML += `
                <div class="ctn-barra-item">
                <div class="ctn-barra-item_titulo">
                <h2 class="nombre"><b>${product.nombre}</b></h2><br>
                <p class="descrip">${product.desc}</p><br>
                </div>
                <div class="ctn-barra-item_precio">
                <h3 class="precio">Botella: $<b>${product.precio.botella}</b></h3>
                <h3 class="precio">Copa: $<b>${product.precio.copa}</b></h3>
                </div>
                </div>
                `
            } else {
                ctn.innerHTML +=  `
                <div class="ctn-barra-item">
                <div class="ctn-barra-item_titulo">
                <h2 class="nombre"><b>${product.nombre}</b></h2><br>
                <p class="descrip">${product.desc}</p><br>
                </div>
                <div class="ctn-barra-item_precio">
                <h3 class="precio">$<b>${product.precio}</b></h3>
                </div>
                </div>
                `
            }
        })
    } else if (tipo == "comida"){
        param.forEach(product =>{
            ctn.innerHTML +=  `
            <h2 class="nombre"><b>${product.nombre}</b></h2><br>
            <p class="descrip">${product.desc}</p><br>
            <h3 class="precio">$<b>${product.precio}</b></h3>
            <hr>
            `
        })
    } else {
        return console.log("hay un fallo")
    }
}
