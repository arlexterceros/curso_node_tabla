
const fs= require('fs');

const crearArchivo = async (base=5, l=false, hasta=10)=>{

    try{

    
        let salida='';
    
        for (let i=1; i<=hasta; i++){
            salida +=(`${base} x ${i} = ${i*base}\n`);
        }
        
        if(l){
            console.log ('--------------------------------\n','   se calculo la tabla de ',
            base,'\n--------------------------------');
            console.log(salida);
        }
   

        fs.writeFileSync(`./salida/tabla_x_${base}`,salida);
         return `tabla del ${base} creada`;
    

    }catch (err ){
        throw err

    }

 

      
}


module.exports={
    crearArchivo

}