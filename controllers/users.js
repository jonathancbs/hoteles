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
const createUser = async (req, res) => {
    var errors = validationResult(req).array();
    if (errors) {
        res.status(400);
        res.send({ errors: err.array() });
    }
    else{
        const { body } = req;
        console.log(body);
        const data = await userModel.create(body)
        res.send({ data });
    }
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