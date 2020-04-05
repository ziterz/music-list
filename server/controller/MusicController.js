const models = require('../models')

class MusicController {
    static read(req, res, next) {
        models.Music.findAll({ where: { UserId: req.loggedUserId } })
            .then(result => {
                return res.status(200).json({
                    Music: result
                })
            })
            .catch(err => {
                return next(err)
            })
    }

    static create(req, res, next) {
        console.log(`masuk create`)
        models.Music.create({
                title: req.body.title,
                artist: req.body.artist,
                genre: req.body.genre,
                UserId: req.loggedUserId
            })
            .then(result => {
                return res.status(201).json({
                    message: `Successfully added new Music to your music list`,
                    Music: result
                })
            })
            .catch(err => {
                return next(err)
            })
    }

    static delete(req, res, next) {
        models.Music.destroy({ where: { id: req.params.id } })
            .then(result => {
                return res.status(201).json({
                    message: `Successfully deleted a music from your music list`
                })
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = MusicController