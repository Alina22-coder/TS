// #ymAmN2xJ
let form:HTMLFormElement = document.createElement("form");

let inputName:HTMLInputElement = document.createElement("input");
inputName.id = "input__name";
inputName.type = "text";
inputName.placeholder = "Enter your name...";

let inputSurname:HTMLInputElement = document.createElement("input");
inputSurname.id = "input__surname";
inputSurname.type = "text";
inputSurname.placeholder = "Enter your surname...";

let inputAge:HTMLInputElement = document.createElement("input");
inputAge.id = "input__age";
inputAge.type = "number";
inputAge.placeholder = "Enter your age...";
inputAge.min = '1';
inputAge.max = '100';

let SubButton:HTMLButtonElement = document.createElement("button");
SubButton.innerText = "Submit";


let SomeDiv:HTMLDivElement = document.createElement("div");

SubButton.addEventListener("click", function (e):void {
    e.preventDefault();

    let name:string = inputName.value;
    let surname:string = inputSurname.value;
    let age:string = inputAge.value;

    let obj:{name:string, surname:string, age:string} = {
        name,
        surname,
        age
    }

    let jsonNewObj:string = JSON.stringify(obj, null, 2);
    SomeDiv.innerText = jsonNewObj;

})



form.append(inputName, inputSurname, inputAge, button);


document.body.append(form, SomeDiv);
