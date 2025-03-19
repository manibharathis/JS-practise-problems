const user ={
    name :"akshay",
    address : {
        personal:{
            city : "deradun",
            street : "anbu nagar"
        },
        office :{
            city:"hyderabad",
            area :{
            landmark:"manyata techpark"
            }
        }

    }
}
const obj2={}
function flatten (obj1,parent) {
   for(let item in obj1){
        if(typeof obj1[item] == "object"){
            flatten (obj1[item],parent+"-"+item)
        }
        else{
            obj2[parent+"-"+item]=obj1[item]
        }
   }
   return obj2;
}

console.log(flatten(user,'user'))