// 1}

function num(num) {
    let sum = 0
 while (num > 0) {
    sum += num%10;
    num = Math.floor(num/10)
 }
 return sum
}
console.log(num(106));

// 2}

function even(arr) {
  let sum = 0
  let even = 0
  let odd = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      odd++
      sum += arr[i]
    } else {
      even++
    }
  }
  console.log(odd);
  console.log(even);
  return sum
}
console.log(even([1, 2, 3, 4, 5, 6]));

function percentage(num1) {
  return  num1 * 100 + "%";
}

console.log(percentage(1/8));