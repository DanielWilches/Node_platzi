// callbackhell  en javascript

let saludo = (nombre, miCallback) => {
    setTimeout(function () {
        console.log(`Hola, como estas ${nombre}`);
        miCallback(nombre);
    }, 2000)
};

let hablar = (nombre, micallback) => {
    setTimeout(() => {
        console.log(`bla bla bla ... ${nombre}`)
        micallback();
    }, 500)
}
// funcion recursiva
let conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(nombre,() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}


let adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    },3000);
}

// - -
console.log('inicio del proceso...');
saludo('daniel', (nombre) => {
    conversacion(nombre, 300, () => {
        console.log('procesos terminado ...')
    });
});
/* saludo(`daniel`, (nombre) => {
    hablar(nombre, () => {
        hablar(nombre, () => {
            hablar(nombre, () => {
                adios(nombre, () => {
                    console.log(`terminar procesos`)
                });
            });
        });
    });
}); */
