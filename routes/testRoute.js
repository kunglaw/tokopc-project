const express = require("express")
const app    = express()
const router = express.Router()
    
function isMature(req,res,next){
        
    if(req.params.age <  17){
        res.send("<h1> Sorry , you cant see this meme </h1>")
    }else{
        next()
    }
}

router.get("/secret-content/:age",isMature,function(req,res){
    res.render("nicememes")
})

module.exports = router 