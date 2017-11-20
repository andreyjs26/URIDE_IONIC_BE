const Driver = require('../models').Driver;
const Passenger = require('../models').Passenger;
const Car = require('../models').Car;

let Encryption = require('./encryption');

var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens


module.exports = {
    login(req,res){
        if(req.body.type === 'driver'){
            return Driver
                .findAll({
                    include: [ {model: Car}],
                    where: {
                        email: req.body.email,
                        //password: req.body.password
                    }
                })
                .then(driver => {
                    if (!driver) {
                        return res.status(404).send({
                            message: 'Incorrect email',
                        });
                    }
                    let currentPassword = driver[0].dataValues.password;
                    //compate the password from the login and the stored in the DB
                    Encryption.comparePassword(req.body.password,currentPassword,function(err,result){
                        if (result == true){
                            //for creating the token I'm using the currentPassword as payload, and a var as privateKey
                            var privateKey = req.app.get('superSecret');
                            var token = jwt.sign({password: currentPassword}, privateKey, {
                                expiresIn: '1d' // expires in 24 hours
                            });
                            driver[0].dataValues.token = token;
                            return res.status(200).send(driver) ;
                        }
                        else
                            return res.status(404).send({
                                message: 'Incorrect password',
                            });
                    });


                })
                .catch(error => res.status(400).send(error));

        }else{
            if(req.body.type === 'passenger'){

                return Passenger
                    .findAll({
                        where: {
                            email: req.body.email,
                            password: req.body.password
                        }
                    })
                    .then(passenger => {
                        if (!passenger) {
                            return res.status(404).send({
                                message: 'Incorrect credentials',
                            });
                        }
                        return res.status(200).send(passenger);
                    })
                    .catch(error => res.status(400).send(error));

            }else{
                return res.status(404).send({
                    message: 'Incorrect Type parameter',
                });
            }
        }
    }
};
