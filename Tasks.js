
//----task1----//


let inputData = prompt("Введите значение");

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputData))){
    if (inputData % 2 === 0) {
        console.log("Ваше число чётное");
    } else {
        console.log("Ваше число нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}


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


//----task3----//

let string = "Hello";

let reverse = string.split('').reverse().join('');

console.log(reverse);


//----task4----//

function  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min));
}
  
console.log(getRandomRange(0, 100));


//----task5----//

let arr = ['Панда', 'Гризли', 'Белый медведь', 'Бурый медведь', 'Красная панда', 'Енот', 'Откуда тут енот?'];

console.log(arr.length);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//----task6----//

let arr = [15, 5, 6, 8, 10, 2, 15, 3, 1, 1.5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 15) {
        console.log(true)
    } else {
        console.log(false)
    }
}


//----task7----//


let arr = [0, "bear", 6, null, "cat", 4, 5, 21, "racoon", 1, 8, 2.5];
let zero = 0;
let otherCount = 0;
let numberCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numberCount += 1;
        if (arr[i] === 0) {
            zero += 1;
        } else if (arr[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        } else  {
          otherCount += 1;
        }
    }
}

console.log('Чисел в массиве - ')
console.log(zero + 'нолей')
console.log(evenCount + 'чётных чисел')
console.log(oddCount + 'нечётных чисел')
console.log(otherCount + 'других значений')