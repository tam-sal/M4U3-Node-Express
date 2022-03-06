const moment = require('moment');
moment.locale("en")
//console.log(moment('12/12/80', 'MM/DD/YY').fromNow())
let salida = moment('12/12/80', 'MM/DD/YY')
let edad = salida.fromNow()


console.log(salida,edad)
console.log(typeof(salida))
console.log(salida +'>>>'+ edad)
