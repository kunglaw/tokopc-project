'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Products",[{
     name:"Asus Grapic Card ROG 1000RTX",
     price:2000000,
     stock:10,
     description:"Gaming Recomended, with this Grapic Card you can play GTA 5 but not fortnite",
     createdAt:new Date(), // biasanya ini kelupaan
     updatedAt:new Date()
   },{
    name:"Asus Laptop AX45 Core i3 RAM 4GB",
    price:5465000,
    stock:10,
    description:"no windows , only linux. you can be a good developer with this laptop",
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    name:"RAM corsair 8GB DDR3",
    price:850000,
    stock:10,
    description:"with this additional Ram, your PC will be more powerfull",
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    name:"Macbook Air 13inc corei5 13 inch ",
    price:19000000,
    stock:10,
    description:"for Developer , Designer and all type of Artisans out there",
    createdAt:new Date(),
    updatedAt:new Date()
   },{
    name:"Asus Motherboard GT-X LGA775 4 ram slot",
    price:1500000,
    stock:10,
    description:"more powerfull gaming PC",
    createdAt:new Date(),
    updatedAt:new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkInsert("Products",null,{});
  }
};
