// Explicacion  del modulo file system
const fs = require('fs');
// ejemplo de como leer un archivo en node
let leer = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    });
};
// ejemplo de como escribir un archivo en node
let escribir = (ruta, contanido, cb) => {
    fs.writeFile(ruta, contanido, (err, data) => {
        if (err) {
            console.error(`No he podido escribirlo correctamente ${err}`)
        } else {
            console.log(`Se ha escrito correctamente`);
        }
    });
};

// ejemplo para  borrar en node 
let borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
};

/* borrar(`${__dirname}/archivo.txt`, console.log); */
/* leer(`${__dirname}/archivo1.txt`, console.log); */
/* escribir(`${__dirname}/archivo1.txt`, `soy un archivo nuevo`, console.log); */