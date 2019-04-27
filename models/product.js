const Sequelize = require('sequelize'); 
const db = require('../config/db.js');

const product = db.define('product', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'name': Sequelize.STRING,
  'price': Sequelize.INTEGER,
  'image': {
    type: Sequelize.STRING,
    // get() { // Set custom getter for product image using URL
    //   const image = this.getDataValue('image');
    //   return uploadDir+image;
    // }
  },
  'createdAt': {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },    
  'updatedAt': {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  //prevent sequelize transform table name into plural
  freezeTableName: true,
});

module.exports = product;