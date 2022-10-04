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
    getProduct().then(products => products.haypique.map(product => {
        const info = `
        <h2 class="nombre"><b>${product.nombre}</b></h2><br>
        <p class="descrip">${product.desc}</p><br>
        <h3 class="precio">$<b>${product.precio}</b></h3>
        <hr>
        `
        ctnPique.innerHTML += info
    }))
});
btnVaPlomo.addEventListener("click",()=>{
    const ctnPlomo = document.getElementById('menu-pescado-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnPescado.classList.toggle("active");
    ctnPlomo.innerHTML = ""

    getProduct().then(products => products.vaplomo.map(product => {
        const info = `
        <h2 class="nombre"><b>${product.nombre}</b></h2><br>
        <p class="descrip">${product.desc}</p><br>
        <h3 class="precio">$<b>${product.precio}</b></h3>
        <hr>
        `
        ctnPlomo.innerHTML += info
    }))
});
btnCardumen.addEventListener("click",()=>{
    const ctnCardumen = document.getElementById('menu-cardumen-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnHamburguesa.classList.toggle("active");
    ctnCardumen.innerHTML = ""

    getProduct().then(products => products.cardumen.map(product => {
        const info = `
        <h2 class="nombre"><b>${product.nombre}</b></h2><br>
        <p class="descrip">${product.desc}</p><br>
        <h3 class="precio">$<b>${product.precio}</b></h3>
        <hr>
        `
        ctnCardumen.innerHTML += info
    }))
});
btnSalsa.addEventListener("click",()=>{
    const ctnAnclas = document.getElementById('menu-anclas-poo');

    desactivarBarra();
    desactivarMenu();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnSalsa.classList.toggle("active");
    ctnAnclas.innerHTML = ""

    getProduct().then(products => products.anclas.map(product => {
        const info = `
        <h2 class="nombre"><b>${product.nombre}</b></h2><br>
        <p class="descrip">${product.desc}</p><br>
        <h3 class="precio">$<b>${product.precio}</b></h3>
        <hr>
        `
        ctnAnclas.innerHTML += info
    }))
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
    desactivarMenu();
    desactivarBarra();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnDesayuno.classList.toggle("active");
});

btnCerveza.addEventListener("click",()=>{
    desactivarMenu();
    desactivarBarra();
    activarUpper();
    inicio.classList.add("desactivado");
    ctnCerveza.classList.toggle("active");
});


/* 
Codigo reutilizable
let `` = document.getElementById("btn-``")
*/

// Acá empieza el codigo viejo
// Acá termina el codigo viejo

const getProduct = async function () {
    let url = './javascript/products.json';
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
    }
}
getProduct()