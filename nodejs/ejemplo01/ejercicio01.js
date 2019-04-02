/*
ejemplo 03: for + arrays + JSON
*/

// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_arrays.asp

/*
Definir los datos meteorológicos de la tendencia de los próximos 6 días. Con arrays [] y diccionarios {}

http://www.euskalmet.euskadi.eus
*/

tiempo = [
    {dia:"Miércoles", cielo:"lluvia", temperatura:12},
    {dia:"Jueves", cielo:"Nublado", temperatura:20},
    {dia:"Viernes", cielo:"lluvia", temperatura:23},
    {dia:"Sábado", cielo:"sol", temperatura:10},
    {dia:"Domingo", cielo:"lluvia", temperatura:5},
    {dia:"lunes", cielo:"Nublado", temperatura:0}
]

/*
Imprimir los datos usando 'for' y console.log
*/

/*
console.log(tiempo[0].dia + " " + tiempo[0].cielo)
console.log(tiempo[1].dia + " " + tiempo[1].cielo)
console.log(tiempo[2].dia + " " + tiempo[2].cielo)
console.log(tiempo[3].dia + " " + tiempo[3].cielo)
console.log(tiempo[4].dia + " " + tiempo[4].cielo)
console.log(tiempo[5].dia + " " + tiempo[5].cielo)
*/

/*
var i;
for (i = 0; i < tiempo.length; i++) { 
    //console.log(i)
    console.log(tiempo[i].dia + " " + tiempo[i].cielo)
}
*/

/*
Lo mismo pero usando while
*/

/*
Solo imprimir los días de lluvia. Pista: usar 'if'
*/
var i;
console.log("Días lluviosos:")
for (i = 0; i < tiempo.length; i++) { 
    //console.log(i)
    if (tiempo[i].cielo == "lluvia") {
        //console.log(tiempo[i].dia + " " + tiempo[i].cielo)
        console.log(tiempo[i].dia)
    }
}

