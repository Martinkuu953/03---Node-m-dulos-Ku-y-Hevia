import fs from 'fs';
function leerproducto(){
const contenidoBuffer = fs.readFileSync('./productos.json', 'utf-8');
        const listaProductos = JSON.parse(contenidoBuffer);
        listaProductos.forEach((producto, index) => {
            console.log(`${index + 1} ${producto.nombre} Precio: $${producto.precio}`);
        });
    }
   
    leerproducto();