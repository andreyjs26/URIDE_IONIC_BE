const carsController = require('../controllers').cars;
const driverController = require('../controllers').drivers;
const passengerController = require('../controllers').passengers;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
    }));
    
    //for cars
    app.get('/api/cars', carsController.list);
    app.post('/api/cars', carsController.create);
    app.get('/api/cars/:id', carsController.retrieve);
    app.put('/api/cars/:id', carsController.update);
    app.delete('/api/cars/:id', carsController.destroy);

    //for passengers
    app.get('/api/passengers', passengerController.list);
    app.post('/api/passengers', passengerController.create);
    app.get('/api/passengers/:id', passengerController.retrieve);
    app.put('/api/passengers/:id', passengerController.update);
    app.delete('/api/passengers/:id', passengerController.destroy);

    //for drivers
    app.post('/api/cars/:carId/drivers', driverController.create);

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    /*app.all('/api/car/:todoId/items', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));*/
};
