let keystring = "string key"
let keyobj = {}
let keyfunction = function(){}

let mymap = new Map();
mymap.set(keystring,"sting value")
mymap.set(keyobj,{"nothing":"leave mea alone"})
mymap.set(keyfunction,"func value")

console.log(mymap.size)
console.log(mymap.has('string key'))

for ( let [key,value] of mymap){
    console.log("loop1:" + key + " : "+ value)
}

