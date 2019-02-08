const Sequelize = require('sequelize');
const sequelize = require("../connection")



module.exports = sequelize.define('tags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name : {
    type: Sequelize.STRING,
    allowNull: false,
  },
  actived_at: Sequelize.DATE,
  created_at: Sequelize.DATE,
}, {
  //este es el tercer parametro que necesita el esquema de Sequelize
  underscored:true,
  tableName: 'tags',
  // createdAt: 'registerdAt'
})
