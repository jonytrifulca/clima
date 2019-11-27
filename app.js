const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'direccion de la ciudad para obtenr el clima'
    }
}).argv;

const { getLugarLatLong } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima');



const getInfo = async(direccion) => {

    try {

        let coors = await getLugarLatLong(direccion);
        let temp = await getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp} ºC`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(respuesta => {
        console.log(respuesta)
    })
    .catch(error => {
        console.log(error);
    })

/*
getLugarLatLong(argv.direccion)
    .then(respuesta => {
        console.log(respuesta);

        getClima(respuesta.lat, respuesta.lng)
            .then(resp2 => {
                console.log(resp2);
            })

    })
    .catch(error => {
        console.log("error!!!");
    })
*/