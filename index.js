const foods = ["banana", "apple", "orange", "mango"];
foods.push("uchekwu");
document.getElementById("demo").innerHTML = foods;
const names = ["ozochi", "ukamaka", "chisom", "chinonso"];
names.pop();
document.getElementById("demo2").innerHTML = names
const fruit = ["banana", "orange", "apple", "mango"];
fruit.unshift("lemon", "pineapple");
document.getElementById("demo3").innerHTML = fruit
const men = ["benco", "juli", "suzi", "jenity"];
men.shift();
document.getElementById("demo4").innerHTML = men; 
const cars = ["vox", "passat", "toyota", "lexus"];
cars.splice(2, 0, "man", "ram");
document.getElementById("demo5").innerHTML = cars;
const food = ["banana", "orange", "lemon", "apple", "mango",];
const citrus = food.slice(1, 3);
document.getElementById("demo6").innerHTML = citrus;
const streets = ["achina", "apiti", "udeude", "ufuma"];
let text = streets.join();
document.getElementById("demo7").innerHTML = text;
const arr1 = ["sweet", "ifechi"];
const arr2 = ["ikenna", "chukwuani", "benzima"];
const children = arr1.concat(arr2);
document.getElementById("demo8").innerHTML = children;
const places = ["newHaven", "otigba", "abakpa", "emene"];
document.getElementById("demo9").innerHTML = places.reverse();
const phone = ["tecno", "infinix", "samsug", "motorola","iphone"];
document.getElementById("demo10").innerHTML = phone.sort();

