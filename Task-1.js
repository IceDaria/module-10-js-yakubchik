//----task1----//


let inputData = prompt("Введите значение");

if ((typeof(+inputData) == 'number') && (!isNaN(+inputData))){
    if (inputData % 2 === 0) {
        console.log("Ваше число чётное");
    } else {
        console.log("Ваше число нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}