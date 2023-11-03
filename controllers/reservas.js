const {  reservaModel } = require("../models");

/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} res 
 */
const getReservas = async (req, res) => {
    const data = await reservaModel.find({});
    res.send({ data });
}

/**
 * obtener un usuario
 * @param {*} req 
 * @param {*} res 
 */
const getReserva = async (req, res)  => {
    const data = await reservaModel.find({});
    res.send({ data });
}

/**
 * Crea un usuario
 * @param {*} req 
 * @param {*} res 
 */
const createReservas = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await reservaModel.create(body)
    res.send({ data });
}
/**
 * Actualiza un usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateReservas = async (req, res) => {
    const data = await reservaModel.find({});
    res.send({ data });
}

/**
 * elimina un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteReservas = async (req, res) => { }

module.exports = { getReservas, getReservas, createReservas, updateReservas, deleteReservas };