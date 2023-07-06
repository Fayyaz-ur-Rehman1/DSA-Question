function uniqueelm(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        var flag = true;
        for (let j = 0; j < main.length; j++) {
            if (arr[i] === main[j]) {
                flag = false
                break
            } 
        }
        if(flag){
            main.push(arr[i])
        }
    }
    return main
}

console.log(uniqueelm([1, 2, 3, 5, 4, 4, 5, 6, 6 , 8,7])); // it return the elements with no reapition

// 2 }

function newprogram(arr){
    let main = [];
     for(let i = 0 ; i < arr.length ; i++){
        let flag = true
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[i] === arr[j] && i !== j){
             flag = false
             break
            }
        }
        if(flag){
            main.push(arr[i])
        }
     }
     return main
}

console.log(newprogram([1,2,3,4,5,4,3,5,9,8]));

// 3}

function repeat(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j] && i !== j && !main.find(element => element === arr[i])) {
                main.push(arr[i]);
            }
        }
    }
    return main
}
console.log(repeat([1,1, 2, 3, 4, 5, 4, 2, 6, 7, 6, 5, 8, 8,6,4]));


// 4}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j < i; j++) {
        document.write("* ")
    }
    document.write("<br>")
}
