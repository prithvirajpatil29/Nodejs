class Emp{
    constructor(na,em){
        console.log('constructor method')
        this.name = na
        this.email = em
    }
    getDetails(){
        return this.name +' '+this.email
    }
}
let x = new Emp('prithviraj','prithviraj@gmail.com');
console.log(x)
console.log(x.getDetails())