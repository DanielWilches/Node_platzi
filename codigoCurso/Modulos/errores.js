// ejemplo de uso de try catch
let otraFuncion = () => {
    serompe()
};

function serompe() {
    return 3 + z;
};
try {
    console.log(' inicio de try');
    otraFuncion();
} catch (err)   {
    /* console.error(`vaya algo se a roto .... ${err}`); */
    console.log(err)
}