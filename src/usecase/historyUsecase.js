const exp = require("constants");
const fs = require("fs");
const MESSAGE_ERROR_EXIST = "This vehicle exist!!";
const MESSAGE_ERROR_NOT_EXIST = "This vehicle not exist!!";
var History = require("../models/vehicle");

async function getAllHistoryChanges(req, res) {
	let data = fs.readFileSync("./src/assets/history.json");

	let history = JSON.parse(data);

	res.json(history);
}

async function saveHistoryChange(req, res) {
	History = req.body;
	let historyChanges = [];

	let data = fs.readFileSync("./src/assets/history.json");
	historyChanges = [...JSON.parse(data)];
	let exist = historyChanges.find((historyChange) => historyChange.id == History.id);
	if (exist) {
		res.json(MESSAGE_ERROR_EXIST);
		return;
	}
	historyChanges.push(History);
	let request = JSON.stringify(historyChanges);

	fs.writeFileSync("./src/assets/history.json", request);

	res.json(historyChanges);
}

async function getHistoryChangeById(req, res) {
	let id = req.params.id;
	let historyChanges = [];

	let data = fs.readFileSync("./src/assets/history.json");

	historyChanges = [...JSON.parse(data)];
	let historyChange = historyChanges.find((history) => history.id == id);

	if (historyChange) {
		res.json(historyChange);
		return;
	}
	res.json(MESSAGE_ERROR_NOT_EXIST);
}

async function deleteHistoryChangeById(req, res) {
	let historyChanges = [];
	let id = req.params.id;

	let data = fs.readFileSync("./src/assets/history.json");
	historyChanges = [...JSON.parse(data)];

	let historyChange = historyChanges.find((history) => history.id == id);
	if (!historyChange) {
		res.json(MESSAGE_ERROR_NOT_EXIST);
		return;
	}
	historyChanges = historyChanges.filter((history) => history.id != id);
	let request = JSON.stringify(historyChanges);

	fs.writeFileSync("./src/assets/history.json", request);

	res.json("History change delete success!!");
}

async function deleteAllHistoryChanges(req, res) {
	let historyChanges = [];

	let data = fs.readFileSync("./src/assets/history.json");
	historyChanges = [...JSON.parse(data)];

	historyChanges = historyChanges.filter((history) => history.id == "");
	let request = JSON.stringify(historyChanges);

	fs.writeFileSync("./src/assets/history.json", request);

	res.json("All history changes delete success!!");
}

module.exports = {
	getAllHistoryChanges,
	saveHistoryChange,
	getHistoryChangeById,
	deleteHistoryChangeById,
	deleteAllHistoryChanges,
};
