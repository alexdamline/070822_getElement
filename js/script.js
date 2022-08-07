"use strict";


let leftV = document.getElementsByTagName('h2')[0];

let a = 0;

function valueLeft() {
    leftV.innerHTML = ++a;
}

let rightV = document.getElementsByTagName('h2')[1];

let b = 0;

function valueRight() {
    rightV.innerHTML = ++b;
}

console.log(a);