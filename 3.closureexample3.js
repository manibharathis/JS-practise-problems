function x(){
    var a= 100,b=2;
   return function y(){
        console.log(a)
    }
}


let c= x()
c()
console.log(a)