//EVENTS 
//js event handling high priority as compare to inline event 
//updated ya last result show in output.

// let btn1 = document.querySelector(".btn1");
// btn1.onclick = () => {
//     console.log ("btn1 was click")
//     let a = 25;
//     a++;
//     console.log(a);//26
// }

// let Box = document.querySelector(".box");
// Box.onmouseover =  ()=>
//     {
//         console.log("You are inside div ");

//     };

// let btn1 = document.querySelector(".btn1");
// btn1.onclick = (e) => {
//     console.log (e);
//     console.log (e.type);//type property use
//     console.log (e.target);//target property use
//     console.log (e.clientX, e.clientY);//client property use
// }

//MouseEvent use
//e for element and console can check element with use these property
// let Box = document.querySelector(".box");
// Box.onmouseover =  (e)=>
//     {
//      console.log (e);
//      console.log (e.type);//type property use
//      console.log (e.target);//target property use
//      console.log (e.clientX, e.clientY);//client property use
//     };

//Event Listener 
//that's event are highly used and periority vise high

// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", (e) =>
//     {

//      console.log("button1 was clicked");
//      console.log (e.type);//type property use
//      console.log (e.target);//target property use
//      //console.log (e.clientX, e.clientY);//client property use
//     });
     

// btn1.addEventListener("click", () =>
//     {
//      console.log("button1 was clicked handler2 ");
     
//     });




//     let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", () =>
//     {

//      console.log("button1 was clicked - Handler1");
//      });

//      btn1.addEventListener("click", () =>
//         {
    
//          console.log("button1 was clicked - Handler2");
//          });

//              const handler3 = () =>
//                 {
            
//                  console.log("button1 was clicked - Handler3");
//                  };
//              btn1.addEventListener("click",handler3);

//              btn1.addEventListener("click", () =>
//                 {
            
//                  console.log("button1 was clicked - Handler4");
//                  });

//                  btn1.removeEventListener("click", handler3);

// es sy remove nahi ho ga bcz ye or handler 3 uper wala same hy 
                //  btn1.removeEventListener("click", () =>
                //     {
                
                //      console.log("button1 was clicked - handler");
                //      });

//Practice
//is mai on clickpa mode chnge kra like dark sy light and light sy dark
// let mode = document.querySelector("#mode");
// let currmode = "light Mode";
// mode.addEventListener("click", () => {
//     if(currmode ===  "light") {
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";//es sy full screen black ho gi 
//     } else {
//         currmode = "light";
//         document.querySelector("button").style.backgroundColor = "pink"; //is sy button pink ho ga bcz yaha button ko direct select key howa

//     }
//     console.log(currmode);
// });


////is mai on clickpa mode chnge kra like dark sy light and light sy dark wiiith using class list
let mode = document.querySelector("#mode");
let body = document.querySelector("body");//acces body
let currmode = "light";

mode.addEventListener("mouseover", () => {//this change screen when on button over just mouse onit
    if(currmode ===  "light") {//if condition
        currmode = "dark";
        body.classList.add("dark");//use classist 
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});









