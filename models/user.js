'use strict';

const Encryption = require("./../helpers/Encryption")

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        notEmpty:true,
        emailUnique(email, cb){
          sequelize.models.User.findAll({
              email:email
          })
          .then(data => {
              if(data.length > 0){
                throw cb("Email is Already taken")
              }else{
                cb()
              }
          })
          .catch(err => {
              cb(err)
          })

        }
      }
    },
    password:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    gender: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(user){

        let salt = Encryption.generateSalt()
        let hash = Encryption.generateSalt(user.password,salt)

        user.password = hash
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};