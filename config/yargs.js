const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    describe:' es la base de la multiplicasion'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:' muestra la tabla por consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    describe:' en numero hasta en que se hara la tabla'
                })
                
                .check((argv,option)=>{
                    if(isNaN(argv.b)){
                        throw' el argumento debe ser un numero'
                    }
                    return true
                })
                .argv;

module.exports= argv;