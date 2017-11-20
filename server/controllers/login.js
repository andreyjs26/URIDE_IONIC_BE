const Driver = require('../models').Driver;
const Passenger = require('../models').Passenger;
const Car = require('../models').Car;

let Encryption = require('./encryption');


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
                            message: 'Incorrect credentials',
                        });
                    }
                    let currentPassword = driver[0].dataValues.password;
                    //compate the password from the login and the stored in the DB
                    Encryption.comparePassword(req.body.password,currentPassword,function(err,result){
                        if (result == true)
                            return res.status(200).send(driver) ;
                        else
                            return res.status(404).send({
                                message: 'Incorrect credentials',
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
