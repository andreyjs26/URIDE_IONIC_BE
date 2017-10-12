const carsController = require('../controllers').cars;
const driverController = require('../controllers').drivers;
const passengerController = require('../controllers').passengers;
const loginController = require('../controllers').login;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
    }));

    //for login
    app.post('/api/login',loginController.login);

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
    app.post('/api/drivers/', driverController.create);
    app.get('/api/drivers', driverController.list);
    app.post('/api/drivers', driverController.create);
    app.get('/api/drivers/:id', driverController.retrieve);
    app.put('/api/drivers/:id', driverController.update);
    app.delete('/api/drivers/:id', driverController.destroy);

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    /*app.all('/api/car/:todoId/items', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));*/
};
