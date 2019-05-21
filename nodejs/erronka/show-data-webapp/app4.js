/*
Crear una página HTML con los datos meteorológicos 
usando nodejs.

las imágenes (sol, nubes, ...)
nube: http://www.euskalmet.euskadi.eus/appcont/meteorologia/meteodat/images/12.png
...
*/


var express = require('express');
var app = express();
// 
app.use(express.static('public'))
//app.use(express.static('.')) //segurtasun arazoa!!

tiempo = [
  {dia:"Miércoles", cielo:"lluvia", temperatura:12},
  {dia:"Jueves", cielo:"Nublado", temperatura:20},
  {dia:"Viernes", cielo:"Nublado", temperatura:23},
  {dia:"Sábado", cielo:"sol", temperatura:10},
  {dia:"Domingo", cielo:"lluvia", temperatura:5},
  {dia:"lunes", cielo:"Nublado", temperatura:0}
]

app.get('/',function(req,res) {
  //res.sendFile(__dirname + '/tiempo.html');
  res.redirect('tiempo.html');
});

app.get('/datuak', function (req, res) {
  res.send(tiempo)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

