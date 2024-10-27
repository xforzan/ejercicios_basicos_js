const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    let lista = []
    for (let i=0; i<list.length; i++ ) {
        if (!lista.includes(list[i])){
            lista.push(list[i])

        }
    }
    return lista
  }

  console.log(removeDuplicates(duplicates))