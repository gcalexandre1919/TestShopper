// Alterar de acordo com o seu banco de dados!
const schema = "gabriel"; 
const user = "root";
const password = "teste2001";
// 


const  Sequelize  = require('sequelize');

const dbSequelize = new Sequelize(schema, user, password, {
    host: "localhost",
    dialect:"mysql"
  });

module.exports = dbSequelize;