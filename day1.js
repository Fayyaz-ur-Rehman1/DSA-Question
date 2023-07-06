// Fayyazurrehman

// // 1}
for(let i = 1 ; i <= 10 ; i++){
  console.log(i * 5);}

// 2}
let a = 10;
let b = 20;
let c = a 
a = b
b = c
console.log(a);
console.log(b);

// 3}

let user = prompt("enter the number");
function userinput(num){
  if(num % 2 == 0){
    console.log("number is even");
  }else {
    console.log("number is odd");
  }
}
userinput(user);

// // 4}

let str1 = prompt("Hello");
console.log(str1.length);

// // 5}

let strreverse = prompt("Hello");
let main1 = ""
for(let i = strreverse.length-1 ; i >= 0 ; i--){
     main1  +=  strreverse[i]
}
console.log(main1);

// // 6} fayyazurrehman

let str = prompt("Hello");
let main = ""
for(let i = str.length-1 ; i >= 0 ; i--){
    main += str[i]
}
if(str === main){
    console.log("this is palen drom");
}else {
    console.log("is not palen drom");
}

// let c = 30;
// let d = 40;
// let e = d
// c = e
// d = c
// console.log(c);
// console.log(d);

// // 7} 
// fayyazurrehman

let strword = prompt("Hello");

function strnum(){
  console.log(strword.split(' ').length);  
}
strnum()


// // 8} fayyazurrehman
// // A = 65
// // Z = 90
// // a = 97
// // z = 122

let strcharcodeat = prompt("Hello");
for(let i = 0 ; i < strcharcodeat.length ; i++){
    console.log(strcharcodeat.charCodeAt(i));
}

