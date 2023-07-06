function findout(str) {
    let main = "rehman"
    for (let i = 0; i < str.length; i++) {
        let j;
        for (j = 0; j < main.length; j++) {
            if (str[j + i] !== main[j]) {
                break
            }
        }
        if (j == main.length) {
            return true
        }
    }
    return false
}
console.log(findout("my name is fayyazurrehman"));



function findLength(str) {
    let main = "fayyaz";
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        let j;
        for (j = 0; j < main.length; j++) {
            if (str[j + i] !== main[j]) {
                break
            }
        }
        if (j == main.length) {
            sum++
        }
    }
    return sum
}
console.log(findLength("my name is fayyaz fayyaz is good programer fayyaz is good boy fayyaz fayyaz fayyaz fayyaz"));



function nonrepeated(arr){
    let arr = []
    for(let i = 0 ; i < arr.length; i++){

     for(let j = 0 ; j < arr.length ; j++){
        
     }
    }
}
console.log(nonrepeated([1,2,33,4,5,6,77,8,9,1010]))