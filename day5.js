fayyazurrehman

function sortarr(arr) {
    for (let i = 0; i < arr.length-1; i++) {
       
        for(let j = i+1 ; j < arr.length ; j++ ){ // 0 + 1 
            if(arr[i] > arr[j]){ // 1 < 3
                let swap = arr[i] //swap = 1
                arr[i] = arr[j] // arr[0] = 3
                arr[j] = swap // arr[1] = 1
            }
        }
        
    }
    return arr
}
console.log(sortarr([1, 3, 4, 2, 5, 7, 6]));


for(let i = 0 ; i <= 10 ; i++ ){
    for(let j = 0 ; j < 5 ; j++){
        document.write("*")
    }
    document.write("<br>")
}


function indexchange(arr){
   let main = [];
   for(let i = 0 ; i < arr.length-1; i++){
    main[i+1] = arr[i]
   }
      main[0] = arr[arr.length-1]
   return main
}

console.log(indexchange([1, 3, 4, 2, 5, 7, 6]));

function indexchange(arr){
    let last = arr.pop()
    arr.unshift(last)
    return arr
}

console.log(indexchange([1, 3, 4, 2, 5, 7, 6]));

function add(arr){
    let a = arr.pop();
    return arr
}
console.log(add([2,3,4,5]));

function rotate(arr){
    let last = arr.pop()
    arr.unshift(last)
    return arr
}
console.log(rotate(1,2,3,4,5,6,7,8,9));

