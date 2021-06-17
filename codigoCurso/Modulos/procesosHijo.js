const { exec,spawn} = require('child_process');
// ejecuta comandos en la termina de nuestro sistema operativo
/* exec('node consola.js ', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);
console.group('procesos con spaw')
/* console.log(proceso); */
console.groupEnd('procesos con spaw')

proceso.stdout.on('data', function (dato) {
console.group('procesos con spaw')
    console.log(dato.toString())
console.groupEnd('procesos con spaw')
});
proceso.on('exit', function (info) {
    console.log(`el proceso termino ${info}`)
    console.log(proceso.killed)
})