const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
let menores=[];

console.log("Usuarios mayores de edad:")
for (const user of users){
    if(user.years<18){
    menores.push(user.name)
    }
    else if (user.years>=18){
        console.log(user.name)
    }
  }
  console.log("Usuarios menores de edad:", menores);