const bcrypt = require('bcryptjs')
function decrypt(value, hash) {
    console.log(value, haseh)
    let decrypt = bcrypt.compareSync(value, hash)
    return decrypt
}

module.export = decrypt