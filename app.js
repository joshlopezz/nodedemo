const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, rs){
    res.send("hello world");
});

app.get('/about', function(){
    res.send("about page");
});

app.listen(port, function(){

});