
const {crearArchivo}=require('./helpers/multiplicar');
const argv=require('./config/yargs');

               
console.clear();

crearArchivo(argv.base, argv.l, argv.hasta)
.then(nombreArchivo=>console.log(nombreArchivo,'creada'))
.catch(err=> cconsole.log(err));



