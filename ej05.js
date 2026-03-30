import fs from 'fs';
function buscarProducto(nombre) {
    const contenidoBuffer = fs.readFileSync('./productos.json', 'utf-8');
        const listaProductos = JSON.parse(contenidoBuffer);
        listaProductos.forEach((producto, index) => {
            if (producto.nombre === nombre) {
                console.log("NombreProducto: " + producto.nombre);
            }
        }
    );
}
//S