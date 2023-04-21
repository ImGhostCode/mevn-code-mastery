const { jwt: { jwt_secret } } = require('../config/index')
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, jwt_secret, {
        expiresIn: "1h",
    });
};

module.exports = generateToken;