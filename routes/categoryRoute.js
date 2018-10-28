const router = require("express").Router()
const Model = require("./../models");

router.get("/",function(req,res){
    
    let title = "Category List"; 

    Model.Category.findAll()
        .then((categories) => {
            
           //console.log(categories[])
            res.render("category",{ categories, title })

        })
        .catch(err => {

        })

    //res.render("category",{ title : title})
})

router.get("/add",function(req,res){

    let title = "Category Add"
    res.render("categoryAdd",{title})
})

router.post("/add",function(req,res){

    Model.Category.create({
        name:req.body.name
    })
    .then(data => {

        res.redirect("/category")
    })
    .catch(err => {
        res.send(err)
    })

})

router.get("/delete/:id",function(req,res){
    Model.Category.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(data => {

        res.redirect("/category")

    })
    .catch(err => {

    })
})

module.exports = router;