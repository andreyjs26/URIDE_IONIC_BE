const Driver = require('../models').Driver;

module.exports = {
    create(req, res) {
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
                password: req.body.password,
                carId: req.params.carId

            })
            .then(driver => res.status(201).send(driver))
            .catch(error => res.status(400).send(error));
    },
};
