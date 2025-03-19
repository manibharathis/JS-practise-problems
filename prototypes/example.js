const obj1 = {
    name : "mani",
    city : "thanjavur",
    address : function(){
      console.log(this.name + " from "+ this.city )
    }
}

const obj2={
    name:"akshay"
}

obj2.__proto__ = obj1
obj2.address()