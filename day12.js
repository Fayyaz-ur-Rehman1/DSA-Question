// fayyazurrehman

// 1}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i = 0 ; i <= 5 ; i++ ){
    for(let j = 1 ; j <= i ; j++){
              document.write(j + " ")
    }
    document.write("<br>")
}


// 2}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let count = 1
for(let i = 1 ; i <= 5 ; i++){
    for(let j = 1 ; j <= i ; j++){
        document.write(count++ + " ")
    }
    document.write("<br>")
}


// 3}

// 1	2	3	4	5	6	7	8	9	10	
// 2	4	6	8	10	12	14	16	18	20	
// 3	6	9	12	15	18	21	24	27	30	
// 4	8	12	16	20	24	28	32	36	40	
// 5	10	15	20	25	30	35	40	45	50	
// 6	12	18	24	30	36	42	48	54	60	
// 7	14	21	28	35	42	49	56	63	70	
// 8	16	24	32	40	48	56	64	72	80	
// 9	18	27	36	45	54	63	72	81	90	
// 10	20	30	40	50	60	70	80	90	100

for(let i = 1 ; i <= 10 ; i++){
    for(let j = 1 ; j <= 10 ;  j++){
       document.write(i * j + " ")
    }
    document.write("<br>")
}


// 4}

// [1,2,4,5],[3,4,6]
// [1,2,3,4,5,6]

function union(arr1 , arr2){
    let main = arr1;
    
    for(let i = 0 ; i < arr2.length ; i++){
        for(let j = 0 ; j < main.length; j++){
            if(arr2[i] !== main[j]){
                main.push(arr2[i])
                break
            }
        }
    }
    return main
}

console.log(union([1,2,4,5] , [3,4,6]));
