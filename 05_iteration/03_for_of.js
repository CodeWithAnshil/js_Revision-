//for....of
// Loops over values of an iterable (like arrays, strings, maps, sets).
// Cannot be used directly on plain objects (unless you make them iterable).

const arr = [2,3,4,6,7,]
for(const num of arr){
  // console.log(num);
}

const str = "This is Hello Word."
for(const chr of str){
  // console.log(chr);
}

//for....in
//Loops over keys (property names) of an object.
// Mostly used for objects, not arrays.
// For arrays, it gives the index numbers (as strings).

const myObject ={
  js:'JavaScript',
  cpp:'C++',
  rb:'Ruby',
  swift:'swift by apple'
}

for (const key in myObject){
 console.log(`${key} shortcut of ${myObject[key]}`);
}

// yaha pr hm for...in use nhi kar sakte kyo ki yah plane object pr chalata hai aur vahi pr map iterable hota hai
const map = new Map();
map.set('IN',"India")
map.set("USA","United State")
map.set("Fr","France")

for(const key of map){ 
  console.log(key);
}