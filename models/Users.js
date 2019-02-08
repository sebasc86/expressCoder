const Sequelize = require('sequelize');
const sequelize = require("./../connection")


module.exports = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email : {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  actived_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE
}, {
  //este es el tercer parametro que necesita el esquema de Sequelize
  underscored:true,
  tableName: 'users',
  // createdAt: 'registerdAt'
})

