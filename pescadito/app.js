const app = {}
var miCallBack = async function(datos){
   try{
    await console.log(datos)
    app.productos=datos;
    var html = ""
    html+=`
    <h2>Hay pique!</h2>
    <h4>- Entradas -</h4>
    `
    datos.forEach(element => {
        const listapique = element.pique
        listapique.forEach(element =>{
            html += `
            <h2>${element.nombre}</h2>
            <h2>${element.descripcion}</h2>
            <h2>${element.precio}</h2>
            <br>
            `
            return html
        })      
    });
    document.getElementById("app-poo").innerHTML = html;
   } catch(e) {
    console.log(e)
   }
}
