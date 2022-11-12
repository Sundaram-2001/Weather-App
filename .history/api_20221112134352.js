const express=require("express");
// const app=
const app=express();
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));




app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
        });
        app.post( "/",function(req,res){
            
            const query=req.body.cityName;
            const apiKey="7cde4a00f086fd27710d01f3af0ce360";
            const unit="metric";
            const url="https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + apiKey + "&units=" + unit;
        https.get(url,function(response){
            console.log(response.statusCode);
            response.on("data",function(data){
                const report=JSON.parse(data);
                const min=report.main.temp_min;
                const max=report.main.temp_max;
                const desc=report.weather[0].description;
                const icon=report.weather[0].icon;
                const imageURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png";
                console.log(report);
                res.write("<p><h3>The weather at " + query + " is currently:"  + desc + "<p></h3>");
                res.write( "<h3>The minimum temperature at" + query + "is:" + min + "</h3>");
                res.write("<h3>The maximum temperature at " + query + " is:" + max + "</h3>");
                
                res.write("<img src=" + imageURL + ">");
                res.send();
                
        })
    })
})





      /*const url="https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + apiKey + "&units=" + unit;
        https.get(url,function(response){
            console.log(response.statusCode);
            response.on("data",function(data){
                const report=JSON.parse(data);
                const min=report.main.temp_min;
                const max=report.main.temp_max;
                const desc=report.weather[0].description;
                const icon=report.weather[0].icon;
                const imageURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png";
                console.log(report);
                res.write("<p><h3>The weather at Hyderabad is currently: " + desc + "<p>" + "</h3>");
                res.write( "<h3>The minimum temperature at Hyderabad is:" + min + "</h3>");
                res.write("<h3>The maximum temperature at Hyderabad is:" + max + "</h3>");
                //res.write("<img src="imageURL">");
                //res.write("<p>The weather looks: " + desc + "<p>");
                res.write("<img src=" + imageURL + ">");
                res.send();
                //res.sendFile(__dirname + "/index.html");

*/





app.listen(,function(req,res){
    console.log("Server is up and running!");
})