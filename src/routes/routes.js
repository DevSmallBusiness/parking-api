const { Router } = require('express')
const router = Router();
'use strict'

const fs = require('fs')

router.get('/getVehicles', (req, res) => {
    let data = fs.readFileSync('./src/assets/vehicles.json');

    let vehicles = JSON.parse(data)

    res.json(vehicles)
})

router.post('/registerVehicle', (req, res) => {

    let data = fs.readFileSync('./src/assets/vehicles.json');
    let vehicles = JSON.parse(data)
    vehicles.push(req.body)
    let request = JSON.stringify(vehicles)

    fs.writeFileSync('./src/assets/vehicles.json', request)

    res.json(vehicles)
})

router.put('/editVehicle/:vehicleId', (req, res) => {

    let data = fs.readFileSync('./src/assets/vehicles.json');
    let vehicles = JSON.parse(data)

    vehicles = vehicles.filter(vehicle => vehicle.id != req.params.vehicleId);
    vehicles.push(req.body)

    res.json(vehicles)

})

module.exports = router;