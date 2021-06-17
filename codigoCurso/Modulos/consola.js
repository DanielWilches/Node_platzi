console.log('Modulo de consola');
console.info('console  info');
console.error('console error')
// crea una tabla  con los arrays 
console.warn('alerta  de posible erros')

let tabla = [
    {
        nombre: 'daniel',
        apellido:'prieto'
    },
    {
        nombre: 'daniel',
        apellido: 'prieto'
    }
];
console.table(tabla)

// el console   group agrupa de diferentes logs  y genera una identaclion dentro dela consola
console.group('coversacion');
console.log('bla bla bla')
console.log('bla bla bla')
console.log('bla bla bla')
console.group('coversacion2');
console.log('bla bla bla')
console.log('bla bla bla')
console.log('bla bla bla')
console.groupEnd('coversacion2');
console.log('bla bla bla')
console.log('bla bla bla')
console.log('bla bla bla')
console.groupEnd('conversacion ')


