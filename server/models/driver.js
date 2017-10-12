'use strict';
module.exports = (sequelize, DataTypes) => {
    var Driver = sequelize.define('Driver', {
        name: DataTypes.STRING,
        lname: DataTypes.STRING,
        phone: DataTypes.STRING,
        from: DataTypes.STRING,
        to: DataTypes.STRING,
        entrance: DataTypes.TIME,
        exit: DataTypes.TIME,
        roundTrip: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        carId : DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Driver.belongsTo(models.Car,{
                    foreignKey: {
                        field: 'carId',
                        allowNull: false,
                    },
                    onDelete: 'CASCADE'
                });
            }
        }
    });
    return Driver;
};
