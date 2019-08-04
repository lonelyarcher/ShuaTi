console.log(undefined === undefined);
console.log(undefined == null);
console.log(null === null);
console.log(NaN == NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof []);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log((x => x) instanceof Function);
console.log([1,2,3][-1]);


const st = [];
let op = (a, b) => a + b;
st.unshift(op); //pass by value, the reference of function
op = (a, b) => a - b; //change outside reference will not affect the inside passed function.
console.log(st.shift().call(null, 4, 2)); //4 + 2 = 6

const arr1 = [...Array(5)].map((v, i) => i);
const arr2 = Array(5).fill([]); //bad, same object filled into all the arr2 elements.
arr2[0].push(1,2,3); //all the arr2 rows was pushed with 1,2,3
console.log(arr1);
console.log(arr2.map(v => v.join()).join('|'));

//destructing assignment:
let {x: {y}, z} = {x: {}, z: 7} ;
console.log(y);
//destructing assignment without delaration, add parenthesis
({x, z} = {x:1, y:2});

console.log([["i love you",5],["i love leetcode",2],["island",3],["ironman",2]].map(a => a[0]));