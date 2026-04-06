function analizarTexto(texto) {
    const caracteres = texto.length;
    const palabras = texto.trim().split(' ').length;
    const vocales = texto.match(/[aieou]/gi).length; //el g significa que no para en el primer carácter y el i hace que la búsqueda no le de importancia a las mayusculas o minúsculas
    const consonantes = texto.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    console.log("caracteres = " + caracteres + "\npalabras = " + palabras + "\nvocales = " + vocales + "\nconsonantes = " + consonantes);

}

analizarTexto("Hola como estas, Buenos Dias");