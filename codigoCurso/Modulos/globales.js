let i = 0;
let intervalo = setInterval(() => {
    console.log(`Hola por ${i} vez`);
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
},1000);