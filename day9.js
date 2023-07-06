function findRepeatingNumber() {
    let store = [];
    let arr = [1, 2, 3, 4, 4, 5, 6, 8, 8];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] != arr[i]) {
          store.push(arr[j]);
          break;
        }
      }
    }
    return store;
  }
  
  console.log(findRepeatingNumber());
  
  
  function sortfunction() {
    let arr2;
    let arr = [8, 3, 4, 6, 9, 1, 2, 5, 7,];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
           arr2 = arr[j];
           arr[j] = arr[i];
           arr[i] = arr2;
        }
      }
      console.log(arr)
    }
    return arr;
  }
  
  console.log(sortfunction());
  
  function findLetterString() {
    let store = [];
    let check = 0;
    let name = "mohammad anash";
    for (let i = 0; i < name.length; i++) {
      if (name[i] == "m") {
        store.push(i + 1);
        check++;
      }
    }
    console.log(check);
    return store;
  }
  
  console.log(findLetterString())
  
  function spaceInLetters() {
    let emptystr = "";
    let name = "mohammad anash";
    for (let i = 0; i < name.length; i++) {
      if (name[i] != " ") {
        emptystr += name[i];
        emptystr += (" ")
      }
    }
    return emptystr;
  }
  
  console.log(spaceInLetters());
  
  function findword() {
    let name = "anash";
    let check = 0;
    let about = "my name is anash and anash is good boy";
    for (let i = 0; i < about.length; i++) {
      for (let j = 0; j < name.length; j++) {
        if (about[i + j] === name[j]) {
          check++;
        }
      }
    }
    console.log(check);
  }
  
  console.log(findword());
  
  function primenumber() {
      let store = [];
      let flag = false;
      for (i = 2; i <= 100; i++) {
          for (j = 2; j < i / 2; j++) {
              if (i % j == 0) {
                  flag = true; break;
              }
              flag = false;
          }
          if (!flag) {
              store.push(i)
          }
      }
      return store;
  }
  
  console.log(primenumber())
  
  function printFiveNumber(){
    for (let i = 1; i <= 10; i++) {
       if(i % 2 != 0){
         console.log(i * 5)
       }
    }
  }
  
  // console.log(printFiveNumber());