
let contador = 1;

const intervalo = setInterval(() => {
    console.log(contador);

    if (contador === 10) {
        clearInterval(intervalo);
        setTimeout(() => {
            console.log("Fin del contador");
        }, 100); 
    }
    contador++;
}, 1000);