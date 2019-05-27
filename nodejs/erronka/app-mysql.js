var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.static('public'))


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin108",
    database: "proyecto"
  });


con.connect(function(err) {
    if (err) throw err;
    else
       console.log("Myslq connect OK!!!");
});  

app.get('/',function(req,res) {
  //res.sendFile(__dirname + '/tiempo.html');
  res.redirect('tiempo.html');
});

app.get('/datuak', function (req, res) {

    con.query("SELECT * FROM datos LIMIT 1000", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
