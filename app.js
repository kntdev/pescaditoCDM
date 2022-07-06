
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
        <h3 class="precio">$<b>${precio}</b></h3>
        <hr>
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
ctnPiquePoo.innerHTML = menuDelPique.join(" ");

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
ctnPlomoPoo.innerHTML = menuDePlomo.join(" ");
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
ctnCardumenPoo.innerHTML = menuCardumen.join(" ");
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
ctnAnclasPoo.innerHTML = menuAnclas.join(" ");

// const  = new producto("")

// Container de BARRA
//Productos sin descripcion con flex
class prodBarra {
    constructor(nombre,descripcion,precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.info = `
        <div style="display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;text-align: left;padding-bottom: 30px;">
        <div style="display: flex;flex-direction:column;">
        <h2 class="nombre_barra"><b>${nombre}</b></h2>
        <p class="descrip_barra">${descripcion}</p>
        </div>
        <h3 class="precio_barra">$<b>${precio}</b></h3>
        </div>
        `
    } 
};
//Container de Mar de Clasicos
//Parte 1
const ctnClasicoPoo = document.getElementById("barra-clasicos-poo");
const margarita = new prodBarra("MARGARITA","",650);
const daiquiri = new prodBarra("DAIQUIRI","",520);
const mojito = new prodBarra("MOJITO","",520);
const mint_julep = new prodBarra("MINT JULEP","",750);
const gimlet_southside = new prodBarra("GIMLET SOUTHSIDE","",580);
const dry_martini = new prodBarra("DRY MARTINI","",750);
const negroni = new prodBarra("NEGRONI","",580);
const gin_tonic = new prodBarra("GIN TONIC","",580);
const barraClasico = [margarita.info,daiquiri.info,mojito.info,mint_julep.info,gimlet_southside.info,dry_martini.info,negroni.info,gin_tonic.info];
ctnClasicoPoo.innerHTML = barraClasico.join(" ");
//Bloody con el hot jugo
const ctnBloodyPoo = document.getElementById("bloodys-poo");
const mary = new prodBarra("MARY","(vodka, pickle/aceituna)",740);
const red_snapper = new prodBarra("RED SNAPPER","(gin, pickle/aceituna)",710);
const michelada = new prodBarra("MICHELADA","(birra, tajín)",740);
const barraBloody = [mary.info,red_snapper.info,michelada.info];
ctnBloodyPoo.innerHTML = barraBloody.join(" ");
//Cerveza
const ctnCervezaPoo = document.getElementById("cerveza-poo");
const patagonia = new prodBarra("PATAGONIA LATA","(bohemian pilsener - amber larger - 24.7)",460);
const corona_porron = new prodBarra("CORONA PORRÓN","330cc",410);
const barraCerveza = [patagonia.info,corona_porron.info];
ctnCervezaPoo.innerHTML = barraCerveza.join(" ");
//Vinos
const ctnPiatelliVinoPoo = document.getElementById("piatelli-poo");
const ctnLagardeVinoPoo = document.getElementById("lagarde-poo");
const ctnLalalaVinoPoo = document.getElementById("lalala-poo");
const ctnMadbirdVinoPoo = document.getElementById("madbird-poo");
//Piatelli
const piatelli1 = new prodBarra("Piatelli Brut Nature","",3630);
const piatelli2 = new prodBarra("Piatelli reserva Malbec","",2900);
const piatelli3 = new prodBarra("Piatelli reserva Rosé","",2900);
const piatelli4 = new prodBarra("Alto molino Malbec","(Botella)",1800);
const piatelli5 = new prodBarra("Alto molino Malbec","(Copa 180ML)",450);
const piatelli6 = new prodBarra("Alto molino Torrentes","(Botella)",1800);
const piatelli7 = new prodBarra("Alto molino Torrentes","(Copa 180ML)",450);
const vinosPiatelli = [piatelli1.info,piatelli2.info,piatelli3.info,piatelli4.info,piatelli5.info,piatelli6.info,piatelli7.info];
ctnPiatelliVinoPoo.innerHTML = vinosPiatelli.join(" ");
//Lagarde
const lagarde1 = new prodBarra("Blend de tintas","",2520);
const lagarde2 = new prodBarra("Sauvignon Blanc","",2520);
const lagarde3 = new prodBarra("Viognier","",2520);
const lagarde4 = new prodBarra("Chardonnay","",2520);
const vinosLagarde = [lagarde1.info,lagarde2.info,lagarde3.info,lagarde4.info];
ctnLagardeVinoPoo.innerHTML=vinosLagarde.join(" ");
//Lalála
const lalala1 = new prodBarra("Rose tempranillo","(Botella)",2380);
const lalala2 = new prodBarra("Rose tempranillo","(Copa 180ML)",610);
const lalala3 = new prodBarra("Criollo tinto tempranillo","",2800);
const vinosLalala = [lalala1.info,lalala2.info,lalala3.info];
ctnLalalaVinoPoo.innerHTML = vinosLalala.join(" ");
//Madbird
const madbird1 = new prodBarra("Ancellota","(Botella)",1660);
const madbird2 = new prodBarra("Ancellota","(Copa 180ML)",415);
const madbird3 = new prodBarra("Sauvignon Blanc","(Botella)",1660);
const madbird4 = new prodBarra("Sauvignon Blanc","(Copa 180ML)",415);
const vinosMadbird = [madbird1.info,madbird2.info,madbird3.info,madbird4.info];
ctnMadbirdVinoPoo.innerHTML = vinosMadbird.join(" ");
//Mar de sabores
const ctnMarDeSabores = document.getElementById("barra-sabores-poo");
const ctnNoAlcohol = document.getElementById("barra-sinalcohol-poo");
//Productos de Mar de sabores
const prodsabores1 = new prodBarra("ISLA VICTORIA","Gin, vermú rosso, limón, cordíal de jamaica y frutos rojos",580);
const prodsabores2 = new prodBarra("TAMARINDO JULEP","Cynar 70, tamarindo, agua de rosas, menta, soda",520);
const prodsabores3 = new prodBarra("GUERITA","Tequila blanco, triple sec, ananá asada, cilantro y lima",590);
const prodsabores4 = new prodBarra("AGUITADEMAR","Whiskey escocés, limón, especias, sodazo y aceituna",630);
const prodsabores5 = new prodBarra("SAN ROMÁN FLIP","Ron blanco, falso lulo, lima y almibar picante",630);
const prodsabores6 = new prodBarra("MANGO #5","Ron blanco, mango, manzana, pepino y mambo",630);
const prodsabores7 = new prodBarra("TOMASITO COLLINS","Gin, limón, cilantro, agüita de tomate y sodazo",630);
const prodsabores8 = new prodBarra("NIKKEY COCKTAIL","Pisco quebranta, peras, huacatay, matcha y aquafaba",630);
const prodsabores9 = new prodBarra("OCUMARE","Ron blanco y dorado, coco especiado, ananá y apricot brandy",630);
const prodsabores10 = new prodBarra("SOL DEL PÁCIFICO","Pisco quebranta, almibar picante, naranja, limón y un atardecer",630);
const prodsabores11 = new prodBarra("MANGLAR","Vodka, pomelo, albahaca, ají cayena y tónica",590);

const barraMarDeSabores = [prodsabores1.info,prodsabores2.info,prodsabores3.info,prodsabores4.info,prodsabores5.info,prodsabores6.info,prodsabores7.info,prodsabores8.info,prodsabores9.info,prodsabores10.info,prodsabores11.info];
ctnMarDeSabores.innerHTML = barraMarDeSabores.join(" ");
//Sin Alcohol
const prodnoalcohol1 = new prodBarra("Tamarindo","Agia de tamarindo y limón (Jarra)",980);
const prodnoalcohol2 = new prodBarra("Tamarindo","Agia de tamarindo y limón (Copa)",290);
const prodnoalcohol3 = new prodBarra("BREEZE","Pomelo, jamaica y frutos rojos, soda (Jarra)",980);
const prodnoalcohol4 = new prodBarra("BREEZE","Pomelo, jamaica y frutos rojos, soda (Copa)",290);
const prodnoalcohol5 = new prodBarra("CANDELA","Naranja, cordial cítrico, canela y soda (Jarra)",980);
const prodnoalcohol6 = new prodBarra("CANDELA","Naranja, cordial cítrico, canela y soda (Copa)",290);

const barraNoAlcohol = [prodnoalcohol1.info,prodnoalcohol2.info,prodnoalcohol3.info,prodnoalcohol4.info,prodnoalcohol5.info,prodnoalcohol6.info];
ctnNoAlcohol.innerHTML = barraNoAlcohol.join(" ");
// const  = new prodBarra("");
