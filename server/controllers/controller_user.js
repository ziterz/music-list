const User = require('../models').User
const { genToken } = require('../helper/jwt.js')
const { decodePassword } = require('../helper/bycript')

class Controller{
    static signup(req, res){
        const {email, password} = req.body
        const payload = {
            email,
            password
        }
        console.log(payload);
        
        User.create(payload)
            .then(result=>{
                const user = {
                    id: result.id,
                    email: result.email
                }

                const token = genToken(payload)

                res.status(200).json({
                    id: user.id,
                    email: user.email,
                    token: token
                })
            })
            .catch(err=>{
                res.status(500).json({
                    type: 'InternalError',
                    msg: 'Internal Error',
                    data: err
                })
            })
    }

    static signin(req, res){
        const payload = {
            email : req.body.email,
            password: req.body.password
        }

        User.finOne({
            where:{
                email:payload.email
            }
        }) 
            .then(result=>{
                if(result){
                    let compare = decodePassword(payload.password, result.password)
                    if(compare){
                        const token = genToken(payload)
                        res.status(200).json({
                            id: result.id,
                            email: result.email,
                            token: token
                        })
                    }else{
                        res.status(400).json({
                            type: 'WrongEmail/Password',
                            msg: 'WrongEmail/Password'
                        })
                    }
                }else{
                    res.status(404).json({
                        type: 'DataNotFound',
                        msg: 'Data Not Found'
                    })
                }
            })
            .catch(err=>{
                res.status(200).json({
                    type: 'InternalError',
                    msg: 'Internal Error'
                })
            })
    }
}

module.exports = Controller