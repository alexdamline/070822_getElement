"use strict";

//Take value of first h2 element
let leftV = document.getElementsByTagName('h2')[0];

let a = 0;

//After click "buttonGood" increase first h2 element value on 1 
function valueLeft() {
    leftV.innerHTML = ++a;
}

//Take value of second h2 element
let rightV = document.getElementsByTagName('h2')[1];

let b = 0;

//After click "buttonGood" increase second h2 element value on 1 
function valueRight() {
    rightV.innerHTML = ++b;
}
