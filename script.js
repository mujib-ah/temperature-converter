const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");


convertBtn.addEventListener("click", function () {

    const temperature = Number(temperatureInput.value);

    const unit = unitSelect.value;


    if (temperatureInput.value === "") {

        result.textContent = "Please enter a temperature.";

        return;
    }


    if (unit === "celsius") {

        const fahrenheit = (temperature * 9 / 5) + 32;

        result.textContent = `${fahrenheit.toFixed(2)} °F`;

    }

    else if (unit === "fahrenheit") {

        const celsius = (temperature - 32) * 5 / 9;

        result.textContent = `${celsius.toFixed(2)} °C`;

    }

});