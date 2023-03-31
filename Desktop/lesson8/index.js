//1
let currElem = 0;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeElement(array, item){
  currElem = array.indexOf(item)
  array.splice(currElem, 1);
  return array;
}

//2
const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

 function generateKey(length, characters){
  let key = "";
  for (let i = 0; i <= length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    key += characters.substring(randomNumber, randomNumber + 1);
  }

  return key;
};


//3
function deleteSymbols(str, symbols) {
  let arr = str.toLowerCase().split("").filter((item) => !symbols.includes(item)).join("");
  return arr;
}

//4
function sum (){
   let resSum = 0;
   return function (a){
     resSum += a;
     return resSum;
   }
 }
 let finalSum = sum();

