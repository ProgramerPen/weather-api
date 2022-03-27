const exp = require('express');
const BodyParser = require('body-parser');
const app = exp();
app.use(BodyParser.urlencoded({extended: true}));

app.get("/" , function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/" , function(req, res){
var w = Number(req.body.w1);
var h = Number(req.body.h1);
var b = h*h;
var result = w/b;
res.send("Your BMI is " + Math.round(result));
});


app.listen(3000, function(){
    console.log("listining on 3000 1244")});