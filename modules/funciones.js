import { nom_Pizza } from "./nombre_Pizza.js";


export function makepizza(){

    // console.log(nom_Pizza)
     prepararMasa();
     añadirIngredientes();

     console.log("meter al horno 15 minutos");
     console.log("sacar la pizza ya preparada y lista para comer");
}



 let ingredientes = [
     "masa precocida",
     "salsa de tomate",
     "200 grs de queso",
     "bacon",
     "carne picada"
     ] 



 function prepararMasa(){
     console.log("Sacar la masa de su paquete");
     console.log("Estirar la masa en una bandeja");
 }

 function añadirIngredientes(){
     for(let i=0; i < ingredientes.length; i++){
         console.log("Añadir", ingredientes[i])
     }
 } 