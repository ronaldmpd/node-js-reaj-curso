const options0 = {
    base: {
      alias: "b",
      describe: "numero base para la multiplicacion",
      demand: true,
    },
    limit: {
      alias: "l",
      describe: "Limite de elementos a mostrar",
      default: 10,
    },
  };

const options_pitagoras = {
    cateto_a: {
      alias: "a",
      describe: "cateto a",
      demand: true
    },
    cateto_b: {
      alias: "b",
      describe: "cateto b",
      demand: true
    }
  };

  const options_milla_to_km = {
    milla: {
      alias: "m",
      describe: "milla",
      demand: true
    }    
  };
  
  const options_numero_par_impar = {
    numero: {
      alias: "n",
      describe: "numero entero",
      demand: true
    }    
  };

  const options_es_numero_primo = {
    numero: {
      alias: "n",
      describe: "numero entero",
      demand: true
    }    
  };

  const options_factorial = {
    numero: {
      alias: "n",
      describe: "numero entero",
      demand: true
    }    
  };


  const argv = require("yargs")
    .command("pitagoras", "Pitagoras, calcular la hipotenusa de un triangulo rectangulo.", options_pitagoras)
    .command("milla_to_km", "Converti millas a Km", options_milla_to_km)
    .command("numero_par_o_impar", "Numero par o impar", options_numero_par_impar)
    .command("es_numero_primo", "Es numero primo", options_es_numero_primo)
    .command("factorial", "Calcular el factorial de numero", options_factorial)
    .help().argv;
  
  module.exports = {
    argv,
  };
  