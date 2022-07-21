$("#searchButton").click(function () {
    let typeOfPet = $("#type-of-pets-dropdown").val();
    let gender = $("#gender-dropdown").val();
    let location = $("#location-dropdown").val();

    if (typeOfPet == "default" || gender == "default" || location == "default") {
        console.log("Default");
        alert("All fields are required!");

        // TODO:- Store typeOfPet, gender, and location in local storage
    }
    else {
        window.location.href='missingPets.html';
    }
});