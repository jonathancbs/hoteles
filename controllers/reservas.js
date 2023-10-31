const {  reservaModel } = require("../models");

/**
 * Obtener una lista
 * @param {*} requ 
 * @param {*} resp 
 */
const getReservas = async (requ, resp) => {
    const data = await reservaModel.find({});
    resp.send({ data });
}

/**
 * obtener un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const getReserva = async (requ, resp) => {
    const data = await reservaModel.find({});
    resp.send({ data });
}

/**
 * Crea un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const createReservas = async (requ, resp) => {
    const { body } = requ;
    console.log(body);
    const data = await reservaModel.create(body)
    resp.send({ data });
}
/**
 * Actualiza un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const updateReservas = async (requ, resp) => {
    const data = await reservaModel.find({});
    resp.send({ data });
}

/**
 * elimina un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const deleteReservas = (requ, resp) => { }

module.exports = { getReservas, getReservas, createReservas, updateReservas, deleteReservas };