const myNums =[1,2,3,4,5,6,7,8,9,10]

// const myTotal = myNums.reduce(function(accumulator,currentValue){
//   console.log(`acc:${accumulator} and currval:${currentValue}`)
//   return accumulator+currentValue
// },0)


const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal)


console.log("------------------------------");

const shoppingCard = [
{
  itemName:"Java development course",
  price:5990
},
{
  itemName:"Mobile app development course",
  price:6099
},
{
  itemName:"Data Science",
  price:29999
},
{
  itemName:"Python developer Course",
  price: 1299
}
]

const priceToPay = shoppingCard.reduce((acc,item)=> acc+item.price, 0)
console.log(priceToPay);