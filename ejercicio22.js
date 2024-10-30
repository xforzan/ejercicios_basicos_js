const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let vegan= []

for (let i = 0; i < fruits.length; i++) {
    vegan.push({ name: fruits[i], isVegan: true });
}


for (i=0; i<foodSchedule.length; i++){
    if(foodSchedule[i].isVegan===true){
        vegan.push(foodSchedule[i])

    }
}
console.log(vegan)