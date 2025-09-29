// const coding = ["Js","Java","Python","C++","C"]
// coding.forEach(function (val){
//   console.log(val)
// })

// Or using Arrow functiom

// coding.forEach(element => {
//   console.log(element)
// });

const myCoding =[
  {
    languageName: "JavaScript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "java"
  },
  {
    languageName: "C",
    languageFileName: "c"
  },
  {
    languageName: "Python",
    languageFileName: "py"
  }
]
// forEach koi bhi value return nhi karta hai 

// myCoding.forEach((item)=>{
//   console.log(item.languageFileName)
// })


//filter value return karata hai 
// const myNums = [1,2,3,4,5,6,7,6,7,8,9,10]
// const newNums = myNums.filter((num) => {
//   return num > 4
// })

// console.log(newNums)


//--------------------------------

let books = [
  { title: "The Alchemist", published: 1988, genre: "Fiction" },
  { title: "Clean Code", published: 2008, genre: "Programming" },
  { title: "The Pragmatic Programmer", published: 1999, genre: "Programming" },
  { title: "To Kill a Mockingbird", published: 1960, genre: "Classic" },
  { title: "1984", published: 1949, genre: "Dystopian" },
  { title: "The Great Gatsby", published: 1925, genre: "Classic" },
  { title: "JavaScript: The Good Parts", published: 2008, genre: "Programming" },
  { title: "Harry Potter and the Philosopher's Stone", published: 1997, genre: "Fantasy" },
  { title: "Lord of the Rings", published: 1954, genre: "Fantasy" },
  { title: "Deep Work", published: 2016, genre: "Self-help" }
];

const value = books.filter((bk)=>{
  return bk.published>=200 && bk.genre==="Self-help"
})

console.log(value);

