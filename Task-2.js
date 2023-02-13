//----task2----//

let x;

if ((typeof(x) == 'number') && (!isNaN(x))) {
    console.log ("x - число")
} else if (typeof(x) == 'string') {
    console.log ("x - Строка")
} else if (typeof(x) == 'Boolean') {
    console.log ("x - логический тип")
} else {
    console.log ("Тип x не определён")
}