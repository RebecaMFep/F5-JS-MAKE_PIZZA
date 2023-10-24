let masa = "masa precocida" ;
let salsa = "salsa de tomate";
let queso= 200;
let bacon = "bacon";
let carne = "carne picada";

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
    console.log("Añadir la salsa de tomate encima de la base");
    console.log("Añadir", queso, "grs de queso");
    console.log("Añadir", carne, "previamente cocinada");
    console.log("añadir el", bacon, "a la pizza")
}
