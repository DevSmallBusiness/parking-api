const fs = require("fs");
const MESSAGE_ERROR_EXIST = "This vehicle exist!!";
const MESSAGE_ERROR_NOT_EXIST = "This vehicle not exist!!";
var Vehicle = require("../models/vehicle");

async function registerVehicle(req, res) {
	Vehicle = req.body;
	let vehicles = [];

	let data = fs.readFileSync("./src/assets/vehicles.json");
	vehicles = [...JSON.parse(data)];
	let exist = vehicles.find((vehicle) => vehicle.id == Vehicle.id);
	if (exist) {
		res.json(MESSAGE_ERROR_EXIST);
		return;
	}
	vehicles.push(Vehicle);
	let request = JSON.stringify(vehicles);

	fs.writeFileSync("./src/assets/vehicles.json", request);

	res.json(vehicles);
}

async function getAllVehicles(req, res) {
	let data = fs.readFileSync("./src/assets/vehicles.json");

	let vehicles = JSON.parse(data);

	res.json(vehicles);
}

async function editVehicleById(req, res) {
	let vehicles = [];
	let id = req.params.id;
	Vehicle = req.body;

	let data = fs.readFileSync("./src/assets/vehicles.json");
	vehicles = [...JSON.parse(data)];
	let vehicle = vehicles.find((vehicle) => vehicle.id == id);
	if (!vehicle) {
		res.json(MESSAGE_ERROR_NOT_EXIST);
		return;
	}
	vehicles = vehicles.filter((vehicle) => vehicle.id != id);
	vehicles.push(Vehicle);
	let request = JSON.stringify(vehicles);

	fs.writeFileSync("./src/assets/vehicles.json", request);

	res.json(vehicles);
}

async function deleteVehicleById(req, res) {
	let vehicles = [];
	let id = req.params.id;

	let data = fs.readFileSync("./src/assets/vehicles.json");
	vehicles = [...JSON.parse(data)];

	let vehicle = vehicles.find((vehicle) => vehicle.id == id);
	if (!vehicle) {
		res.json(MESSAGE_ERROR_NOT_EXIST);
		return;
	}
	vehicles = vehicles.filter((vehicle) => vehicle.id != id);
	let request = JSON.stringify(vehicles);

	fs.writeFileSync("./src/assets/vehicles.json", request);

	res.json("Vehicle delete success!!");
}

module.exports = {
	registerVehicle,
	getAllVehicles,
	editVehicleById,
	deleteVehicleById,
};
