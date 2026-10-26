let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");

let output = document.getElementById("result");

addBtn.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 + num2;
    output.textContent = result;
});

subBtn.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 - num2;
    output.textContent = result;
});

mulBtn.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 * num2;
    output.textContent = result;
});

divBtn.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if (num2 === 0) {
        output.textContent = "Cannot divide by zero";
    } else {
        let result = num1 / num2;
        output.textContent = result;
    }
});
