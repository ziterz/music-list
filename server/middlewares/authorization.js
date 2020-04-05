const models = require('../models')

const authorization = (req, res, next) => {
    models.Music.findOne({ where: { id: req.params.id } })
        .then(result => {
            if (result) {
                if (req.loggedUserId == result.UserId) {
                    return next()
                } else {
                    return next({
                        name: 'Unauthorized',
                        errors: [{ message: 'User is unauthorized' }]
                    })
                }

            } else {
                return next({
                    name: 'NotFound',
                    errors: [{ message: 'User not found' }]
                })
            }
        })
        .catch(err => {
            return next(err)
        })
}

module.exports = authorization