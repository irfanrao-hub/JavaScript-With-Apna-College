//FETCH API
//STATUS 200 mtlb sucess data
//using async-await
//this method is better then promise
// const url = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
// let promise = fetch(url);
// console.log(promise);
// const getfacts = async () => {
//     console.log ("getting data...")
//     let response = await fetch(url);
//     console.log(response);//json formate
//     let data = await response.json();
//     factpara.innerText = data[4].text;
// };
// btn.addEventListener("click", getfacts);


//using promise
const url = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
function getfacts ()  {
    fetch(url)
        .then((response) => {
            return response.json();
        } )
        .then ((data) => {
            console.log (data);
            factpara.innerText = data[2].text;
        });
}
btn.addEventListener("click", getfacts);