// console.log("one");
// console.log("two");

// setTimeout(
//     () => {
//         console.log("hello");
//     }, 4000);
//     console.log("three");
//     console.log("fours");
// //output is
// //  one
// //  two
// // three
// // four
// // hello
// // bcz Asynchronous thaats no wait for time out


// //caallback synchronous
// function sum(a, b){
//     console.log(a + b);
// }
// function calculator(a, b, callback) {
//     callback(a, b);
// }
// calculator(1, 2, sum); just call function


// function sum(a, b){
//     console.log(a + b);
// }
// function calculator(a, b, callback) {
//     callback(a, b);
// }
// //this way be a accurate output.
// calculator(1, 2, (a, b) =>{
//     console.log(a + b);
// }
// );
//es terha synchronous and asynchronous call back ke through work krty hai
// const hello = () =>
//     {
//         console.log("Hello");
//     }
//     setTimeout(hello, 3000);

//CALLBACK HELL
//Nesting
//a function with in a function
//a lloop with in aloop
// let age = 19;
// if(age>=18){
//   if (age >=60) {
//         console,log('senior');

//     } else {
//         console.log('middle');
//     }
// }  else {
//     console.log ("child");
// }

//get data with settimeout od 2sec 
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId); 
//        if (getNextData) { 
//         getNextData();
//        }
//     }, 2000);
// }

// //callbackhell
// // getData(1, () => {
//     console.log("getting data2..");
// //     getData(2, () =>
// //     {
// console.log("getting data3..");

// //         getData(3, () =>{
//     console.log("getting data4..");

// //             getData(4, () =>
// //             {
// console.log("getting data5..");

//                 getData(5);
//             })
//         }
            
//         );
//     })
// });
// output is after2sec
// data 1
//after2sec then next
// data 2
//after2sec then next
// data 3
//after2sec then next
// data 4
//after2sec then next
// data 5


//PROMISES

// let promise = new Promise((resolve, reject) => {
//     console.log("i am a peomise");
//     resolve(123);
// });
//promise progrsm
//is mai ak function bbnya jo data get krwa raha hai or us mai
//  phir time setout key howa jis sy promise keh ra ke is 
// duration ke bd mai mai tumhain tumhra dataaa return krwa du ga
//  phir jb return hotjti wo promise succes hojata ya resolve hojata..
// or agr data show na hota to rejection ajane the
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId); 
//             resolve("Success");
//            if (getNextData) { 
//             getNextData();
//            }
//         }, 5000);
//     });
//     }

// or agr data show na hota to rejection ajane the

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId); 
//             // resolve("Success");
//             reject("Error");
//            if (getNextData) { 
//             getNextData();
//            }
//         }, 5000);
//     });
//     }
//errror ageya fuction ny 5sec bd data show mhi krwya



//proimse function thst use .then &.catch;
    // const getPromise = () => {
    //    return new Promise ((resolve, reject) =>{
    //         console.log("I am Promise");
    //         resolve("Succes");
        
    //     })
    // }
    // let promise = getPromise();
    // promise.then(() => {
    //     console.log("Promsie Fulfilled");
    // });

    // promise.catch((err) => {
    //     console.log("rejected", err);
    // });


//proimse function thst use .then &.catch;
    
//     function asyncFunc() {
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("some data1");
//                 resolve ("Success");
//             }, 3000);
//         });
//     }

//     //ye upr wala data  api sy miltaaaa
// console.log ("fetching data1");
//     let p1 = asyncFunc();//phir es terha us function ko varible de kr consolekrwa dety hay.
//     p1.then((res) =>{
//         console.log(res);
//     });



// function asyncFunc1() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve ("Success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve ("Success");
//         }, 4000);
//     });
// }
// //ye upr wala data  api sy miltaaaa
// console.log ("fetching data1.....");
// let p1 = asyncFunc1();//phir es terha us function ko varible de kr consolekrwa dety hay.
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2..");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
    
// });



// promise Chain
// function getData(dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("Data", dataId);length
//             resolve("success");
//         }, 2000);
//     });

// }
// // promise Chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then (() => {
//         console.log(res);
//     })

// });

//ye upr wala method bi theek hy but es ke elWA OR BEHTR METHOD HY WO YE HY
// function getData(dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("Data", dataId);length
//             resolve("success");
//         }, 2000);
//     });

// }

// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });
// .then mai ak or .then ese he hum promise chain kehty hain.

//promise is better then callback function
//promise is use chain that acces direct function name .then and error covering is used for catch

//but asyn-Await is much better then both


///Await
function api() {
    return new Promise ((resolve, reject) => 
    {
        setTimeout(() => {
            console.log("weather data ");
            resolve (200);
        }, 2000);
    });
}
async function getWeatherData() {
    await api();//1st
    await api();
}

function getData(dataId){
    return new Promise ((resolve, reject) => 
        {
            setTimeout(() => {
                console.log("data", dataId);
                resolve ("success");
            }, 2000);
        });
}

//Async-Await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);

}

//IIFE=> Immediately invoked function expresssion
//ye upr wali await ke IIFE sy solve hoga nechy


function api() {
    return new Promise ((resolve, reject) => 
    {
        setTimeout(() => {
            console.log("weather data ");
            resolve (200);
        }, 2000);
    });
}
async function getWeatherData() {
    await api();//1st
    await api();
}

function getData(dataId){
    return new Promise ((resolve, reject) => 
        {
            setTimeout(() => {
                console.log("data", dataId);
                resolve ("success");
            }, 2000);
        });
}

//Async-Await//IIFE
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);

})();
//ye function bgr call keye immedaitly run hojye ga but 
//weak ppoint is that ye function again hum used nhi kr skta 
//tb he use krty jb hum ne function ak he br chalana hoo
