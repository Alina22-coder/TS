"use strict";
// #j693ca8
let input = document.createElement("input");
input.type = "number";
input.placeholder = "Please enter your age!";
input.min = '1';
input.max = '100';
let SubmitButton = document.createElement("button");
SubmitButton.innerText = "Submit";
SubmitButton.addEventListener("click", function () {
    let inputValue = input.value;
    let age = parseInt(inputValue, 10);
    if (isNaN(age) || inputValue === "") {
        alert("Please enter your age!");
    }
    else if (age < 18) {
        alert("You are still young!");
    }
    else {
        alert("Welcome!");
    }
    input.value = "";
});
document.body.append(input, button);
