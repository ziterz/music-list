const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = function(req, res, next) {
    let Access_Token = req.headers.Access_Token
    let Authentication = jwt.verify(Access_Token, process.env.SECRET)

    User.findOne({
        where: {
            email: Authentication.email
        }
    })
        .then(function(result) {
            if(result !== null) {
                console.log('authenticated')
                next()
            }
            else {
                let err = {
                    msg: 'Not Authenticated'
                }
                throw err
            }
        })
        .catch(function(err) {
            next(err)
        })
}