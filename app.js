let ingredientes = [
"masa precocida",
"salsa de tomate",
"200 grs de queso",
"bacon",
"carne picada"
] 

function app(){
    makepizza();

}
app();

function makepizza(){
    prepararMasa();
    añadirIngredientes();

    console.log("meter al horno 15 minutos");
    console.log("sacar la pizza ya preparada y lista para comer");
}

function prepararMasa(){
    console.log("Sacar la masa de su paquete");
    console.log("Estirar la masa en una bandeja");
}

function añadirIngredientes(){
    for(let i=0; i < ingredientes.length; i++){
        console.log("Añadir", ingredientes[i])
    }
}


