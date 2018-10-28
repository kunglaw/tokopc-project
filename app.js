const express = require("express");
//var bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 7010;

const Model = require("./models");
app.use(express.static("./assets"));

const getCurrency = require("./helpers/getCurrency")
const productRoute = require("./routes/productRoute")
const categoryRoute = require("./routes/categoryRoute")
const userRoute = require("./routes/userRoute")
const testRoute = require("./routes/testRoute")

app.locals.message = ""
app.locals.getCurrency = getCurrency
app.locals.age = 0
//app.use("getCurrency",getCurrency)

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.set("view engine","ejs");

app.use("/product",productRoute)
app.use("/category",categoryRoute)
app.use("/user",userRoute)
app.use("/test",testRoute)

app.get("/",function(req,res){
    let title = "Home";
    res.render("home",{ title });
})

app.listen(port,function(){
    console.log("Application running on port : ",port);
})