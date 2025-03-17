let counter =0;
const getData = ()=>
{ 
    
    console.log("fetching data "+ counter++)
}

const debounce = function (func, delay){
    let timer;
    return function(){
    let context = this;
    let args= arguments;
    console.log(args)
    clearTimeout(timer)
  timer = setTimeout(()=>{
        func.apply(context,args)
    },delay)
    }
}

const betterfunction = debounce(getData,300)
