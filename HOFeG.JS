const radius =[1,2,3,4,5]
const area = function(radius){
    return Math.PI*radius*radius
}
const perimeter = function(radius){
    return 2*Math.PI*radius
}
function calculate1(arr,logic){
    const output = []
    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]))
    }
    console.log(output)
}
Array.prototype.calculate = function(logic){
    const output = []
    for(let i=0; i<this.length ; i++){
        output.push(logic(this[i]))
    }
    console.log(output)
}

radius.calculate(area)
//radius.calculate(perimeter)
calculate1(radius,area)

