function calculateOneRepMax() {
    var weight = parseFloat(document.getElementById("weight").value);
    var reps = parseFloat(document.getElementById("reps").value);
  
    if (isNaN(weight) || isNaN(reps) || reps <= 0) {
      alert("Lütfen geçerli bir kilo ve tekrar sayısı girin.");
      return;
    }
  
    var oneRepMax = weight / (1.0278 - 0.0278 * reps);
    oneRepMax = oneRepMax.toFixed(2);
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Tek Tekrar Maksimumunuz: " + oneRepMax + " kg";
    resultElement.style.color = "#CE2E2D";
  }