const carsController = require('../controllers').cars;
const driverController = require('../controllers').drivers;
const passengerController = require('../controllers').passengers;
const loginController = require('../controllers').login;

const jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens

module.exports = (app) => {

    // secret variable
    app.set('superSecret', 'uride2017');

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
    }));

    //for login
    app.post('/api/login',loginController.login);

    app.post('/api/cars', carsController.create);
    app.post('/api/drivers/', driverController.create);
    app.post('/api/passengers', passengerController.create);

    app.use(function(req, res, next) {
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    console.log(err);
                    return res.json({
                        message: 'Token invalid or expired'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {
            // if there is no token return an error
            return res.status(403).send({
                message: 'No token provided.'
            });
        }
    });

    //for cars
    app.get('/api/cars', carsController.list);
    app.get('/api/cars/:id', carsController.retrieve);
    app.put('/api/cars/:id', carsController.update);
    app.delete('/api/cars/:id', carsController.destroy);

    //for passengers
    app.get('/api/passengers', passengerController.list);
    app.get('/api/passengers/:id', passengerController.retrieve);
    app.put('/api/passengers/:id', passengerController.update);
    app.delete('/api/passengers/:id', passengerController.destroy);

    //for drivers
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
