const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Es el nombre de una ciudad',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar.js');

const temperatura = require('./lugar/clima.js');

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLon(direccion);
        const temp = await temperatura.getClima(coordenadas.lat, coordenadas.lon);
        return `El clima para ${direccion} es de °${temp}`

    } catch (e) {
        console.log(`No se pudo determinar el clima de ${direccion}`);
    }

}

getInfo(argv.direccion).then(console.log)
    .catch(console.log)


// lugar.getLugarLatLon(argv.direccion).then(resp => {
//     console.log(`Info.!! ${argv.direccion}: Latitud: ${resp.lat} Longitud: ${resp.lon}`)
// }).catch(err => {
//     console.log('Aiura')
// })

// temperatura.getClima(-34.610001, -58.369999).then(rep => {
//     console.log(`El clima para ${argv.direccion} es de °${rep}`);
// }).catch(err => {
//     console.log(err);
// })