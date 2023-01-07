const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const History = Schema({
    id: {
        type: String,
        required: true   
    },
    typeService: {
        type: String,
        required: true
    },
    typeVehicle: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerNumber: {
        type: String,
        required: true
    },
    entryDate: {
        type: String,
        required: true
    },
    departureDate: {
        type: String,
        required: true
    },
    receivableValue: {
        type: String,
        required: true
    },
    moneyPaid: {
        type: String,
        required: true
    },
    remainigMoney: {
        type: String,
        required: true
    },
    serviceState: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('History', History)