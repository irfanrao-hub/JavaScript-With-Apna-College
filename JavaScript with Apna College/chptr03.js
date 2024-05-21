//print 1 to 5;
/*
for(let a= 1; a<=5; a++)
    {
        console.log("Bridge Zone",) ;//5 time  execute
    }

    */


    //Calculate sum 1 to 5
/*
    let sum = 0;
    let n =6;
    for (let i =1; i<=n; i++){
        sum =sum + i;
    }
    console.log("sum is =",sum);//sum is =21;
    console.log("Loop has ended");
*/
//a connot execute after block;example of Let;
/*
for(let a= 1; a<=5; a++)
    {
        console.log("a = ", a) ;//5 time  execute
    }
    console.log(a);
    */

    //infinite loop have never ended 
  //  infinite loop have independently work that mean never condition is false

  //while Loop
  /*
  let i =  1;
  while(i<=5){
    console.log("bridge Zone:")
    i++;
  }
*/
//Do while Loop
/*
let n = 1;
do
{
  console.log("bridge Zone");
  n++;
}
while(n<=7)
*/
//in Do while if first condition is wronge then just one time must be execute a statment;
//for of Loop
/*
let str = "Javascript";
let size = 0;
for(let i of str)
    {
        //iteration of character
        console.log("i =", i);
        size++;
    }
    console.log ("String Size =", size);
    */
//for in Loop
/*
let student = {
    name:"Irfan",
    age:24,
    cgpa:2.99,
    ispass:true,
};
for(let key in student)
    { 
        
        console.log("key =", key,"value =", student[key]);// Show object key and also key value.
    }

*/

//Practice
//print all even from 0 to 100;
/*
let n ;
for(n=0;n<=100;n++)
    {
        if(n%2==0)//condtiton of even num 0 to 100;
            {
            console.log("Print even number =", n)
        }
    
    }
*/

//practice 2
/*
let gamenumber = 25;
let usernum = prompt ("Guess the game num : ");
while(usernum != gamenumber)
    {
       usernum = prompt(" You entered wronge num, Guess again : ");
    }
    console.log("Congratualation, you entered right number :");
    */

    ///String

//let str = "softwarehouse";
//console.log(str[3]);// t thats why t index is 03.

//templte literal
/*

let specialstring = `this is a template literal ${1+2+3} `;
console.log(specialstring);
*/

/*
let obj = {
    item:"pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;// this way is templte literal 
console.log(output)
console.log("The cost of ", obj.item,"is", obj.price, "rupees" );
*/
//String Method / Function in Js;
//--> str.toUppercase()
/*
let str = "SoftwAREHOUSE";
str = str.toUpperCase();
console.log(str);
*/
//-->Trim method

/*
let str = "      SoftwAREHOUSEJs";
console.log(str.trim());//thats remove start space;
*/

//--> slice string
/*
let str = "Hellobuddy";
console.log(str.slice(1,5))// ello 
*/
//concat add two string
/*
let str1 = "Hello";
let str2 = "buddy";
let res = "I am learning coding from " + str1 + str2;
console.log(res);
*/
 
//str. replace
 /*
let str = "hellololo";
console.log(str.replaceAll ("lo", "p"))//helppp
*/

//str.charAt()
/*

let str = "Ilovepakistan";
console.log(str.charAt(3));//v
*/
//Practice
/*
let user = prompt("Enter USer name :");

let username = `${user}`;

let username2;
console.log(username + `${user.length}`);
*/
 
