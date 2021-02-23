const colors = require('colors');

let pitagoras = ( a, b ) => {
    console.log("===========================".green);
    console.log(`==== Pitagoras`.green);
    console.log(`==== Cateto a= ${a} Cateto b= ${b} ====`.green);    
    let h = (Math.hypot(a, b));
    console.log(`==== La hipotenusa es: ${h} ====`.green);
    console.log("===========================".yellow);
};

let milla_to_km = (milla) => {
    let km = milla * 1609;
    console.log("===========================".green);    
    console.log(`==== Convertir millas a Kiolometros milla: ${milla} : Km: ${km} `.green);    
    console.log("===========================".yellow);
};

let numero_par_o_impar = (numero) => {
    let response = "Impar";
    if(numero % 2 == 0)
        response = "Par";
    console.log("===========================".green);    
    console.log(`==== El numero: ${numero} , es: ${response} `.green);    
    console.log("===========================".yellow);
};

let es_numero_primo = (n) => {
    let response = "Primo";
    for(let i=2; i < n; i++){
        if(n % i == 0)
        {
            response = "No es Primo";
            break;
        }
    }
    console.log("===========================".green);    
    console.log(`==== El numero: ${n} , es: ${response} `.green);    
    console.log("===========================".yellow);  
};

let factorial = (n) => {
    var response = 1;
    for (var i = 2; i <= n; i++)
        response = response * i;

    console.log("===========================".green);    
    console.log(`==== El factorial del numero: ${n} , es: ${response} `.green);    
    console.log("===========================".yellow);        
};

module.exports = {
    pitagoras, milla_to_km, numero_par_o_impar, es_numero_primo, factorial
  };
  