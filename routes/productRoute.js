const router = require("express").Router()
const Model = require("./../models");

router.get("/",function(req,res){
    let title = "Product List"; 
    //console.log(res);
    Model.Product.findAll().
    then(products =>{

        //let getCurrency = getCurrency

        //res.locals.getCurrency = getCurrency

        res.render("product.ejs",{title , products });

    }).catch(err=>{

        res.send(" Error ",err);

    });
});

router.get("/add",function(req,res){
    let title = "Product Add";
    res.render("productAdd",{title}); 
})

router.get("/update/:id",function(req, res){
    let title = "Product Edit"

    Model.Product.findOne({
        where:{
            id:req.params.id
        }
    })
    .then(data => {
        res.render("productEdit",{products:data, title})
    })

})

router.post("/update/:id",function(req,res){
    Model.Product.update({
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock,
        description:req.body.description
    },{
        where:{
            id:req.params.id
        }
    })
    .then(data => {
        res.redirect("./product")
    })
    .catch(err =>{
        res.send(err)
    })
})

router.post("/add",function(req,res){
    Model.Product.bulkCreate([{
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock,
        description:req.body.description
    },{
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock,
        description:req.body.description
    }])
    .then(data => {
        return Model.Product.findAll()
    })
    .then(data => {
        let title = "Product List"; 
        res.render("product.ejs",{title , products});
    })
    .catch(err => {
        res.send(err)
    })
})

router.get("/delete/:id",function(req,res){
    
   Model.Product.destroy({
       where:{
           id:req.params.id
       }
   })
    .then(data =>{
        console.log(data)
        res.send("successfully delete a product")
    })
    .catch(err => {
        res.send(err)
    })
})


module.exports = router;