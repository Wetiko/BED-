var app=require('./controller/app.js');
var port=8081;
/*
Name: Zavier Lee Wey
Class: DISM/FT/2B/21
Admission No: 2205513
*/
var server=app.listen(port,function(){

    console.log("App hosted at localhost:"+port);

    
});