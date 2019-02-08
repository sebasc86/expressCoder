const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/coderhouse')

// const sequelize = new Sequelize('coderhouse', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',

//   // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//   operatorsAliases: false
// });

//otra forma mas simple de conectarse en una linea.
// const sequelize = new Sequelize('mysql://root:@localhost:3306/coderhouse')

// //para saber si hay conexion
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });




  module.exports = sequelize