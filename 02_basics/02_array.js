const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][2]);

let allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

// jo push hai vo existing array me hi push karta hai par jo concat hai vo aapkp return karta hai naya array 

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) 
const real_another_array1 = another_array.flat(1) 
const real_another_array2 = another_array.flat(2) 
console.log(real_another_array);console.log(real_another_array1);
console.log(real_another_array2);



console.log(Array.isArray("divyanshu"));
console.log(Array.from("Divyanshu"));
console.log(Array.from({name: "Divyanshu"}));  // intresting 
console.log(Array.from({name: "Divyanshu"}));  

let score1 = 100
let score2 = 200
let score3 = 300
console.log((Array.of(score1, score2, score3)));
// console.log(Array.of(score1, score2,score3));
console.log((Array.of(score1, score2, score3))[1]);                                                                                                    








   






