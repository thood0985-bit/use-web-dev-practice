const temperatureInput = document.querySelector("#temperature");
const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");

checkButton.addEventListener("click", function () {
    const input = temperatureInput.value.trim();
    const temperature = Number(input);

    if (input === "" || !Number.isFinite(temperature)) {
        result.textContent = "Please enter a valid temperature.";
    } else if (temperature < 50) {
        result.textContent = "Wear a coat or heavy jacket.";
    } else if (temperature < 70) {
        result.textContent = "Wear a light jacket or sweater.";
    } else if (temperature < 85) {
        result.textContent = "Wear a T-shirt or light clothing.";
    } else {
        result.textContent = "Wear lightweight clothing and remember to stay hydrated.";
    }
});