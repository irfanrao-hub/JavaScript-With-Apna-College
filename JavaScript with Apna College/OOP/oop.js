// const user = {
//     name : "irfan",
//     loginCount : 8,
//     signedIn : true,

//     getuserdetail: function() {
//         // console.log("Got user detail from Database ");
//         // console.log(`Name: ${this.name}`);
//         // console.log(this);
//     }

// }

// const user2 = {
//     name : "irfan",
//     loginCount : 8,
//     signedIn : true,

//     getuserdetail: function() {
//         // console.log("Got user detail from Database ");
//         // console.log(`Name: ${this.name}`);
//         console.log(this);
//     }

// }


// console.log(user.name);
// // console.log(user.getuserdetail());
// console.log(this);//globally by this
// const promiseOne = new Promise();//new is constructor

function user(name, loginCount,signedIn) {
    this.name = name;
    this.loginCount = loginCount

    this.greeting = function() {
        console.log(`welcome ${this.user}`);
    }

    return this
}

const userOne = new user("irfan", 12, true)
const userTwo = new user("chaiAurCode", 11, false)
console.log(userOne.constructor);


// console.log(userOne);
// console.log(userTwo);


//constructor
//jb bi new write krty hy to empty object create hota use instance
//constructor function call new keyword sy
//jo bi this keyword mai wo sb inject ho jaty hai
//phir wo return krwwa deta hai 