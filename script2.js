//1 Write a declaration function that take a parameter called: “name”, and return a greeting message including that name
function greeting(name) {
  return `Greeting, ${name}!`;
}
console.log(greeting("Hab"));

//2 Write an expression function that take two parameters “num1” & “num2” and returns their sum
const sum = function(num1, num2) {
  return num1 + num2;
}
console.log(sum(12, 15));

//3 Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers
let arr = [1, 2, 4, 4, 5];
const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
};
console.log(average(arr));

//4 Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)
(function(weight, height){
  BMI = weight / (height * height)
  return console.log(BMI)
})(550,1.7);


//5 Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero
const products =[ 
    {
        name: "Coca-Cola",
        price: "$1.5",
        quantity: 10,
    },
    {
        name: "Bottle",
        price: "$2",
        quantity: 0,
    },
    {
        name: "Sting",
        price: "$1.6",
        quantity: 0,
    },
    {
        name: "Fanta",
        price: "$1",
        quantity: 230,
    }
];
function detail(obj) {
    const inStock = []
    for(let i=0;i<obj.length;i++){
        if(obj[i].quantity>0){
            inStock.push(obj[i])
        }
    }
    return inStock
}
console.log(detail(products))

//6 Write a function that could check if the password provided is strong or not. A strong password should have a minimum length of 8 characters
let pass= "1ACF21345@@#434dfdgdg"
let check =(pass)=>{
  let isNumber= false
  let isCharacter = false
  let isSymbol = false
  let Strong = 0
  let isStrong = (pass,Strong=0)=>{
    const Numbers = "1234567890"
    const Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const Small = "abcdefghijklmnopqrstuvwxyz"
    const Symbol = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}"
    for(let i=0;i<pass.length;i++){
        for(let j=0;j<Capital.length;j++){
            if(pass[i]==Capital[j] ||pass[i]==Small[j]){
              isCharacter = true
            }
        }
        for(let k=0;k<Symbol.length;k++){
          if(pass[i] == Symbol[k]){
            isSymbol = true
          }
        }
        for(let l=0;l<Numbers.length;l++){
          if(pass[i] == Numbers[l]){
            isNumber = true
          }
        }
    }
    if(isCharacter){
      Strong +=25
    }
    if(isNumber){
        Strong +=25
      }
    if(isSymbol){
          Strong+=25
        }
      return Strong
    
}
    if(pass.length<8){
        return console.log("The password is less than 8 Charaters, Not Strong")
    }else{ 
  Strong = isStrong(pass,Strong)
    }
    if(Strong == 0){
      return "Password is too Weak"
    }
    else if( Strong== 25){
      return "Password is weak"
    }
    else if(Strong ==50){
      return "Password is Stronger"
    }
    else if(Strong >= 75){
      return "Password is Very Strong"
    }
}
console.log(check(pass))
//7 Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)
let strings = "fddjioh479ejfo1ekiipo"

const CountVowel = (password)=>{
    let vowels = ['a','e','i','o','u'];
    let vowel2 = ['A','E','I','O','U']
    let countVowel = 0;
for(let i=0;i<password.length;i++){
    for(let j=0;j<vowels.length;j++){
            if(password[i]==vowels[j] || password[i]==vowel2[j]){
                countVowel++;
            }
        }
    }    
        return countVowel;
}
console.log(`There is/are ${CountVowel(strings)} vowels`)

//8 Write a function that could sort a list of numbers in ascending order.

//1th
listNum = [134,45,656,66,4,3,333,56,46]
listNum.sort((a,b)=>(a-b))
console.log(listNum)

//2th
listNum = [134,45,656,66,4,3,333,56,46]
const SortNum = (listNum)=>{
  for(let i=0;i<listNum.length-1;i++){
    for(let j=i+1;j<listNum.length;j++)
      if(listNum[i]>listNum[j]){
        let temp = listNum[i]
        listNum[i] = listNum[j]
        listNum[j] = temp
      }
  }
  return listNum
}
console.log(SortNum(listNum))

//9 Write a function that takes an array of numbers as an input and returns the median value
let numList1 = [7,14,5,19,26,42,13]
let numList2 = [8,21,14,36,17,2,56,41]
function Median(numList1){
  let Median;
  for(let i=0;i<numList1.length-1;i++){
    for(let j=i+1;j<numList1.length;j++){
      if(numList1[i]>numList1[j]){
        let temp = numList1[i];
        numList1[i] = numList1[j];
        numList1[j] = temp;
      }
    }
  }
  console.log(numList1)
  if(numList1.length%2!=0){
      Median = numList1[((numList1.length+1)/2)-1];//-1 (array count from 0th in math count from 1th)
  }
  else{
    //Median = (numList1[(numList1.length/2)-1] + numList1[(numList1.length/2)])/2;
    Median = (numList1[((numList1.length)/2)-1] + numList1[numList1.length/2])/2;
  }
  return Median
  
}
console.log(Median(numList1))
console.log(Median(numList2))

//10 Write a function that takes a non negative number as a parameter and returns the factorial of that parameter
const Fact = (num)=>{
  if(num==0) return 1
  else if (num<0) return "Please Enter Positive Number"
  else return num*Fact(num-1)

  //  5*4*3*2*1*1
}
console.log(Fact(6))
