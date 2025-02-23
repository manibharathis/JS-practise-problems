var a = 2;
a++;
console.log(a); // 3
const d = [1, 2, 3];
d.push(5);
console.log(d); // [1,2,3,5]
const b = 2;
b++;
console.log(b); // TypeError: Assignment to constant variable
const c = [2]; //nothing prints from this line
c[0]++;
console.log(c);