const { userModel } = require("../models");

/**
 * Obtener una lista
 * @param {*} requ 
 * @param {*} resp 
 */
const getUsers = async (requ, resp) => {
    const data = await userModel.find({});
    resp.send({ data });
}

/**
 * obtener un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const getUser = async (requ, resp) => {
    const data = await userModel.find({});
    resp.send({ data });
}

/**
 * Crea un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const createUser = async (requ, resp) => {
    const { body } = requ;
    console.log(body);
    const data = await userModel.create(body)
    resp.send({ data });
}
/**
 * Actualiza un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const updateUser = async (requ, resp) => {
    const data = await userModel.find({});
    resp.send({ data });
}

/**
 * elimina un usuario
 * @param {*} requ 
 * @param {*} resp 
 */
const deleteUser = (requ, resp) => { }

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };