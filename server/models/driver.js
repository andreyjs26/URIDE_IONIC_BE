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
        password: DataTypes.STRING
        //,carId : DataTypes.INTEGER
    });

    Driver.associate = function(models) {
    // associations can be defined here
        Driver.belongsTo(models.Car,{
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }

        });
    };
    
    return Driver;
};
