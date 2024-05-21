//FUNCTION IN JS

// function myfunction(){
//     console.log("msg");
// }
// myfunction();
// myfunction();



// function myfunction(msg){//parameter-->input
//     console.log(msg);
// }
// myfunction("Brigde Zone");//Argument

//function -->2 number, sum
// function sum(x, y){
//     console.log(x + y);
// }
// sum(1, 2);

//function -->2 number, sum with reurn function
// function sum(x, y)
// {//local variable --? scope -->block of code
//    s = x + y;
//    console.log (x);
//    return s;
// }
// let val = sum(1, 2);
// // console.log(val);

// //ARROE FUNCTION
// //sum 2 num with arrow function
// const arrowsum = (a, b) =>{
//     console.log(a + b);
// }
// arrowsum(1, 2);

//mul 2 num with arrow function\
// let arrowmul = (a, b) => {
//     console.log(a * b);
// };
// arrowmul(3, 2);//2

//
// const printHello = () => {
//     console.log("Heelo");
// };
// printHello();


//PRACTICE 
//find vowel char
// function countVowels(str){
//     let count = 0;
//     for(const char of str)
//         {
//             if(char === "a" || char === "e" || char === "i" || char === "i" || char === "o" || char === "u" ){
//                 count++;
//             }
            
//         }
//         console.log(count);

// }
// countVowels("brigdeZone");

//find vowel function with arrow function

// const countVowels= (str) =>{
//     let count = 0;
//     for(const char of str)
//         {
//             if(char === "a" ||
//              char === "e" ||
//               char === "i" ||
//                char === "i" ||
//                 char === "o" ||
//                  char === "u" 
//                 )
//                  {
//                 count++;
//             }
            
//         }
//         return count;// use return function  
//         // console.log(count);

// };
// // countVowels("brigdeZone");

//for each loop

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printval(val)
// {
//     console.log(val);
// });

//forEach with arrow function
// let arr = ["irfan", "ZAIN", "fadi"];
// arr.forEach((val) =>
// {
//     console.log(val.toUpperCase());
// });

//for each consist 3 parameter 
//value,item
//index,idx,position
//array,arr

// let arr = ["irfan", "ZAIN", "fadi"];
// arr.forEach((val,idx) =>
// {
//     console.log(val.toUpperCase(),idx, arr);
// });

// const coding = ["js", "ruby", "java","python","cpp"];

// coding.forEach( function (val) {
//     console.log(val);//find just coding valuues like : js , rubby etc

// } )
// //arrao function use in foreach and also use in 3parameter;
// coding.forEach((item, idx, arr) => {
//     console.log(item, idx, arr);//find value bi or index bi or array list bi
// })
//Practice

// let num = [2,3,4,5,6];

// num.forEach((num) => {
//     console.log(num * num);
// });


// let num = [2,3,4,5,6];

// let calsqure = ((num) => {
//     console.log(num * num);
// });
// num.forEach(calsqure);




//MAp Array method

// let num = [2,3,4,5,6];

// let newArr = num.map((val) => {
//     return val*2;
//     //console.log(val);
// });

// console.log(newArr);
// const numbers = [1, 2, 3, 4, 5];

//Using map() to double each element of the array
// const doubledNumbers = numbers.map((num)=> {
//     return num*2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


//FILTER Array  Method

// even num find through filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenarr = arr.filter((val) => 
// {return val % 2 == 0}
// );
// console.log(evenarr);

//Reduce Array method
//sum through reduce
// let arr = [1, 2, 3, 4, 5];

// const output = arr.reduce((result, val) =>{
//     return result + val;
// });
// console.log(output); 

// find largest through reduce aray method 

// let arr = [1, 2, 3, 4, 5];

// const output = arr.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// });
// console.log(output); 

//Practice
//filter out the marks of student that scored 90 
// 

//2ND PRACTICE 
//input from user 1 to n
//reduce method use calculate sum of all num in array
//reduce method use product of all num in array

// let n = prompt("Enter a Array : ");

// let arr = [];

// for (let i=1;i<=n; i++ )
// {
//     arr[i - 1] = i ;
// }

// console.log(arr);
// let sum = arr.reduce((prev, curr) =>
//     {
//     return prev + curr;
// })

// console.log(`Sum is : ${sum}`);

// let factorial = arr.reduce((prev, curr) =>
//     {
//     return prev * curr;
// })

// console.log(`factorial is ${factorial}`)


//Higher Order array loop
//filter
//reduce
//map






//for of loop
// let divs = document.querySelectorAll(".box");
// idx=1;
// for(div of divs)
//     {
//         div.innerText =    `new unique value is ${idx}`;
//         idx++;
//     }

//for of loop

// const arr = [1,2,3,4,5];
// for (const num of arr)
//     {
//         console.log(num);
//     }
// //output is 
//1
//1
//3
//4
//5

// const greetings = "Hello world!";
// for (const greet of greetings){
//     console.log(`each char is : ${greet}`)
// }

//For In Loop
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
//  for (const key in myObject){
//     console.log(key);//this find just key like js,cpp,rb etc
//     console.log(`${key} shortcut is for ${myObject[key]}`);//this output is key with valuees
//  }



// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
//  for (const key in myObject){
//     // console.log(key);//this find just key like js,cpp,rb etc
//     // console.log(`${key} shortcut is for ${myObject[key]}`);//this output is key with valuees
//  }
// const programming = ["js","cpp","rb","swift"]
// for (const key in programming)
// {
//     console.log(key);//is ke output mai es object ke key btye ga like index jo hidden hota es key sy show ho ga us sy pta chlta iteration howe hain
// }
//output is 
//0
//1
//2
//3

//for in mai us object ya array ke iteration btata like index yaha sy yaha tk;
//for of mai us obj ya array ke key or us ke value direct show krwaty hain;

