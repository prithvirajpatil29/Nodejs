//inheritance

class course{
    constructor(na,du){
        this.name = na
        this.duration = du
    }
    getCourseInfo(){
        return this.name + 'and duartion is  ' + this.duration
    }
}

class item extends course{
    constructor(x,y){
        super(x,y)
    }
}
let x = new item('React','2 months');
console.log(x)
console.log(x.getCourseInfo())