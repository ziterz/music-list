const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = function(req, res, next) {
    console.log('masuk authentication')
    let Access_Token = req.headers.access_token
    console.log(Access_Token)
    let Authentication = jwt.verify(Access_Token, process.env.SECRET)
    console.log(Authentication)

    User.findOne({
        where: {
            email: Authentication.email
        }
    })
        .then(function(result) {
            req.Authenticated = result
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