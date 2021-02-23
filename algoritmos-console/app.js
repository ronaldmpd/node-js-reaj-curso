// importar el archivo yargs.js
const argv = require("./config/yargs").argv;
const colors = require("colors");

const { pitagoras, milla_to_km, numero_par_o_impar, es_numero_primo, factorial } = require("./algoritmos/algoritmos");

let command = argv._[0];
switch (command) {
  case "pitagoras":
    pitagoras(argv.cateto_a, argv.cateto_b);
    break;
  case "milla_to_km": {
    milla_to_km(argv.milla);
    break;
  }
  case "numero_par_o_impar": {
    numero_par_o_impar(argv.numero);
    break;
  }
  case "es_numero_primo": {
    es_numero_primo(argv.numero);
    break;
  }
  case "factorial": {
    factorial(argv.numero);
    break;
  }
  default:
    console.log("no se encuentra el comando");
}
