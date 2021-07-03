const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de multipicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que numero se desea generar tabla de multipicar'
    })
    .argv;

    module.exports = argv;