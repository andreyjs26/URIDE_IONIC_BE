const Car = require('../models').Car;

module.exports = {
    create(req, res) {
        return Car
            .create({
                brand: req.body.brand,
                type: req.body.type,
                model: req.body.model,
                color: req.body.color,
                license: req.body.license,
                riteve: req.body.riteve,
                capacity: req.body.capacity
            })
            .then(car => res.status(201).send(car))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Car
            .all()
            .then(cars => res.status(200).send(cars))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Car
            .findById(req.params.id, {
                /*include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],*/
            })
            .then(car => {
                if (!car) {
                    return res.status(404).send({
                        message: 'Car Not Found',
                    });
                }
                return res.status(200).send(car);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Car
            .findById(req.params.id, {
                /*include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],*/
            })
            .then(car => {
                if (!car) {
                    return res.status(404).send({
                        message: 'Car Not Found',
                    });
                }
                return car
                    .update({
                        brand: req.body.brand || car.brand,
                        type: req.body.type || car.type,
                        model: req.body.model || car.model,
                        color: req.body.color || car.color,
                        license: req.body.license || car.license,
                        riteve: req.body.riteve || car.riteve,
                        capacity: req.body.capacity || car.capacity,
                    })
                    .then(() => res.status(200).send(car)) // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Car
            .findById(req.params.id)
            .then(car => {
                if (!car) {
                    return res.status(400).send({
                        message: 'Car Not Found',
                    });
                }
                return car
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Car deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};
