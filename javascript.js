// aFunction();
// function aFunction(){
//     console.log("Hello Nhat");
// }

// var bFunction = function(printName){

//     var name ="Nhat";
//     printName(name);
// }


//Callback
// function add5(getNumber,print){
//    var num = getNumber()+5;
//    print(num);
// }

// function randomNumber(){
//     return Math.floor(Math.random()*1000);//lam tron random tu 0 den 1000
// }
// function printName(num){
//     console.log(num);
// }

// //add5(randomNumber,printName);
// setTimeout(function(){
// add5(randomNumber,printName);

// },1000*1);

// console.log("Ahihi");
// // bFunction("Nhat",aFunction);


// // bFunction();

// // var bFunction = function(){
// //     console.log("Hello Nhat");
// // }


// // var cFunction=()=>{
// //     console.log("Hello Nhat");
// // }
//Function scope

// var a = 10;
// function abc(){
//     var b =15;
//     function abcd(){
//      var c=25;
//      console.log(a);
//      console.log(b);
//      console.log(c);


//     }
//     console.log(a);
//     console.log(b);

// }
// abc();
// console.log(a);
// console.log(b);

//Block scope
function countDown(num){
    for ( let i=num;i>=0;i--){
        setTimeout(function(){
      console.log(i);
        },(num-i)*1000);
 
    }
}
countDown(5);