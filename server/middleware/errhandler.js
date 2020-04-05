module.exports = function(err, req, res, next) {
    let msg
    if(err.name) {
        switch (err.name) {
            case "":
                
                break;
        
            default:
                res.status(500).json(err)
                break;
        }
    }
    else {
        switch (err.msg) {
            case "Not Authorized":
                msg = {
                    message: "Not Authorized"
                }
                return res.status(400).json(msg)
                break;
            case 'Music Does Not Exist':
                msg= {
                    message: "Music Does Not Exist"
                }
                return res.status(400).json(message)
            case 'Not Authenticated':
                msg = {
                    message: "Not Authenticated"
                }
                return res.status(400).json(message)
            default:
                msg = {
                    message: "internal server error"
                }
                res.status(500).json(msg)
                break;
        }

    }
}