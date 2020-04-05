const models = require('../models')
const { generateToken } = require('../helpers/jwt.js')

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body
        const newData = { email, password }
        return models.User.create(newData)
            .then(result => {
                let payload = {
                    id: result.id,
                    email: result.email
                }
                let token = generateToken(payload)
                return res.status(200).json({
                    id: payload.id,
                    email: payload.email,
                    token: token
                })
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = UserController