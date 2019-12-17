const axios = require('axios');

const lugar = require('../lugar/lugar')

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=d06982951e89259f89ae95b45b395f2c`);
    return resp.data.list[0].main.temp
}

module.exports = {
    getClima
}