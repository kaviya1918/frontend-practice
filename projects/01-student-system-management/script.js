let form = document.getElementById("resultForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department = document.getElementById("department").value;

    let java = Number(document.getElementById("java").value);
    let dbms = Number(document.getElementById("dbms").value);
    let dsa = Number(document.getElementById("dsa").value);
    let web = Number(document.getElementById("web").value);
    let maths = Number(document.getElementById("maths").value);

    let total = java + dbms + dsa + web + maths;
    let percentage = total / 5;

    let result;

    if (java >= 40 && dbms >= 40 && dsa >= 40 &&
        web >= 40 && maths >= 40) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "<h2>Result</h2>" +
        "<p>Name: " + name + "</p>" +
        "<p>Roll Number: " + roll + "</p>" +
        "<p>Department: " + department + "</p>" +
        "<p>Total: " + total + "</p>" +
        "<p>Percentage: " + percentage + "%</p>" +
        "<p>Result: " + result + "</p>";
});
