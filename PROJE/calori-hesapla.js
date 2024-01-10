function calculateTotalCalories() {
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var activityLevel = parseFloat(document.getElementById("activity").value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    var bmr = (gender === 'male') ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
                                  : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

    var totalCalories = bmr * activityLevel;

    var resultElement = document.getElementById("totalCalories");
    resultElement.innerHTML = "<span style='font-size: 30px; font-weight: bold; color: #CE2E2D;'>" + totalCalories.toFixed(2) + " kalori</span>";
}