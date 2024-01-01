function clock(){
    let time = new Date().toLocaleTimeString();
    console.log(time)
}
// setInterval(clock,1000);

// setTimeout(()=>{
//     console.log('Set Time Out')
// },3000);
let date = new Date();
console.log(date.getDate())

// Objects
let employee = {
    name:'prithviraj',
    email:'prithvirajkpatil29@gmail.com',
    mobile : 773433243
}
console.log(employee)
console.log(employee.mobile)

//Array Objects
let users = [
    {
        fname:'prithviraj',
        lname : 'patil',
        age : 22,
        address:'gulbarga'
    },
    {
        fname:'prajwal',
        lname : 'biradar',
        age : 20,
        address:'bengaluru'
    }
]
console.log(users)
users.map((item) => {
    console.log('fname = ', item.fname)
    console.log('lname = ', item.lname)
    console.log('age = ', item.age)
    console.log('address = ', item.address)

})

// Objec constructor
let data = new Object();
data.name = 'manju';
data.email = 'manju@gmail.com'
console.log(data)

// parameterized object construtor
let userdata = new Object()