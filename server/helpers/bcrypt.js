const bcrypt = require("bcryptjs")

const encryptPass = (password) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

const decryptPass = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = { encryptPass, decryptPass }