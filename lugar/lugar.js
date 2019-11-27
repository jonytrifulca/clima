const axios = require('axios');


const getLugarLatLong = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=46bd2f3744654005923f46a0197924d6&language=es&pretty=1`)

    if (respuesta.data.total_results === 0) {
        throw new Error(' No hay resultado para esa direccion: ', direccion);
    } else {

        let lat = respuesta.data.results[0].geometry.lat;
        let lng = respuesta.data.results[0].geometry.lng;
        let direccion = respuesta.data.results[0].formatted;
        return {
            direccion,
            lat,
            lng,
        }
    }
};

module.exports = {
    getLugarLatLong
};