console.log("hello")
setTimeout(()=>{
    console.log("callback")
},0)

const startTime = new Date().getTime();
let endDate = startTime
while(endDate< startTime + 10000){
    endDate = new Date().getTime()
}

console.log("end")
