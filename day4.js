// 1}

function primenum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "this is not prime number"
        }
    }
    return "this is prime number"
}

let pro = prompt("enter the number")

console.log(primenum(pro));



// 2. find the prime number between 1 to 100



// 3. find the maximum of an array number using for loop

function maximum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (max < currentElement) {
            max = currentElement;
        }
    }
    return max;
}

console.log(maximum([2, 4, 5, 7, 8, 9, 5, 2, 3, 23]));



// 4. find the minum of an array number using for loop

function minmum(arr) {
    let min = +Infinity
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (min > currentElement) {
            min = currentElement
        }
    }
    return min
}

console.log(minmum([2, 4, 5, 7, 8, 9, 5, 2, 3, 23]));


// 5. find the sum of an array using for loop 

function sumarr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumarr([1, 2, 3, 45, 5, 7, 8, 9, 75]));


// 6. find the sort of an array using for loop

function sortarr(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i])
    }
    return main.sort()
}

console.log(sortarr(["A", "C", "H", "D", "B", "E", "G", "F"]));