const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2e5fd25f135c903896860759d0669059&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}