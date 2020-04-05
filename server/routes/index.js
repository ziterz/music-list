const routes = require('express').Router()
const UserController = require('../controller/usercontroller')
const Authentication = require('../middleware/authentication')
const Authorization = require('../middleware/authorization')

routes.get('/', function(req, res) {
    res.status(200).json({
        message: 'Home Domain Connected'
    })
})

routes.post('/register', UserController.Register)
routes.post('/login', UserController.Login)
routes.use(Authentication)
routes.get('/musics', UserController.GetMusic)
routes.post('/musics', UserController.AddMusic)
routes.delete('/musics/:id', Authorization, UserController.DeleteMusic)


module.exports = routes