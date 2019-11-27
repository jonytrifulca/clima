//https://api.openweathermap.org/data/2.5/weather?lat=36.1922549&lon=-5.9202942&units=metric&appid=f6ee984ca2cef3a122bf911690431d04

const axios = require('axios');


const getClima = async(lat, long) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f6ee984ca2cef3a122bf911690431d04`)

    return respuesta.data.main.temp;
}


module.exports = {
    getClima
}