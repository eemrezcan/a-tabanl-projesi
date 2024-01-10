function calculateFatPercentage() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const waist = parseFloat(document.getElementById("waist").value);

    // Formula for calculating fat percentage (using U.S. Navy method)
    const fatPercentage = calculateNavyFatPercentage(gender, age, height, weight, waist);

    // Display the result
    document.getElementById("fat-percentage").textContent = `${fatPercentage.toFixed(2)}%`;
}

function calculateNavyFatPercentage(gender, age, height, weight, waist) {
    let fatPercentage;

    if (gender === "male") {
        fatPercentage = 86.010 * Math.log10(waist - weight * 0.5) - 70.041 * Math.log10(height) + 36.76;
    } else if (gender === "female") {
        fatPercentage = 163.205 * Math.log10(waist + weight - height) - 97.684 * Math.log10(height) - 78.387;
    }

    return fatPercentage;
}
