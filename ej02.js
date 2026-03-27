import fs from 'fs';
function agregarProducto(nombre, precio) {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));
    
    productos.push({ nombre, precio });

    const contenido = productos.map(p => `{"nombre":"${p.nombre}","precio":${p.precio}}`);
    
    fs.writeFileSync('./productos.json', `[${contenido}]`);
}

agregarProducto("Monitor", 120000);

console.log(JSON.parse(fs.readFileSync('./productos.json', 'utf-8')));
;
