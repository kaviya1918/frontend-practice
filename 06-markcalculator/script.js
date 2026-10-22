let btn = document.getElementById("calculateBtn");

btn.addEventListener("click", function() {

    let output = document.getElementById("result");

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    let total = mark1 + mark2 + mark3;
    let average = total / 3;

    let status;

    if (mark1 >= 35 && mark2 >= 35 && mark3 >= 35) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    output.textContent =
        "Total: " + total +
        " | Average: " + average.toFixed(2) +
        " | Result: " + status;

});
