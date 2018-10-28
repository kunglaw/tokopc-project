'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name:{  
      type:DataTypes.STRING, 
      validate:{
        notEmpty:true
      }
    },
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    hooks:{
      
       beforeCreate:function(product, options){
          product.stock = 100
          console.log(options)
       },beforeBulkCreate:function(product, options){
         console.log("product bulk ", product)
       },beforeBulkUpdate:function(options){
        console.log(options) // dapat data dari query 
      },

       /* beforeCreate:function(user){
         user.password = md5(user.password )
       }*/
    }
  });
  Product.associate = function(models) {
    // associations can be defined here
  };

  return Product;
};