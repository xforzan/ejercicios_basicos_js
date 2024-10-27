const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    let count = {}
    for( let i=0; i<list.length; i++){
        const word = list[i];
        if (count[word]) {
            count[word]++; // Incrementa el conteo si ya existe
        } else {
            count[word] = 1; // Inicializa el conteo en 1 si es la primera vez
        }
    }

    return count; // Devolver el objeto con el conteo de palabras
}

// Probar la función y mostrar el resultado
console.log(repeatCounter(words));