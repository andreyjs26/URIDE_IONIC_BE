'use strict';
module.exports = (sequelize, DataTypes) => {
    var Car = sequelize.define('Car', {
        brand: DataTypes.STRING,
        type: DataTypes.STRING,
        model: DataTypes.STRING,
        color: DataTypes.STRING,
        license: DataTypes.STRING,
        riteve: DataTypes.BOOLEAN,
        capacity: DataTypes.INTEGER
    });

    Car.associate = function(models) {
        // associations can be defined here
        Car.hasOne(models.Driver);
    };

    return Car;
};
