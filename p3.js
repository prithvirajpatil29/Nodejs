//looping statements

let arr = [10,20,30,40,50];
//for loop
console.log('for loop')
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// while loop
let num1 = 100;
console.log('while loop')
while(num1 < 150){
    console.log(num1);
    num1 +=10;
}

// do while
console.log('do while')
let text = "";
let i = 0;
do {
  text += i;
  i++;
  console.log(text)
}
while (i < 5);

// for each
console.log('for Each')
let emp = ['prithviraj','appu','prajwal','amogh']
emp.forEach((item) => {
  console.log(item)
}) 

// for in
console.log('for in loop')
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  console.log(txt)
}

//for of
console.log('fo of')
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}

// map
console.log('map loop')
const fruits = ['apple','mango','orange','banan','pumpkin']
fruits.map((item) => {
  console.log(item);
})