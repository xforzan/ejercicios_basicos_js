const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let suma= 0
  for(i= 0; i< list.length; i++){
    if( typeof list[i] == "string"){
    suma = suma + list[i].length
    
    }
    else if (typeof list[i] == "number") {
    suma= suma + list[i]
    }
  }
  return suma
}

console.log(averageWord(mixedElements))