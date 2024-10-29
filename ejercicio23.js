const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

let small = []
let medium = []
let large = []

for (const film of movies){
    if(film.durationInMinutes<100){
        small.push(film)
    }
    else if(film.durationInMinutes>=100 && film.durationInMinutes<200){
        medium.push(film)
    }
    else{
        large.push(film)
    }
}

console.log("Pelicula pequeña:", small);
console.log("Pelicula mediana:", medium);
console.log("Pelicula grande:", large);
