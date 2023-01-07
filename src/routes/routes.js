'use strict'
const { Router } = require('express')
const router = Router();
const { registerVehicle, getAllVehicles, editVehicleById, deleteVehicleById } = require('../usecase/vehicleUsecase')
const { getAllHistoryChanges, saveHistoryChange, getHistoryChangeById, deleteHistoryChangeById, deleteAllHistoryChanges } = require('../usecase/historyUsecase')

//Services Vehicles
router.get('/getAllVehicles', getAllVehicles)

router.post('/registerVehicle', registerVehicle)

router.put('/editVehicle/:vehicleId', editVehicleById)

router.delete('/deleteVehicle/:vehicleId', deleteVehicleById)

//Services HistoryChanges
router.get('/getAllHistoryChanges', getAllHistoryChanges)

router.post('/saveHistoryChange', saveHistoryChange)

router.get('/getHistoryChange/:historyId', getHistoryChangeById)

router.delete('/deleteHistoryChange/:historyId', deleteHistoryChangeById)

router.delete('/deleteAllHistoryChanges', deleteAllHistoryChanges)

module.exports = router;