//Array
/*
let  marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);// property
*/
// let hero = ["irfan","imran", "ali", "abdullah","Umar", "zain"];
// for (let i = 0; i < hero.length; i++)
// {
//     console.log(hero[i]);
// }
//--->for of loop use in array 
//this loop use for find the length of each attribute/ iterate object proprties
// let cites = ["vehari", "Hasilpur","multan", "lahore", "burewala"];
// for (let city of cites ){
//     console.log(city.length);
// }


///For in loop
//for in loop is used for find key and also key value
// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male'
//   };
  
//   for (let key in person) {
//     console.log(key + ': ' + person[key]);
//   }


// let marks = [85, 97, 44, 37, 76, 60];
// let sum=0;
// for (let val of marks ) {
//     sum += val; 
// }
// let avg =sum/marks.length;
// console.log(`Avg marks of the class = ${avg}` );

//Practice 02
    
// let item = [250, 645, 300, 900, 50];

// for (let i = 0; i < item.length; i++ )
//     {
//         let offer = item[i]/10;
//         item[i] -=offer;
        
//     }
//     console.log(item);

//Array Method
//---> PUSh

// let fooditems = ["banana", "Apple", "tamato", "chips"];
// fooditems.push("mango", "paneer");
// console.log (fooditems);


//---> POP

//  let fooditems = ["banana", "Apple", "tamato", "chips"];
//  console.log (fooditems);
//  let deleteditem = fooditems.pop();
//  console.log (fooditems);
//  console.log ("deleted", deleteditem);


//--->TO STRING

// let fooditems = ["banana", "Apple", "tamato", "chips"];
// console.log(fooditems);
// console.log(fooditems.toString());
// CONCAT
// let heros = ["Imrankhan", "quaid","allama", "laiqat"];
// let tcheros = ["nawaz", "foji", "shahbaz"];


// let hero = heros.concat(tcheros);
// console.log(hero);

//unSHIFT

// let heros = ["Imrankhan", "quaid","allama", "laiqat"];
// heros.unshift("jalal");
// console.log(heros);

//SHIFT
// let heros = ["Imrankhan", "quaid","allama", "laiqat"];
// let val  = heros.shift();
// console.log(heros);
// console.log("deleted", val);

//SLICE

// let heros = ["Imrankhan", "quaid","allama", "laiqat"];
// console.log(heros);
// console.log(heros.slice(1, 3));

// let heros = ["Imrankhan", "quaid","allama", "laiqat"];
// console.log(heros);
// console.log(heros.slice(1));

// //Add Element
// let heros = [1, 2, 3, 4, 5, 6];
// console.log(heros);
// console.log(heros.splice(1, 2, 101,102));
// console.log(heros);

// //delete Element
// let heros = [1, 2, 3, 4, 5, 6];
// console.log(heros);
// console.log(heros.splice(3, 1));
// console.log(heros);

// //Replace Element
// let heros = [1, 2, 3, 4, 5, 6];
// console.log(heros);
// console.log(heros.splice(3, 1, 101));
// console.log(heros);


//PRACTICE 
// //---A
// let company = ["bloomberg","microsoft", "Uber", "google", "ibm","netflix"];
// console.log(company);
// console.log(company.shift());
// console.log(company);
// //---b
// let company = ["bloomberg","microsoft", "Uber", "google", "ibm","netflix"];
// console.log(company);
// console.log(company.splice(2,1, "Ola"));
// console.log(company);

// //---C
// let company = ["bloomberg","microsoft", "Uber", "google", "ibm","netflix"];
// console.log(company);
// console.log(company.push("amazon"));
// console.log(company);


// let cities = ["vehari", "Hasilpur","multan", "lahore", "burewala"];
// for (let city of cities) {
//     console.log(`Length of ${city}: ${cities.length}`);
//   }

