// callbacks  en javascript
// un callback es la anidacion de una funcion dentro de otra funcion.
let saludo = (nombre, miCallback) => {
    setTimeout(function () {
        console.log(`Hola, como estas ${nombre}`);
        miCallback(nombre);
    }, 2000)
};

let adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    },3000);

}
console.log('inicio del proceso...');
saludo(`daniel`,(nombre) => {
    adios(nombre, () => {
        console.log(`terminar procesos`)
    })
    }
);
