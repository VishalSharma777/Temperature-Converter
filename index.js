function convertToFar() {
    let inputincelsius = document.getElementById("celsiusInput");
    let resultElement = document.getElementById("result");

    let celsius = parseFloat(inputincelsius.value);
    if (isNaN(celsius)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
