"use strict";

var os = require('os'); // Architecture


console.log('Architecture:');
console.log(os.arch());
console.log(''); // Platform

console.log('Platform:');
console.log(os.platform());
console.log(''); // cpus

console.log('cpus');
console.table(os.cpus());
console.log(''); // Errores y señales del sistema

console.log('Erros and signals of the system');
console.log(os.constants);
console.log(''); // Function to convert from bytes to kbytes, mbytes and gbytes

var SIZE = 1024;

kb = function kb(bytes) {
  return bytes / SIZE;
};

mb = function mb(bytes) {
  return kb(bytes) / SIZE;
};

gb = function gb(bytes) {
  return mb(bytes) / SIZE;
}; // Total Ram Memory


console.log('Total Ram Memory:');
console.log("".concat(os.totalmem(), " bytes"));
console.log("".concat(kb(os.totalmem), " kb"));
console.log("".concat(mb(os.totalmem), " mb"));
console.log("".concat(gb(os.totalmem), " gb"));
console.log(''); // Free memory we have in bytes units

console.log('Free memory we have in kbytes units');
console.log("free Ram memory: ".concat(os.freemem(), " bytes"));
console.log("free Ram memory: ".concat(kb(os.freemem()), " kb"));
console.log("free Ram memory: ".concat(mb(os.freemem()), " mb"));
console.log("free Ram memory: ".concat(gb(os.freemem()), " mb"));
console.log(''); // Directory for the user root

console.log('Directory for the user root');
console.log(os.homedir());
console.log(''); // Directory for temporal files

console.log('Directory for temporal files');
console.log(os.tmpdir());
console.log(''); // Hostname of a server

console.log('Hostname of any server');
console.log(os.hostname());
console.log(''); // Actived Network interfaces right now

console.log('Network Interfaces right now');
console.table(os.networkInterfaces().lo);
console.log('');