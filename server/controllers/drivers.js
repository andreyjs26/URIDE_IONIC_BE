const Driver = require('../models').Driver;
const Car = require('../models').Car;

//include encrpyption controller
let encryption = require('./encryption');

module.exports = {
    create(req, res) {
        if(!req.body.password)
            res.status(400).send('Password is a required field');
        //send password to be encrypted and return the passwrod , save that one
        encryption.cryptPassword(req.body.password,function(err,cryptoPassword){
            return Driver
                .create({
                    name: req.body.name,
                    lname: req.body.lname,
                    phone: req.body.phone,
                    from: req.body.from,
                    to: req.body.to,
                    entrance: req.body.entrance,
                    exit: req.body.exit,
                    roundTrip: req.body.roundTrip,
                    email: req.body.email,
                    password: cryptoPassword,
                    CarId: req.body.CarId

                })
                .then(driver => res.status(201).send(driver))
                .catch(error => res.status(400).send(error));
        });
    },
    list(req, res) {
        return Driver
            .findAll({include: [ {model: Car}]})
            .then(drivers => res.status(200).send(drivers))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Driver
            .findById(req.params.id,{include: [ {model: Car}]})
            .then(driver => {
                if (!driver) {
                    return res.status(404).send({
                        message: 'Driver Not Found',
                    });
                }
                return res.status(200).send(driver);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Driver
            .findById(req.params.id, {
                /*include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],*/
            })
            .then(driver => {
                if (!driver) {
                    return res.status(404).send({
                        message: 'Driver Not Found',
                    });
                }
                return driver
                    .update({
                        name: req.body.name || driver.name,
                        lname: req.body.lname || driver.lname,
                        phone: req.body.phone || driver.phone,
                        from: req.body.from || driver.from,
                        to: req.body.to || driver.to,
                        entrance: req.body.entrance || driver.entrance,
                        exit: req.body.exit || driver.exit,
                        roundTrip: req.body.roundTrip || driver.roundTrip,
                        email: req.body.email || driver.email,
                        password: req.body.password || driver.password,
                        carId: req.body.carId || driver.carId
                    })
                    .then(() => res.status(200).send(driver)) // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Driver
            .findById(req.params.id)
            .then(driver => {
                if (!driver) {
                    return res.status(400).send({
                        message: 'Driver Not Found',
                    });
                }
                return driver
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Driver deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};
