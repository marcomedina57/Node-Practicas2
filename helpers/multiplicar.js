const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, l, h) => {

   

        console.log('============'.green);
        console.log(`Tabla del `, colors.blue(base));
        console.log('============'.green);
    
        let salida, consola = '';
        
        for(let i = 1; i <= h; i++){
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            
    
        fs.writeFileSync('salida/tabla-5.txt', salida, (err) => {
            if (err) throw err;
        });
        
    }
    if(l) return consola;
    return `tabla ${base}`;
}

module.exports = {
    crearArchivo
}