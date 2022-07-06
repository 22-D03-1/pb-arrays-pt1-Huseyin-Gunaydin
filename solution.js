//Frage 1
 const euroCities=["Paris", "Londra", "Valletta", "Prag", "Roma"];
 console.log(euroCities)

 const secondCity = euroCities[1];
 console.log(secondCity);


 //Frage2
 const eintrag = euroCities.unshift("Berlin");
 console.log(euroCities);

//Frage 3
const laenge =euroCities.length;
console.log(laenge);


//Frage 4

const entferneletzte = euroCities.pop();
console.log(euroCities);

//Frage 5 

const neueCity = ["Budapeste"];
const kombinieren = euroCities.concat(neueCity);
console.log(kombinieren);

//Frage 6 
const asianCities= ["Tokyo", "Bangkok", "Abu Dhabi", "Jakarta", "Dubai"];
 console.log(asianCities);

//Frage 7
const WorldCities = euroCities.concat(asianCities);
console.log(WorldCities);

//Frage 8
const reverse = WorldCities.reverse();
console.log(reverse);

//Frage 9

const entfern = euroCities.splice(2,1);
console.log(euroCities);

//Frage 10
console.log(asianCities);
const speichere = asianCities.slice(1,4); 
console.log(speichere);

//Frage 11
console.log(WorldCities);
const  verendert = WorldCities.splice(2,1, "Toronto");
console.log(WorldCities);




//Frage 12
console.log(WorldCities);
const frage12 =WorldCities.splice(1,0, "Washington");
console.log(WorldCities);

//Frage 13

console.log(WorldCities.join(" "));


// //bonus
// let hellowelt = ["H", "e", "l", "l", "o", "W", "e", "l", "t"];
//       console.log(hellowelt.reverse());



// //**Bonus
// let halloWelt = "HalloWelt";
// let neueHalloWelt="";

// for(let i=halloWelt.length -1; i>=0; i--){
//     neueHalloWelt+=halloWelt[i];
// }
// console.log(neueHalloWelt);





