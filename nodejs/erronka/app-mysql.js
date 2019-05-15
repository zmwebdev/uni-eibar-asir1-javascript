// https://www.w3schools.com/nodejs/nodejs_mongodb.asp

/*
nmp init
npm install mongodb express
*/
var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "sensores"
});


app.get('/:id/:t', function (req, res) {
//app.get('/', function (req, res) {
  

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "insert into datos (fecha_hora, cod_sensor, dato) VALUES (NOW()," + req.params.id + "," + req.params.t + ")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
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