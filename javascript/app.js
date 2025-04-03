import data from './products.json' assert { type: 'json' };

const inicio = document.querySelector(".inicio");
const up = document.querySelector(".btn-upper");
const flecha = document.querySelector(".flechita");
const btnMenu = document.getElementById("btn-menu");
const menuItem = document.querySelector(".menu-items");
const itemsBarra = document.querySelector(".barra-items");
const btnBarra = document.getElementById("btn-barra");
const ctnDesayuno = document.querySelector(".container_desayuno");
const ctnCerveza = document.querySelector(".container_cerveza");

// Upper Scroll Button
up.addEventListener("click", () => document.documentElement.scrollTop = 0);
const activarUpper = () => {
    up.classList.add("active");
    flecha.classList.add("active");
};

// Toggle Menu
btnMenu.addEventListener("click", () => {
    menuItem.classList.toggle("active");
    itemsBarra.classList.remove("active");
});

const switchMenu = () => menuItem.classList.remove("active");

// Desactivar Secciones
const desactivarMenu = () => document.querySelectorAll(".container_menu, .container_pescado, .container_hamburguesa, .container_salsa").forEach(el => el.classList.remove("active"));
const desactivarBarra = () => document.querySelectorAll(".container_desayuno, .container_cerveza").forEach(el => el.classList.remove("active"));

// Click internos de Menu
const menuItems = [
    { btn: "btn-haypique", cont: "menu-dia-poo", dataKey: "haypique", section: ".container_menu" },
    { btn: "btn-vaplomo", cont: "menu-pescado-poo", dataKey: "vaplomo", section: ".container_pescado" },
    { btn: "btn-cardumen", cont: "menu-cardumen-poo", dataKey: "cardumen", section: ".container_hamburguesa" },
    { btn: "btn-anclas", cont: "menu-anclas-poo", dataKey: "anclas", section: ".container_salsa" }
];

menuItems.forEach(({ btn, cont, dataKey, section }) => {
    document.getElementById(btn).addEventListener("click", () => {
        desactivarBarra();
        desactivarMenu();
        activarUpper();
        inicio.classList.add("desactivado");
        document.querySelector(section).classList.toggle("active");
        const container = document.getElementById(cont);
        container.innerHTML = "";
        mostrarData(container, data[dataKey], "comida");
    });
});

// Botón Barra
btnBarra.addEventListener("click", () => {
    itemsBarra.classList.toggle("active");
    switchMenu();
});

// Interactividad con la Barra
const barraItems = [
    { btn: "btn-desayuno", sections: ["barra-clasicos-poo", "bloodys-poo", "cerveza-poo", "tintos-poo", "blancos-poo", "rosado-poo", "espumante-poo"], dataKeys: ["clasicos", "bloodys", "cervezas", "tintos", "blancos", "rosado", "espumante"], type: "botella", container: ctnDesayuno },
    { btn: "btn-cerveza", sections: ["barra-sabores-poo", "barra-sinalcohol-poo"], dataKeys: ["sabores", "sinalcohol"], type: "jarra", container: ctnCerveza }
];

barraItems.forEach(({ btn, sections, dataKeys, type, container }) => {
    document.getElementById(btn).addEventListener("click", () => {
        desactivarMenu();
        desactivarBarra();
        activarUpper();
        inicio.classList.add("desactivado");
        container.classList.toggle("active");
        sections.forEach((sec, idx) => {
            const el = document.getElementById(sec);
            el.innerHTML = "";
            mostrarData(el, data[dataKeys[idx]], type);
        });
    });
});

// Mostrar Datos
function mostrarData(ctn, param, tipo) {
    param.forEach(product => {
        const precio = typeof product.precio === 'object'
            ? Object.entries(product.precio).map(([key, value]) => `<h3 class="precio">${key.charAt(0).toUpperCase() + key.slice(1)}: $<b>${value}</b></h3>`).join('')
            : `<h3 class="precio">$<b>${product.precio}</b></h3>`;

        ctn.innerHTML += `
            <div class="ctn-barra-item">
                <div class="ctn-barra-item_titulo">
                    <h2 class="nombre"><b>${product.nombre}</b></h2><br>
                    <p class="descrip">${product.desc}</p><br>
                </div>
                <div class="ctn-barra-item_precio">${precio}</div>
            </div>
        `;
    });
}
