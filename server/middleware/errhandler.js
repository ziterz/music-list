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
            case "":
                
                break;
        
            default:
                msg = {
                    message: "internal server error"
                }
                res.status(500).json(msg)
                break;
        }

    }
}