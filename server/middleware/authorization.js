const {Music} = require('../models')

module.exports = function(req, res, next) {
    console.log('masuk authorization')
    console.log(req.params.id)
    Music.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function(result) {
            if(result !== null) {
                if(result.UserId = req.Authenticated.id) {
                    next()
                }
                else {
                    let err = {
                        msg: 'Not Authorized'
                    }
                    throw err
                }
            }
            else {
                let err = {
                    msg: 'Music Does Not Exist'
                }
                throw err
            }
        })
        .catch(function(err) {
            next(err)
        })
}