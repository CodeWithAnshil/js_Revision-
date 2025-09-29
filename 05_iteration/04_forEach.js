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

const myNums = [1,2,3,4,5,6,7,6,7,8,9,10]

const newNums = myNums.filter((num) => {
  return num > 4
})

console.log(newNums)