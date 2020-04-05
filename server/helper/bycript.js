const bcrypt = require('bcryptjs');

function encodePassword(password) {
    const salt = bcrypt.genSaltSync(100);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

function decodePassword(pass, hash) {
    return bcrypt.compareSync(pass, hash);
}

module.exports = {
    encodePassword,
    decodePassword
}