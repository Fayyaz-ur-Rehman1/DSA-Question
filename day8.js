// 1}

function leapyear(arr) {
    if (arr % 4 === 0) {
        console.log("number is leapyear")
    } else {
        console.log("number is not leapyear")
    }
}
leapyear(1)

// 2}

function leapyear() {
    let main = []
    for (let i = 1900; i < 2233; i++) {
        if (i % 4 === 0) {
            main.push(i)
        }
    }
    return main
}
console.log(leapyear());

// 3}

function devied() {
    let main = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            main.push(i)
        }
    }
    return main
}
console.log(devied());

// 4}

function prime() {
    let main = []
    let i, j;
    for (i = 2; i <= 100; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                break
            }
        }
        if (j == i) {
            main.push(i)
        }
    }
    return main
}
console.log(prime());

// 5}

// function strmax(str) {
//     let newstr = "";
//     let main = []
//     for (let i = 0; i < str.length; i++) {
//         main.push(str[i])
//         if () {
//             newstr += main;
//         }
//     }
//     return newstr
// }

// console.log(strmax("hello brother i am fayyaz"));

function sortarr(arr){
     let main = []
     for(let i = 0 ; i < arr.length ; i++){
         
        main.push(arr[i])
     }
     return main
}

console.log(sortarr([2,1,5,3,7,5,4,6]));