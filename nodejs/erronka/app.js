// https://www.w3schools.com/nodejs/nodejs_mongodb.asp

/*
nmp init
npm install mongodb express
*/

var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.get('/:id/:t', function (req, res) {
//app.get('/', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("erronka2");
    var myobj = { sensor_id: req.params.id, datua: req.params.t, noiz: new Date().getTime()};
    dbo.collection("datuak").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      console.log(myobj);
      db.close();
      //res.end();
    });
  });
  
  res.end();
});




/* mongodb
use erronka;   
db.datuak.find();
*/

app.listen(8080, function () {
  console.log('app running 8080!');
});
