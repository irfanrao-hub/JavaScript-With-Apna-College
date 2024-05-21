//Dom 
//console.log(document.body);
//console.dir(document.body);

//console.dir(document.body.childNodes[3].innerText = "DOM Demo with Bridge Zone " );

// let heading = document.getElementById("heading");
// //console.log(heading); //show heading thats in h1 tag. 
// console.dir(heading);//show h1 heading.

// let headings = document.getElementsByClassName("heading");
// //console.log(heading); //show heading thats in h1 tag with class. 
// console.dir(headings);//show h1 heading with class.
// console.log(headings);

//Element access by tag

// let parag = document.getElementsByTagName("p");//using bt tag element,
// console.log(parag);//shpw paragraph detail.

//element acess bt qurey selector.
// let parag = document.querySelector("h1");//using bt tag element,
// console.log(parag);//show h1 detail.

//qurey selectorAll sy jis ka bi data chahye ho ga saraa daata show krwye ga 
// let parag = document.querySelector("h1");//using bt tag element,
// console.log(parag);//shpw h1 detail.

//qureyselector by class

// let qsclass = document.querySelector(".heading");//using qureyselector by classs element,
// console.dir(qsclass);//show classdetail.
//qureyselector by id ko hum # sy acces kary or tag ko un ke name .

// let div =document.querySelector("div");
// console.dir(div);
//Practice
//h3 ke div mai text likho or phir us ko append kro from bridge zone dev ke sth

// let text = document.querySelector("h3");
// console.dir(text.innerText);
// text.innerText = text.innerText + " From Bridge Zone Developer "; // use basic concat methoid  in which two string concat,

//practice 02
//create 3 box and then unique chnage in all boxes.
// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
//this method in worest like that agr 100 div mai ese he kam kry gy to ye boht time consuming hy that why we use -->for of loop
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


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




//chpter 07;

//dom Manipulation 
//getArittibutee (attr)
//set attribute(attr, value)

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

//paragraph
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// div.style.visibility = "hidden";//div text hide
// // console.log(div);
// div.style.backgroundColor = "green";//div color chnge
// div.style.backgroundColor = "purple";

// div.style.fontSize = "26px";//div font size chnge 
// div.innerText = "Hello!";//div inner text chnage 

//Insert manipulation
//node.append(el)//add new elemet at end node 
// let newbtn = document.createElement("button");
// newbtn.innertext = "Click Me";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.append(newbtn);

//prepend use; Add new element in start inside
// let newbtn = document.createElement("button");
// newbtn.innertext = "Click Me!";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.prepend(newbtn);

//this is JS logic thats add html text without use html 
// let newhtml = document.createElement("h1");
// newhtml.innerHTML = "<i>Hi, I am New</i>";
// document.querySelector("body").prepend(newhtml);

//node.before(el) add before the node outside
// let newbtn = document.createElement("button");
// newbtn.innertext = "Click Me!";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.before(newbtn);

//node.after(el) add after the node outside

//node.remove()remove the node;
// let para = document.querySelector("p");
// para.remove();

//practice
// let para = document.querySelector("p");