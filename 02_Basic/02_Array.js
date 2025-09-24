const heros = ["Ironman","Superman","Batman","Spiderman"]
const marvel =["Thor","Flash"]

const new_marvel = marvel.concat(heros)
console.log(new_marvel);

heros.push(marvel)
console.log(heros);

const anotherArray = [1,2,3,4,5,[4,3,4,5,[5,3,6]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Anshil"));
console.log(Array.from("Anshil"));
console.log("-------------------------------------------------------------------------");

console.log(Array.from({name:"Anshil Maurya"}));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));


