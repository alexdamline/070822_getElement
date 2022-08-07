"use strict";

//let counterLeftValue =
//document.getElementById('counterLeft');

//++counterLeftValue;


//console.log('counterLeftValue');
// counterLeftValue.style.color = "red";


//const value = 8;
let leftV = document.getElementsByTagName('h2')[0];
//h2.innerHTML = value + 1;

let a = 0;
//if (1 > 0) {
//  ++a;
//}

function valueLeft(){
  leftV.innerHTML = ++a;
}

let rightV= document.getElementsByTagName('h2')[1];
//h2.innerHTML = value + 1;

let b = 0;
//if (1 > 0) {
//  ++a;
//}

function valueRight(){
  rightV.innerHTML = ++b;
}

console.log(a);

//console.log(typeof(h2.innerHTML));