const { User } = require("../models")
const { compare } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")


class ControllerUser {
    static register(req,res,next){
        const obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        console.log(obj)
        User.create(obj)
        .then(data => {
            res.status(201).json({
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.password
            })
        })
        .catch(error => {
            next(error)
        })
    }

    static login(req,res,next){
        User.findOne({where: {email: req.body.email}})
        .then(data => {        
            if(data) {
                if(compare(req.body.password, data.password)){
                    const access_token = generateToken({id: data.id, email: data.email})
                    res.status(200).json( {access_token} )
                    
                } else {
                    throw{
                        status: 404,
                        message: 'email/password salah'
                    }
                }
            } else {
                throw{
                    status: 404,
                    message: 'email/password salah'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = ControllerUser