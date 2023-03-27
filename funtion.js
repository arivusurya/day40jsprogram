let mynum = (num,sumfun)=>{
    num++
    sumfun(num)  
}

function display(input){
    console.log(input)
}
console.log(mynum(9,display))