const jwt = require('jsonwebtoken');
// require('dotenv').config()

function genToken(payload) {
    const token = jwt.sign(payload , process.env.SECRET);
    return token
}

function decodeToken(token){
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded
}

module.exports = {
    genToken,
    decodeToken
}