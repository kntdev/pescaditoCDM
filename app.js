
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
    desactivarBarra();
    desactivarMenu();
    ctnMenuDia.classList.toggle("active");
    
});
btnVaPlomo.addEventListener("click",()=>{
    desactivarBarra();
    desactivarMenu();
    ctnPescado.classList.toggle("active");
});
btnCardumen.addEventListener("click",()=>{
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

let ctnDesayuno = document.querySelector(".container_desayuno"); 
let ctnCerveza = document.querySelector(".container_cerveza");

function desactivarBarra(){ 
    ctnDesayuno.classList.remove("active");
    ctnCerveza.classList.remove("active");
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
        <h2 class="nombre"><b>${nombre}</b></h2><br>
        <p class="descrip">${descripcion}</p><br>
        <h3 class="precio">$<b>${precio}</b></h3><br>
        `
    } 
};

// Id de los divs para vincular y imprimir los platos
const ctnPiquePoo = document.getElementById("menu-dia-poo");
// new producto de platos de Hay pique!
const empanada_de_langostino = new producto("EMPANADA DE LANGOSTINO","Empanada frita de langostinos con muzzarella",350);
const empanada_de_vigilia = new producto("EMPANADA DE VIGILIA","Empanada frita de brótola ahumada y muzzarella",350);
const empanada_de_jibia = new producto("EMPANADA DE JIBIA","Empanada frita de calamar rojo con muzzarella",400);
const papas_con_alioli = new producto("PAPAS CON ALIOLI","Papas doble cocción con salsa alioli de la casa",520);
const plato_de_cornalitos = new producto("PLATO DE CORNALITOS","Fritos, con dip de kétchup y limón",730);
const mitad_rabas = new producto("½ RABAS",`½ Rabas a la "Pescadito"`,790);
const rabas = new producto("RABAS",`Rabas a la "Pescadito"`,1580);
const tartar_de_salmon = new producto("TARTAR DE SALMON","Salmón, palta y batata con salsa teriyaki",1480);

// Información de cada plato
const platoPique1 = empanada_de_langostino.info;
const platoPique2 = empanada_de_vigilia.info;
const platoPique3 = empanada_de_jibia.info;
const platoPique4 = papas_con_alioli.info;
const platoPique5 = plato_de_cornalitos.info;
const platoPique6 = mitad_rabas.info;
const platoPique7 = rabas.info;
const platoPique8 = tartar_de_salmon.info;

//Lista de platos Hay pique!
const menuDelPique = [platoPique1,platoPique2,platoPique3,platoPique4,platoPique5,platoPique6,platoPique7,platoPique8]

//Imprimir el plato Hay pique!
ctnPiquePoo.innerHTML = menuDelPique;

////////////////////////////////////////////////////

// Contenedor poo de Va plomo
const ctnPlomoPoo = document.getElementById("menu-pescado-poo");
// Productos de Va plomo
const poboy_originario_de_luisiana = new producto("POBOY ORIGINARIO DE LUISIANA","Sándwich de langostinos acompañado con papas",1330);
const bocata_de_calamar = new producto("BOCATA DE CALAMAR","Sándwich en pan ciabatta con calamares fritos con pico de gallo y salsa tártara, acompañado con papas",1320);
const fish_burger = new producto("FISH BURGER","Pesca apanada frita, cebollas caramelizadas, tomates confitados y salsa mil islas, acompañado con papas",1280);
const hot_fish = new producto("HOT FISH","Salchicha parrillera (receta propia, pesca blanca, calamar y langostino) acompañado de papas y virutas de batata",1120);
const ceviche_version_pescadito = new producto("CEVICHE VERSION PESCADITO","Pesca del día, leche de tigre y maíz tostado",1680);
const fish_and_chips = new producto("FISH AND CHIPS","Filet de merluza, tempura de miel y cerveza, acompañado con papas",1220);
const arroz_con_calamares = new producto("ARROZ CON CALAMARES","Arroz con pimenton ahumado, bolognesa de calamares y cebolla crispy",1180);
const ragout_de_hongos = new producto("RAGOUT DE HONGOS","Estofado de shitake, champigñones y portobellos con base de arroz graneado",1190);
const guiso_de_lentejas = new producto("GUISO DE LENTEJAS","Tradicional guizado con pesca frita",960);
const guiso_de_lentejas_veggie = new producto("GUISO DE LENTEJAS (Veggie)","Tradicional guizado",860);
const mila_napo_de_bodegon = new producto("MILA NAPO DE BODEGON","Merluza apanada en panko, tuco de tomate, muzzarella y papas fritas",1880);
const papillot_con_pesca_del_dia = new producto("PAPILLOT CON PESCA DEL DÍA","Abadejo fresco, vegetales y alcaparras horneados en sus propios jugos",1870);
const pesca_del_dia = new producto("PESCA DEL DIA","Al horno con ensalada y papas (stock limitado)",2480);
// Objetos de plomo transformados
const platoPlomo1 = poboy_originario_de_luisiana.info;
const platoPlomo2 = bocata_de_calamar.info;
const platoPlomo3 = fish_burger.info;
const platoPlomo4 = hot_fish.info;
const platoPlomo5 = ceviche_version_pescadito.info;
const platoPlomo6 = fish_and_chips.info;
const platoPlomo7 = arroz_con_calamares.info;
const platoPlomo8 = ragout_de_hongos.info;
const platoPlomo9 = guiso_de_lentejas.info;
const platoPlomo10 = guiso_de_lentejas_veggie.info;
const platoPlomo11 = mila_napo_de_bodegon.info;
const platoPlomo12 = papillot_con_pesca_del_dia.info;
const platoPlomo13 = pesca_del_dia.info;
//Menu de Plomo
const menuDePlomo = [platoPlomo1,platoPlomo2,platoPlomo3,platoPlomo4,platoPlomo5,platoPlomo6,platoPlomo7,platoPlomo8,platoPlomo9,platoPlomo10,platoPlomo11,platoPlomo12,platoPlomo13];
//Imprimir plomo en contenedor
ctnPlomoPoo.innerHTML = menuDePlomo;
/////////////////////////////////////////////
// Container POO para Cardumen
const ctnCardumenPoo = document.getElementById("menu-cardumen-poo");
// Productos de Cardumen
const tabla_de_mar = new producto("TABLA DE MAR","Cornalitos, merluza, mejillones, rabas, papas fritas, coleslaw y alioli",2620);
const trio_de_mar = new producto("TRIO DE MAR","Ceviche, arroz con calamares y chicharrón de pescado y mejillones",2220);
// Convertir productos de Cardumen
const platoCardumen1 = tabla_de_mar.info;
const platoCardumen2 = trio_de_mar.info;
//Menu de cardumen
const menuCardumen = [platoCardumen1,platoCardumen2];
// Imprimir en contenedor POO el menu de Cardumen
ctnCardumenPoo.innerHTML = menuCardumen;
/////////////////////////////////////////////////////////////
// Container de Leven anclas
const ctnAnclasPoo = document.getElementById("menu-anclas-poo");
// Productos de Leven anclas
const postre_de_dulce_de_leche = new producto("POSTRE DE DULCE DE LECHE","Postre de dulce de leche, caramelo y crema",480);
const manzana_al_horno = new producto("MANZANA AL HORNO","Horneada con almíbar tinto, crema pastelera y garrapiñada de maní",480);
const mousse_de_dos_chocolates = new producto("MOUSSE DE DOS CHOCOLATES","Chocolate amargo y chocolate de leche con boniato en almíbar",480);
const torta_de_queso = new producto("TORTA DE QUESO","Acompañado con dulce de estación",480);
// Convertir productos de Leven anclas
const platoAnclas1 = postre_de_dulce_de_leche.info;
const platoAnclas2 = manzana_al_horno.info;
const platoAnclas3 = mousse_de_dos_chocolates.info;
const platoAnclas4 = torta_de_queso.info;
// Menu de Leven anclas
const menuAnclas = [platoAnclas1,platoAnclas2,platoAnclas3,platoAnclas4];
// Imprimir en el contenedor POO el menu de Anclas
ctnAnclasPoo.innerHTML = menuAnclas;


// const  = new producto("")