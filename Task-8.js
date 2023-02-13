//----task8----//


let bears = new Map([
  
  ["polar", "white"],
  
  ["panda", "black and white"],
  
  ["andean", "black and brown"],
  
  ["grizzly", "brown"]
  
]);

bears.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value}`);
});