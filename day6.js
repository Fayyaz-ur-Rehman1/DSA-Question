// fayyaz

// 1}

function divied(first, min) {
    let i;
    for (i = first; i > 1; i--) {
        if (min % i == 0 && first % i == 0) {
            break
        }
    }
    return i
}
console.log(divied(18, 12));

// 2}

function factorial(num){
    let fact = 1
    let i ;
  for( i = num ; i > 1 ; i--){
       fact *= i
  }
  return fact
}
console.log(factorial(6));

// 3}
function factorial(num){
    let fact = 1
    while (num > 0) {
      fact *= num
      num--
    }
    return fact
}
console.log(factorial(5));

// fibonacci
// 4}
function fibonacci(num){
    let sum = [1,1]
    let i;   
    for( i = 0 ; i < num; i++){
       sum.push(sum[i] + sum[i +1])

    }
    return sum
}
console.log(fibonacci(10));
