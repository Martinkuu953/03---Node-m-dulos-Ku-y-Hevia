import axios from 'axios';

async function obtenerPais(nombrePais) {
        const url = `https://restcountries.com/v3.1/name/${nombrePais}`;
        const respuesta = await axios.get(url); 

        const pais = respuesta.data[0];

        console.log(`País: ${pais.name.common}`);
        console.log(`Capital: ${pais.capital}`);
        console.log(`Región: ${pais.region}`);
        console.log(`Población: ${pais.population}`);
}
obtenerPais("Argentina");