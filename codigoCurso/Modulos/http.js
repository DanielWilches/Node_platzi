const http = require('http');


let router = (request, response) => {
    console.group('nueva peticion');
    console.log(`aqui esta su peticion ${request.url}`)
        switch (request.url) {
            case '/hola':
                response.write('hola, que tal perro');
                response.end();
                break;
            
            default:
                response.write('errores 404: no se lo que quieres')
                response.end()
                break;
        }
};

http.createServer(
    router
).listen(3000);

console.log('Escuchando en el puerto 3000')

