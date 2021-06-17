
let saludo = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola, como estas ${nombre}`);
            resolve(nombre);
        }, 2000);
    });
};

let hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`bla bla bla ... ${nombre}`);
            console.log(`bla bla bla ... ${nombre}`)
            console.log(`bla bla bla ... ${nombre}`)
            console.log(`bla bla bla ... ${nombre}`)
            /* resolve(nombre); */
            reject('hubo en unerror en hablar');
        }, 500);
    });
}

let adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${nombre}`);
            resolve(nombre);
        }, 2000);
    });

}

// - - -  ejecucion de promesas
let nombre = 'daniel';
console.log('iniciando el proceso. . .')
saludo(nombre)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log(`terminado el proceso . . . `)
    })
    .catch((err) => {
        console.error(`proceso fallo . . .  ${err}`)
    })