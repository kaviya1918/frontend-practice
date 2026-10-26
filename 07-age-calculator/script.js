let btn = document.getElementById("calculateBtn");

btn.addEventListener("click", function() {

    let dob = document.getElementById("date");
    let birthDate = new Date(dob.value);
    let today = new Date();

    if (dob.value === "") {
        document.getElementById("result").textContent =
            "Please select your date of birth.";
        return;
    }

    if (birthDate > today) {
        document.getElementById("result").textContent =
            "Please select a valid date of birth.";
        return;
    }

    let birthYear = birthDate.getFullYear();
    let currentYear = today.getFullYear();

    let birthMonth = birthDate.getMonth();
    let currentMonth = today.getMonth();

    let birthDay = birthDate.getDate();
    let currentDay = today.getDate();

    let age = currentYear - birthYear;

    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--;
    }

    let result = document.getElementById("result");

    result.textContent = "Your age is " + age + " years old.";

});
