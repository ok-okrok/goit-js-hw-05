const fruits = ["яблуко", "банан", "диня", "чорниці", "грейпфрут"];

const x = "чорниці";

const index = fruits.findIndex(fruit => fruit === x);

console.log(index); // 3
console.log(fruits[index]); // чорниці