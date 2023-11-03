const { check, validationResult } = require("express-validator");

const UserRegisterValidation = () => {
    return [
        check("name").exists().notEmpty().isLength({ min: 1, max: 100 }),
        check("age").exists().notEmpty().isLength({ min: 1, max: 3 })
        /*(req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (err) {
                res.status(400);
                res.send({ errors: err.array() });
            }
        }*/
    ];
}
module.exports = { UserRegisterValidation };