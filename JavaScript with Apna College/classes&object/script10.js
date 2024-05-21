// //prototype 
//js mai hr chez object hai
//function  function bhi hai or  object bhi.
// object acces by .dots
function multipleBy5(num) {
    return num*5
}
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
//by default kuch method store hoty hai jese ke prototype mai



function createUser(username, score){
    this.username = username
    this.score  = score
}

createUser.prototype.increment = function() {
    this.score++//this mtlb jis ny bi bulya hy us ke score mai plus krdo 
}
createUser.prototype.printMe = function(){
console.log(`score is ${this.score}`);//this mtlb jis ka bi score pocha us ka bta do
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()

// //object and prototype are same method then object will bi used
// const employee = {
//     caltax() {
//         console.log("tax rate is 10%");
//     },
// };


// const karanarjunn = {
//     salary: 50000,

// };
 
// const karanarjunn1 = {
//     salary: 50000,

// };

// karanarjunn.__= employee;
// karanarjunn1.__= employee;
// karanarjunn.__.caltax(); // This will log "tax rate is 10%"
// karanarjunn1.__.caltax(); // This will also log "tax rate is 10%"\
//classes
// class toyotacar {//create class
// start() {
//     console.log("Start");
// }
// stop()
//     {
//         console.log("stop");
//     }

// } 
// let fortuner = new toyotacar();//object acess class
// let lexus = new toyotacar();

// class toyotacar {//create class
//     start() {
//         console.log("Start");
//     }
//     stop()
//         {
//             console.log("stop");
//         }
//         setBrand(brand) {
//             this.brand = brand;
//         }
    
//     } 
//     let fortuner = new toyotacar();//object acess class
//     fortuner.setBrand("fortuner");//call classthen access class and also prototye of object.
//     let lexus = new toyotacar();
//     lexus.setBrand("lexus"); 

//CONSTRUCTOR


// class toyotacar {//create class
//     constructor(brand, mileage) {
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = this.mileage;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop()
//         {
//             console.log("stop");
//         }
  
//     } 
//     let fortuner = new toyotacar("fortuner", 10);//constructor
//     console.log(fortuner);
//     // fortuner.setBrand("fortuner");//constructor//call classthen access class and also prototye of object.
//     let lexus = new toyotacar("lexus",14);//constructor
//     console.log(lexus);
//     // lexus.setBrand("lexus"); 

//INHERITANCE
// class parent {//parent
//     hello() {
//         console.log("hello");
//     }
// }
// class child extends parent {}
// let obj = new child();//child 
// class person {
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
    
//     work() {
//         console.log("do nothing");
//     }
// }
// class doctor extends person {
//     work()
//     {
//         console.log("Treat patient");
//     }
// }
// class engineer extends person {
//     work()
//     {
//         console.log("solve problems, build somethig");
//     }
// }
// let irfanobj = new engineer();
// let raoobj = new doctor();

// practice

// class user {
//     constructor (name, email){
//         this.name = name ;
//         this.email= email;
//     }
//     viewdata( ){
//         console.log("data = ", DATA);
//     }
// }
// let student1 = new user("irfan", "abc@email.com");
// let student2 = new user("Ab", "ab@email.com");

//ERROR handling
// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b =",b);
// console.log("a + b", a+b);
// console.log("a + b", a+c);//error ocurr// agr js mai error ajata hy to jaha error ho wahe code ruk jta hy 
// console.log("a + b", a+b);
// console.log("a + b", a+b);

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b =",b);
// console.log("a + b", a+b);
// //agr hmy lgta hy ke is sy agli line mai error hy to error handle krne ke liye hum try catch method use kary gy
// try {
// console.log("a + b", a+c);}
// catch(err){
//     console.log(err);
// }
// console.log("a + b", a+b);
// console.log("a + b", a+b);


