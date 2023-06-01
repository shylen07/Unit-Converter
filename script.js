// Unit options for different categories
const unitOptions = {
    length: ["Meter", "Centimeter", "Kilometer", "Feet", "Inch"],
    weight: ["Kilogram", "Gram", "Pound", "Ounce"],
    time: ["Second", "Minute", "Hour", "Day"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"]
}

// Function to select the unit category
function selectUnit(category) {
    const sourceUnitSelect = document.getElementById("sourceUnit");
    const targetUnitSelect = document.getElementById("targetUnit");
    const inputUnitOptions = unitOptions[category];

    // Clear previous options
    sourceUnitSelect.innerHTML = "";
    targetUnitSelect.innerHTML = "";

    // Add new options
    for (let i = 0; i < inputUnitOptions.length; i++) {
        let option = document.createElement("option");
        option.value = inputUnitOptions[i];
        option.text = inputUnitOptions[i];
        sourceUnitSelect.add(option);

        option = document.createElement("option");
        option.value = inputUnitOptions[i];
        option.text = inputUnitOptions[i];
        targetUnitSelect.add(option);
    }
}

// Function to perform conversion
function performConversion() {
    const sourceUnit = document.getElementById("sourceUnit").value;
    const targetUnit = document.getElementById("targetUnit").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const resultContainer = document.getElementById("result");
    let result;

    // Perform the conversion based on the selected units
    switch (sourceUnit) {
        case "Meter":
            switch (targetUnit) {
                case "Meter":
                    result = inputValue;
                    break;
                case "Centimeter":
                    result = inputValue * 100;
                    break;
                case "Kilometer":
                    result = inputValue / 1000;
                    break;
                case "Feet":
                    result = inputValue * 3.28084;
                    break;
                case "Inch":
                    result = inputValue * 39.3701;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Centimeter":
            switch (targetUnit) {
                case "Meter":
                    result = inputValue / 100;
                    break;
                case "Centimeter":
                    result = inputValue;
                    break;
                case "Kilometer":
                    result = inputValue / 100000;
                    break;
                case "Feet":
                    result = inputValue * 0.0328084;
                    break;
                case "Inch":
                    result = inputValue * 0.393701;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Kilometer":
            // Conversion from Kilometer to other units
            switch (targetUnit) {
                case "Meter":
                    result = inputValue * 1000;
                    break;
                case "Centimeter":
                    result = inputValue * 100000;
                    break;
                case "Kilometer":
                    result = inputValue;
                    break;
                case "Feet":
                    result = inputValue * 3280.84;
                    break;
                case "Inch":
                    result = inputValue * 39370.1;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Feet":
            // Conversion from Feet to other units
            switch (targetUnit) {
                case "Meter":
                    result = inputValue * 0.3048;
                    break;
                case "Centimeter":
                    result = inputValue * 30.48;
                    break;
                case "Kilometer":
                    result = inputValue * 0.0003048;
                    break;
                case "Feet":
                    result = inputValue;
                    break;
                case "Inch":
                    result = inputValue * 12;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Inch":
            // Conversion from Inch to other units
            switch (targetUnit) {
                case "Meter":
                    result = inputValue * 0.0254;
                    break;
                case "Centimeter":
                    result = inputValue * 2.54;
                    break;
                case "Kilometer":
                    result = inputValue * 0.0000254;
                    break;
                case "Feet":
                    result = inputValue * 0.0833333;
                    break;
                case "Inch":
                    result = inputValue;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Kilogram":
            switch (targetUnit) {
                case "Kilogram":
                    result = inputValue;
                    break;
                case "Gram":
                    result = inputValue * 1000;
                    break;
                case "Pound":
                    result = inputValue * 2.20462;
                    break;
                case "Ounce":
                    result = inputValue * 35.274;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Gram":
            switch (targetUnit) {
                case "Kilogram":
                    result = inputValue / 1000;
                    break;
                case "Gram":
                    result = inputValue;
                    break;
                case "Pound":
                    result = inputValue * 0.00220462;
                    break;
                case "Ounce":
                    result = inputValue * 0.035274;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Pound":
            switch (targetUnit) {
                case "Kilogram":
                    result = inputValue * 0.453592;
                    break;
                case "Gram":
                    result = inputValue * 453.592;
                    break;
                case "Pound":
                    result = inputValue;
                    break;
                case "Ounce":
                    result = inputValue * 16;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Ounce":
            switch (targetUnit) {
                case "Kilogram":
                    result = inputValue * 0.0283495;
                    break;
                case "Gram":
                    result = inputValue * 28.3495;
                    break;
                case "Pound":
                    result = inputValue * 0.0625;
                    break;
                case "Ounce":
                    result = inputValue;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Second":
            switch (targetUnit) {
                case "Second":
                    result = inputValue;
                    break;
                case "Minute":
                    result = inputValue / 60;
                    break;
                case "Hour":
                    result = inputValue / 3600;
                    break;
                case "Day":
                    result = inputValue / 86400;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Minute":
            switch (targetUnit) {
                case "Second":
                    result = inputValue * 60;
                    break;
                case "Minute":
                    result = inputValue;
                    break;
                case "Hour":
                    result = inputValue / 60;
                    break;
                case "Day":
                    result = inputValue / 1440;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Hour":
            switch (targetUnit) {
                case "Second":
                    result = inputValue * 3600;
                    break;
                case "Minute":
                    result = inputValue * 60;
                    break;
                case "Hour":
                    result = inputValue;
                    break;
                case "Day":
                    result = inputValue / 24;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Day":
            switch (targetUnit) {
                case "Second":
                    result = inputValue * 86400;
                    break;
                case "Minute":
                    result = inputValue * 1440;
                    break;
                case "Hour":
                    result = inputValue * 24;
                    break;
                case "Day":
                    result = inputValue;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Celsius":
            switch (targetUnit) {
                case "Celsius":
                    result = inputValue;
                    break;
                case "Fahrenheit":
                    result = (inputValue * 9 / 5) + 32;
                    break;
                case "Kelvin":
                    result = inputValue + 273.15;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Fahrenheit":
            switch (targetUnit) {
                case "Celsius":
                    result = (inputValue - 32) * 5 / 9;
                    break;
                case "Fahrenheit":
                    result = inputValue;
                    break;
                case "Kelvin":
                    result = (inputValue + 459.67) * 5 / 9;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;
        case "Kelvin":
            switch (targetUnit) {
                case "Celsius":
                    result = inputValue - 273.15;
                    break;
                case "Fahrenheit":
                    result = (inputValue * 9 / 5) - 459.67;
                    break;
                case "Kelvin":
                    result = inputValue;
                    break;
                default:
                    result = "Invalid target unit.";
                    break;
            }
            break;

            break;

        default:
            result = "Invalid source unit.";
            break;
    }

    resultContainer.textContent = inputValue + " " + sourceUnit + " is equal to " + result + " " + targetUnit + ".";
}