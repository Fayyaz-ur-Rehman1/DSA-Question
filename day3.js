
Fayyazurrehman

console.log("Fayyazurrehman");

// 1}

function reverse(arr){
    let main =  [];
    // let po = arr.pop()
    for(let i = arr.length-1 ; i >= 0 ; i--){
    main.push(arr[i])
    //   main.push(arr.pop())
    }
    return main
}

console.log(reverse([1,2,3,4,5,6,7]));

// 2}

function filter(arr){
    let main = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].length >= 5){
            main.push(arr[i]);
        }
    }
    return main;

    // return arr.filter(function (elm) {
    //     return elm.length >= 5
    // })
}

console.log(filter(["fayyaz" , "moien bhai" , "ahsen sir" , "anas" , "yaseen" , "hy" , "hi"]));

// 3}

function find(arr, num) {
    let count = []
    for (let i = 0; i < num; i++) {
        count.push(arr[i])

    }
    if (num == null) {
        return arr[0]
    }
     else if (num > arr.length) {
        return arr
    }

    for(let i = arr.length-num; i < arr.length ; i++){
      count.push(arr[i])
    }
    return count
}

console.log(find([8, 9, 3, 4, 5, 6, 7], 5));