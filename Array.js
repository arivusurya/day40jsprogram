let dogs=["labrador","beagel","doberman"]
let cat = ["persion cat","egypth cat ","indain cat"]


let pets = [...cat] 
let copydogs =  dogs.slice(0);
let c1= [...copydogs]

console.log(c1)
console.log(copydogs)


dogs.unshift("godenretivver")



dogs.splice(2,1,"pug")

console.log(dogs)
console.log(pets)