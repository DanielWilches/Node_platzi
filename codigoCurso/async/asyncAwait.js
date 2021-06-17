let saludo = async(nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola, como estas ${nombre}`);
            resolve(nombre);
        }, 2000);
    });
};

let hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`bla bla bla ... ${nombre}`);
            console.log(`bla bla bla ... ${nombre}`)
            console.log(`bla bla bla ... ${nombre}`)
            console.log(`bla bla bla ... ${nombre}`)
            resolve(nombre);
            /* reject('hubo en unerror en hablar'); */
        }, 500);
    });
}

let adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${nombre}`);
            resolve(nombre);
        }, 2000);
    });
}

let main = async () => {
    let nombre = await saludo('daniel');
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
};
console.log('empieza el proceso ');
main();
console.log('fin proceso ')