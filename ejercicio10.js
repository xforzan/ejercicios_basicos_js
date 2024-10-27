const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let suma = 0
    for (i=0; i<numberList.length; i++){
        suma = suma + numberList[i]
      }
    return suma / numberList.length
}

console.log(average(numbers))