const celciusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function convert(event) {
    let currentValue = event.target.value

    switch (event.target.name) {
        case "celsius":
            fahrenheitInput.value = ((currentValue * 9 / 5) + 32).toFixed(2);
            kelvinInput.value = (parseFloat(currentValue) + 273.15).toFixed(2);
            break;
        case "fahrenheit":
            celciusInput.value = ((currentValue - 32) * 5 / 9).toFixed(2);
            kelvinInput.value = ((currentValue - 32) * 5 / 9 + 273.15).toFixed(2);
            break;
        case "kelvin":
            celciusInput.value = (currentValue - 273.15).toFixed(2);
            fahrenheitInput.value = ((currentValue - 273.15) * 9 / 5 + 32).toFixed(2);
            break;
        default:
            break;
    }
}


