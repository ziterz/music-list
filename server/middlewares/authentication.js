const { decodeToken } = require('../helpers/jwt.js')
const models = require('../models')

const authentication = (req, res, next) => {
    try {
        let decode = decodeToken(req.headers.token)
        models.User.findOne({ where: { id: decode.id } })
            .then(result => {
                if (result) {
                    req.loggedUserId = result.id
                    return next()
                } else {
                    return next({
                        name: 'NotFound',
                        errors: [{ message: 'User Not Found' }]
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'Unauthenticated',
                    errors: [{ message: 'User is unauthenticated' }]
                })
            })
    } catch (err) {
        return next(err)
    }
}

module.exports = authentication