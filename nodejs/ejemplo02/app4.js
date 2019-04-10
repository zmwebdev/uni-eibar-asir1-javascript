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

app.get('/api',function(req,res) {
  res.redirect('api.html');
});


app.get('/datuak', function (req, res) {

  var r = [];
  //console.log("Días lluviosos:")
  for (var i = 0; i < tiempo.length; i++) { 
      //console.log(i)
      if (tiempo[i].cielo == "lluvia") {
          //console.log(tiempo[i].dia + " " + tiempo[i].cielo)
          //console.log(tiempo[i].dia)
          //r[r.length] = tiempo[i].dia
          r.push(tiempo[i].dia)
      }
  }
  
  res.send(r);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

