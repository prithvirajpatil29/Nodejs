//condition statements;
console.log('Condition Statements');

let num = -20;
if(num > 0){
    console.log('Bigger than 0')
}  
else if(num < 0){
    console.log('Smaller than 0')
} 
else{
    console.log('Number is Zero')
}

// switching case
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }