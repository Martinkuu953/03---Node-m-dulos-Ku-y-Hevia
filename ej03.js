import dayjs from 'dayjs';

function mostrarAhora() {
    const ahora = dayjs();

    //normal:
    console.log(ahora.toString());

    //formateada:
    console.log(ahora.format('YYYY-MM-DD HH:mm:ss'));
}