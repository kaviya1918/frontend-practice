let button = document.getElementById("convertBtn");

button.addEventListener("click", function() {

    let celsius = Number(document.getElementById("celsius").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("result").textContent =
        fahrenheit + " °F";

});
