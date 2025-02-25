const arr =[{name:"akshay",age:29,lastName:"saini"

            },{
                name : "deepika",age:26,lastName:"padukone"
            },
        {
            name:"hrithik",age:26,lastName:"roshan"
        }]

const output = arr.reduce((acc,curr)=>{
    if(curr.age<29){
        acc.push(curr.name)
    }
    return acc
},[])
console.log(output)
const output2 = arr.filter(e=>e.age<29).map(e=>e.name)
console.log(output2)