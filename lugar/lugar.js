const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': 'f290888511msh61e55498c11f98bp199004jsn7e6ea6614f52' }
    });

    const resp = await instance.get();

    let data = {}

    if (resp.data.Results === null) {

        data = {
            name: 'New York City, New York',
            lat: '40.750000',
            lon: '-74.000000'
        };

    } else if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    if (JSON.stringify(data) == '{}') {
        data = resp.data.Results[0];
    }

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}