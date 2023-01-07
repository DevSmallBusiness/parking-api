"use strict";
const { Router } = require("express");
const router = Router();
const { registerVehicle, getAllVehicles, editVehicleById, deleteVehicleById } = require("../usecase/vehicleUsecase");
const {
	getAllHistoryChanges,
	saveHistoryChange,
	getHistoryChangeById,
	deleteHistoryChangeById,
	deleteAllHistoryChanges,
} = require("../usecase/historyUsecase");

//Services Vehicles
router.get("/vehicles", getAllVehicles);

router.post("/vehicles", registerVehicle);

router.put("/vehicles/:id", editVehicleById);

router.delete("/vehicles/:id", deleteVehicleById);

//Services HistoryChanges
router.get("/history", getAllHistoryChanges);

router.post("/history", saveHistoryChange);

router.get("/history/:id", getHistoryChangeById);

router.delete("/history/:id", deleteHistoryChangeById);

router.delete("/history", deleteAllHistoryChanges);

module.exports = router;
