const mongoose = require("mongoose");

const ReservaScheme = new mongoose.Schema(
    {
        llegada: {
            type: Date,
        },
        salida: {
            type: Date,
        },
        cliente: {
            type: String,
        },
        numeropersonas: {
            type: Number
        },
        numerohabitaciones: {
            type: Number
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
module.exports = mongoose.model("reserva", ReservaScheme);