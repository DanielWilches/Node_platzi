console.log('hola mundo');
let count = 0;
setInterval(() => {
    console.log(`sigo activo ${count}`);
    count++;
/*     if (count === 5) {
        console.log('forzar error ');
        var a = 3 + z;
    } */
}, 1000);
console.log('segunda instruccion');