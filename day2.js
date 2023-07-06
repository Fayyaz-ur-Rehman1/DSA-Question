

// // // 1}

fayyazurrehman
function int(num) {
return Number(num)
return num * 1
return num / 1
return num -1 + 1
let num1 = num.split("").reverse().join('')
return Number(num1)
}
console.log(int("32"));

// // 2}

let pro1 = prompt("Enter the value")

function count(str) {
    let sum = 0;
    let vowal = ["a", 'e', 'i', 'o', 'u'];
    let main = []
    let newstr = ""

    for (let i = 0; i < str.length; i++) {
        if (vowal.includes(str[i])) {
            // sum = sum + 1
            // main.push(str[i])
            newstr += str[i]
        }
    }
    // return sum
    // return main
    return newstr
}
console.log(count(pro));

console.log(count("celebration"));
console.log(count("plam"));
console.log(count("icecream"));

// // 3}

function count(str) {
    let main = "";
    for (let i = 0; i < str.length; i++) {
        main += str[i] + str[i]
    }
    return main
}

console.log(count("celebration"));
console.log(count("plam"));
console.log(count("icecream"));

// // 4}

function user(str) {

    switch (str) {
        case "one":
            return 1
        case "two":
            return 2
        case "three":
            return 3
        case "four":
            return 4
        case "five":
            return 5
        case "six":
            return 6
        case "seven":
            return 7
        case "eigth":
            return 8
        case "nine":
            return 9
        case "ten":
            return 10
//         default:
//             alert("worng input");
//             let pro = prompt("Enter the Number");
            // user(pro)
    }
}


let pro = prompt("Enter the Number")
console.log(user(pro.toLocaleLowerCase()));


// // // 5}

let arr = ["one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten"];

if (arr.includes(pro)) {
    console.log(user(pro.toLocaleLowerCase()));
} else {
    alert("Plz Enter Rigth Number")
}


pro.includes(user()) ?  console.log(user(pro.toLocaleLowerCase())) : alert("plz enter ur righ")

function fn(str) {
    let vowal = ['a', 'e', 'i'];
    let main = ""
    let constent = ""
    for (let i = 0; i < str.length; i++) {
        if (vowal.includes(str[i])) {
            main += str[i]
        } else {
            constent += str[i]
        }
    }
    return main + constent

}

console.log(fn('apple'));//aeppl