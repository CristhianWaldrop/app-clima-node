const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        ubicacion = await lugar.getLugarLatLng(direccion);
        temp = await clima.getClima(ubicacion.lat, ubicacion.lng);
        return `El clima de ${ ubicacion.direccion } es de: ${ temp }`;

    } catch (error) {
        return `No se pudo determinar el clima de: ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);