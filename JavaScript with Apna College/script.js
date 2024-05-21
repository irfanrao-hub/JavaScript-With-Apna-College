//Arthimetic operation
/*let a = 5;
let b = 2;
console.log("a = ",a, "& b = ", b);
console.log("a + b= ",a+b);
console.log("a - b= ",a-b);
console.log("a % b= ",a%b);
console.log("a * b= ",a*b);
console.log("a ** b= ",a**b); //5*5=25
*/

//Unary operator
/*let a = 5;
let b = 2;
console.log("a = ",a, "& b = ", b);
a++;
console.log(a);//6 
*/
/*
let a = 5;
let b = 2;
console.log("a = ",a, "& b = ", b);
console.log("a++ = ", a++);//5
console.log(a)
console.log("++a = ", ++a);//7
console.log("--a = ", --a);//6 
console.log("a-- = ", a--);//6 
*/

//Assign operator

/*
let a = 5;
let b = 2;
a /= 4; 
console.log("a = ",a, "& b = ", b);//1.25
*/
/*
let a = 5;
let b = 2;
a **= 4; //a = a ** 4;
console.log("a = ",a);//625
*/

//Comparison op

/*
let a = 5;//number 
let b = "5";//sting-->number

console.log( "a !== b", a !== b);ture
*/


/*
let a = 6;//number 
let b = 5;//
console.log( "6 >= 5", a >= b);
*/

//Logical Operator And
/*
let a = 6;// 
let b = 5;//
let cond1 = a > b;//ture
let cond2 = a === b;//fALSE
console.log( "cond1 && cond2 =", cond1 && cond2);//False
*/

//or operator

/*
let a = 6;// 
let b = 5;//
let cond1 = a > b;//ture
let cond2 = a === b;//fALSE
console.log( "!(6<5) =", !(a ===6));//ture
*/

//Conditional statment

/*
let age = 18;

if (age>=18){
    console.log("you can vote");
}

if (age>18)
    {
        console.log("you cannot vote");
    }
*/

//if and if else statment
/*
let mode = "dark";
let color ;

if (mode === "dark") {
    color = "black";
}else
 {
    color = "white";
}
console.log(color);//light
*/
//with if else find even odd num
/*
let n = 20 ;
if (n%2==0)
{
    console.log("even num",n);
}
else
{
    console.log("odd num", n);
}
*/
 // if else if 
 /*
 let mode = "day";
 let color ;

 if (mode === "dark")
 {
    color = "black";
 }else if (mode === "day"){
    color = "light";
 }
 else 
 {
   color = "day and night";
 }
 console.log(color);

 if (mode === "dark") 
  {  console.log(mode);
  }
  */

  //ternary operator
/*
  let age =25;
  let result = age >= 18 ? "adult" : "not adult";//simple as like if else.
  console.log (result);
  */

  //practice 01
/*
  let number = prompt("enter a number =");
  if (number%5 === 0)
    {
        console.log(number,"is num is multiple of 5")
    }else 
    {
        console.log(number, "is num not multiple of 5")
    }
    */
//2nd practice

    let score = prompt("enter a number of student =");
    if (score >= 80)
        {
            console.log(score,"grade is A")
        }else if (score >= 70)
            {
                console.log(score,"grade is B")
            }else if (score >= 60)
            {
                console.log(score,"grade is C")
            }else if (score >= 50)
                {
                    console.log(score,"grade is D")
                }else 
                {
                    console.log(score, "grade is f")

                }


                //chapter #2---