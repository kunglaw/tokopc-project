const crypto = require("crypto")

const express = require("express")
const app = express()
const router = express.Router()
const Model = require("./../models");


router.get("/login",function(req,res){
    
    res.render("login",{ title:"Login" })
})

router.post("/login",function(req,res){
    
    Model.User.findOne({
        where:{
            email:req.body.email,
            password:req.body.password
        }
    })
    .then(user => {
       res.send(user)
    })
    .catch(err => {
        res.send(err)
    })


})

router.get("/register",function(req,res){
    let title = "Register"
    
    
    res.render("register",{ title })
})

router.post("/register",function(req,res){
    
    Model.User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender
    })
    .then(user => {
        //res.send(user)
        res.redirect("/user/login")
    })
    .catch(err => {
        let title = "Register"
        let status = "error"
        message = err.errors
        res.render("register.ejs",{ title, status, message  })
        //res.send(err)
    })

})

module.exports = router