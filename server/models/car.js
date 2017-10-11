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
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Car;
};
