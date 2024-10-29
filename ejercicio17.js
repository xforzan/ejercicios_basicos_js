const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const data in alien){
    console.log(`La propiedad ${data} tiene cómo valor: ${alien[data]} `)
}