let marks = [97, 82, 78, 56, 34]
console.log(marks)
console.log(marks.length) // Property
console.log(marks[3])
let heroes = ["ironman, thor, hulk, spiderman, skaktiman, antman"]
// for loop
// for (let i = 0; i < heroes.length; i++) {
// console.log(heroes[i])
// }
// for of loop
for (let hero of heroes) {
    console.log(hero)
}
let cities = ["multan, peshawar, islamabad, quetta, karachi"]
for(let city of cities){
    console.log(cities)
    console.log(city.toUpperCase())
}
// Practice Question 1 : For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the class.
let _marks = [85, 97, 44, 37, 76, 60]
let sum = 0;
for (let val of _marks){
    sum += val;
}
console.log(sum)
let avg =  sum / _marks.length;
console.log(`avg marks of the class = ${avg}`);
// Practice Question 2: For a given array with prices of 5 items -> [250, 645, 300, 900 , 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
let items = [245, 645, 300, 900 ,50];
// let i = 0
// for(let val of items){
//     console.log(`value at index ${i} = ${val}` )
//     offer = val / 10
//     items[i] -= offer
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }
for (let i = 0; i < items.length; i++) {
 let offer = items[i] / 10
 items[i] -= offer
}
console.log(items)
// Array Methods
// push() method
// let foodItems = ["potato","apple", "litchi", "tomato"]
// foodItems.push("chips, burger, cheese")
// console.log(foodItems)
// pop() method
let foodItems = ["potato","apple", "litchi", "tomato"]
console.log(foodItems)
let deletedItem = foodItems.pop()
console.log(foodItems)
console.log("deleted",deletedItem)
// toString() method  it does not changes original array
let $marks = [97, 86, 54, 36]
console.log($marks)
console.log($marks.toString())
// concat() method it does not changes original array
// let marvel_heroes = ["thor", "spiderman", "ironman"]
// let dc_heroes = ["superman","batman"]
// let $heroes = marvel_heroes.concat(dc_heroes)
// console.log($heroes)
// unshift() method 
//  let marvel_heroes = ["thor", "spiderman", "ironman"]
//  marvel_heroes.unshift("antman")
//  console.log(marvel_heroes)
// shift() method 
//  let marvel_heroes = ["thor", "spiderman", "ironman"]
//  let val = marvel_heroes.shift("antman")
//  console.log("deleted", val)
//  console.log(marvel_heroes)
// slice() method   (startIdx, endIdx)
 let marvel_heroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"]
 console.log(marvel_heroes)
 console.log(marvel_heroes.slice(1)) //from index1 to end
 console.log(marvel_heroes.slice(1, 3)) //from index1 to 2. 3 is not included
 // splice() method  (startIdx, delCount, newEl1..)
let arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(2, 2, 101, 102)
// Add Element
//arr.splice(2, 0, 101,)
// Delete Element
//arr.splice(3, 1)
// Replace Element
// arr.splice(3,1,101)
// arr.splice(4) delete from 4th index to the end of the array
// Practice Question 3 : Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a.Remove the first company from the array
// b.Remove Uber and add Ola in its place
// c.Add Amazon at the end
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
companies.splice(2,1,"Ola")
companies.push("Amazon")
// More Practice
fruits[5] = "mango";
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
