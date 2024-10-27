const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name) {
    for (let i=0; i< nameList.length; i++){
        if (nameList[i] === name){
            return(`${name}, está en la lista.`)
        }
        else{
            return(`${name}, no está en la lista.`)
        }
    }
  }

console.log(nameFinder(names,"Marc"))