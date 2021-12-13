const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    shared: { type: DataTypes.BOOLEAN, defaultValue: false },
    email: { type: DataTypes.STRING }
})

module.exports = User