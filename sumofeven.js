const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter the even numbers, square them, and then sum them up

let sum = array.filter(e=>e%2==0).map(e=>e*e).reduce((e,i)=>e+i,0)
console.log(sum)
// let ans=0;
// for(let i=0 ; i<sum.length;i++){
//     ans = ans+sum[i]
// }
// console.log(ans)
