var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(express.static("public"));

app.get("/", function(req,res){

	res.redirect("/home");
});


// INDEX ROUTE
app.get("/home", function(req, res){

	res.render("index.ejs");

});

app.get("/about", function(req, res){

	res.render("about.ejs");
});

app.get("/services/renatron", function(req, res){

	res.render("services_renatron.ejs");
});

app.get("/services/renalin", function(req, res){

	res.render("services_renalene.ejs");
});



app.get("/diacare", function(req, res){


	res.render("diacare.ejs");




});
app.listen(port, function(){

	console.log("Satvik Solutions Server Connected at Port : " + port);
});