const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/client');

class Model_name extends Model { };

Model_name.init({
    champ_name: DataTypes.TEXT,

}, {
    sequelize,
    tableName: "model_name"
});

module.exports = Model_name;