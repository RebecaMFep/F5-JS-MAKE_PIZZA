import promptSync from "prompt-sync"; 

import { makepizza } from "./modules/funciones.js"
 
function app(){
     const prompt = promptSync();
     const pizzaName = prompt ("and your pizza is pepperoni \n");
     console.log("1.-SI 2.-NO");
    
     if(pizzaName == 1){
         let result = makepizza(pizzaName);
     }

    // makepizza();
}
app(); 




