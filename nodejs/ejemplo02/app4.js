
var express = require('express');
var app = express();

tiempo = [
  {dia:"Miércoles", cielo:"lluvia", temperatura:12},
  {dia:"Jueves", cielo:"Nublado", temperatura:20},
  {dia:"Viernes", cielo:"lluvia", temperatura:23},
  {dia:"Sábado", cielo:"sol", temperatura:10},
  {dia:"Domingo", cielo:"lluvia", temperatura:5},
  {dia:"lunes", cielo:"Nublado", temperatura:0}
]

app.get('/', function (req, res) {

  var i;
  var r;
  console.log("Días lluviosos:")
  for (i = 0; i < tiempo.length; i++) { 
      //console.log(i)
      if (tiempo[i].cielo == "lluvia") {
          //console.log(tiempo[i].dia + " " + tiempo[i].cielo)
          console.log(tiempo[i].dia)
          r = tiempo[i].dia
      }
  }
  res.send(r);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

