const Passenger = require('../models').Passenger;

module.exports = {
    create(req, res) {
        return Passenger
            .create({
                name: req.body.name,
                lname: req.body.lname,
                phone: req.body.phone,
                from: req.body.from,
                to: req.body.to,
                entrance: req.body.entrance,
                exit: req.body.exit,
                roundTrip: req.body.roundTrip,
                discapacity: req.body.discapacity,
                email: req.body.email,
                password: req.body.password
            })
            .then(passenger => res.status(201).send(passenger))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Passenger
            .all()
            .then(passengers => res.status(200).send(passengers))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Passenger
            .findById(req.params.id, {
                /*include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],*/
            })
            .then(passenger => {
                if (!passenger) {
                    return res.status(404).send({
                        message: 'Passenger Not Found',
                    });
                }
                return res.status(200).send(passenger);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Passenger
            .findById(req.params.id, {
                /*include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],*/
            })
            .then(passenger => {
                if (!passenger) {
                    return res.status(404).send({
                        message: 'Passenger Not Found',
                    });
                }
                return passenger
                    .update({
                        name: req.body.name || passenger.name,
                        lname: req.body.lname || passenger.lname,
                        phone: req.body.phone || passenger.phone,
                        from: req.body.from || passenger.from,
                        to: req.body.to || passenger.to,
                        entrance: req.body.entrance || passenger.entrance,
                        exit: req.body.exit || passenger.exit,
                        roundTrip: req.body.roundTrip || passenger.roundTrip,
                        discapacity: req.body.discapacity || passenger.discapacity,
                        email: req.body.email || passenger.email,
                        password: req.body.password || passenger.password
                    })
                    .then(() => res.status(200).send(passenger)) // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Passenger
            .findById(req.params.id)
            .then(passenger => {
                if (!passenger) {
                    return res.status(400).send({
                        message: 'Passenger Not Found',
                    });
                }
                return passenger
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Passenger deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};
