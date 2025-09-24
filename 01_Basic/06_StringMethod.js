const name="Anshil Maurya"
const repoCount = 50
console.log(`Hello, My name is ${name} and total repoCount is ${repoCount}`);

const gameName = new String("Anshil Maurya")


console.log(gameName.slice(0,4));

const newString = "    Anshil Maurya    "
console.log(newString.trim())

const url = "https://google.com/anshil20%Maurya"
console.log(url.replace("20%","-"));
console.log(url.replace("/","-")); // replace shirf ek ko hi replace karta hai vo bhi jo  sanbse pahale aata hai 

console.log(url.replaceAll("/","-")); //  Yah sabhi ko replace karta hai 


const name1 = "   https://google.com/anshil-Maurya"

console.log(name1.split("/"));

console.log(gameName.charAt(1));

console.log(name1.includes('https'));

const searchString = "Hello dosto kya hal chal "
const index = searchString.search("dosto")
console.log(index);
console.log(searchString.italics());// italics is deprecated 



