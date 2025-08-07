// // var a = 15;
// // var b = 16;

// // console.log("hey My name IS Akash");

// //Some Inbult Function

// //console alert prompt ye thino browser ke parts Hai...


// //console.log

// console.log("Hello");


// //console.warn

// console.warn("Hello");

// //console.error

// console.error("Hello");


// //alert

// alert("Hello");


// //prompt
// //prompt alert ka bhai hai jo ki alert se ek kadam aage hai

// prompt("naam Batao");


// //Variables And Constant 

// //har programming lang mein data se deal karna hota hai,wo
// //alag alag parkar ka data ho sakta hai,ab aisa data jisse 
// // humein deal karna hai,wo save to karna padega
// //to wo data save karne ke lia hume koi saving spzce chahiye jaha par
// //data save ho jayega and ye save karne ke liye unhe kuch naam
// //bhi dena padega and issiliye humein variable
// //and constant bananne padta hai taaki data save hojaaae
// //and uska koi naam bhi ho taaki hum baad me unhe access kar paaye

// var x = 55;
// var y = 65;

// const z = 30;


// //if else statement

// if(12>13){
//     console.log("Hey");
// }
// else{
//     console.log("Hello");
// }


// //loops

// function abcd(){
//     console.log("Akash");
//     console.log("Akash");
//     console.log("Akash");
//     console.log("Akash");
//     console.log("Akash");
//     console.log("Akash");
//     console.log("Akash");

// }

// abcd();

// function efgd(val){
//     console.log(12+val);

// }
// efgh(12);

//----------------------Learn Selection-----------------

//Selection

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// var btn = document.querySelector('button');

//Selection

//id

// var abcd = document.querySelector('#abcd');

// //class

// var classabcd = document.querySelector('.abcd');

// // tag

// var h3 = document.querySelector("h3");


//----------------------Modifying Element-----------------


// var btn = document.querySelector("button");

// btn.textContent = "Start downloading in 3 Second..."

// var hea = document.querySelector("h1");

// hea.textContent += "Helloooooo";

// hea.innerHTML = "<i>My Name Is Akash<i/>";


//----------------------Manipulating Styles And ClassList-----------------


// var h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.fontFamily = "gilroy";
// h1.style.fontSize = "75px";



// var h1 = document.querySelector("h1")
// h1.classList.add('makeitred');
// h1.classList.remove('makeitred');


//----------------------Creating And Deleting Elements-----------------

// var h1 = document.createElement("h1");
// h1.textContent = "Hey";
// h1.classList.add("makeitred");

// document.querySelector("body").appendChild(h1);


// var img = document.createElement("img");
// img.src = "https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


// document.querySelector('body').appendChild(img);

// var btn = document.querySelector("button");



//--------------------------Event Handling-------------------------------------

// var btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     btn.textContent = "Starting Downloading...";
//     btn.style.backgroundColor = "red";
// });


// var btn = document.querySelector("button");
// btn.addEventListener("mouseover", function(){
//     btn.textContent = "Starting Downloading...";
//     btn.style.backgroundColor = "red";
// });

// var btn = document.querySelector("button");
// btn.addEventListener("mouseleave", function(){
//     btn.textContent = "Make It New Card";
//     btn.style.backgroundColor = "White";
// });


// var btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.textContent = "Hello My Name IS Akash";
// })

// var img1 = document.querySelector("#one");
// var img2 = document.querySelector("#two");

// var btn = document.querySelector("button")
// btn.addEventListener("click",function(){

//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;
// })


// var form = document.querySelector("form");

// var inp1 = document.querySelector("inp1");
// var inp2 = document.querySelector("inp2"); instead of this 

// we can write

// var inps = document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("h4");


// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     for(var i = 0; i<inps.length; i++){
//         if(inps[i].value.trim() === ''){
//             h4.textContent = "Error, Some Filed Are Blank";
//             h4.style.color = "red";
//             break;
//         }
//     }





    // inps.forEach(function(inp){
    //     if(inp.value === ''){
    //         h4.textContent = 'Error, Some Field Are Blank';
    //         h4.style.color = "red";
    //     }
    //     else{

    //     }

    // })














    //iske jagah pe upper likunga 

    // if (inp1.value === '' || inp2.value === ''){
    //     h4.textContent = "error, some feild are blank.";
    //     h4.style.color = "red";
    // }
    // else{
    //     h4.textContent = "";
    //     h4.style.color = "black";
    // }

// })
























