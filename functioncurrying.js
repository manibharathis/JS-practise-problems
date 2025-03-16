const multipl1 = function (x,y){
    console.log(x * y)
}
//using bind
const res = multipl1.bind(this,2)
res(3)

//using closure

const multiply2 = function(x){
   return function(y){
        console.log(x*y)
    }
}

const res2 = multiply2(3)
res2(10)