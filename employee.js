let wageperhour = 20;
let ispresent = 0;
let isparttime = 1;
let isfulltime =2



function getinghours(randomcheck){
    let emphours = 0
switch (randomcheck) {
    case ispresent:
        emphours =0
        break;
    case isparttime:
        emphours =4;
        break
    case isfulltime:
        emphours = 8;
        break
    default:
        break;
    }
    return emphours
}

function calculatewage(emphours){
    return emphours * wageperhour
}

let emphour = 0 ;
let totalemphour=0
let totalworkingday =0 ;
let employearray = []
let employeemap = new Map()

while(totalemphour <=100 && totalworkingday<20 ){
    totalworkingday ++;
    let empcheck = Math.floor(Math.random()*10%3);
    let emphour = getinghours(empcheck);
    let wage = calculatewage(emphour);
    employearray.push(wage);
    employeemap.set(totalworkingday,wage)
    totalemphour += emphour
     
}

let totalwage = employearray.filter(dailywage => dailywage >0).reduce()
// console.log(totalemphour)
// console.log(employeemap)
