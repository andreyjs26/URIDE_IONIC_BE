'use strict';
module.exports = (sequelize, DataTypes) => {
    var Passenger = sequelize.define('Passenger', {
        name: DataTypes.STRING,
        lname: DataTypes.STRING,
        phone: DataTypes.STRING,
        from: DataTypes.STRING,
        to: DataTypes.STRING,
        entrance: DataTypes.TIME,
        exit: DataTypes.TIME,
        roundTrip: DataTypes.BOOLEAN,
        discapacity: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Passenger;
};
