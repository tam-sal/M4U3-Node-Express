let dia = new Date()
console.log(`hoy es =>>>> ${dia}`)
let iterable = new Date()

for (let idx = 1; idx < 8; idx++){
    dia.setDate(iterable.getDate()+idx)
    console.log(`proximo dia es ${dia}`)
}