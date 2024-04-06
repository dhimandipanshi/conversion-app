// Exchange rates (hard-coded)
const exchangeRateCadToUsd = 0.75; // 1 CAD = 0.75 USD
const exchangeRateUsdToCad = 1.33; // 1 USD = 1.33 CAD

const inputAmount = document.getElementById("inputAmount");
const outputAmount = document.getElementById("outputAmount");
const toggleButton = document.getElementById("toggleButton");
const convertButton = document.getElementById("convertButton");
const resultContainer = document.getElementById("result");
const currencyFlagInputValue = document.getElementById("currencyFlagInputValue");
const currencyFlagOutputValue = document.getElementById("currencyFlagOutputValue");
const conversionFactorContainer = document.getElementById("conversionFactor");

let isCadToUsd = true; // Flag to track current conversion mode

// Function to update conversion factor text based on conversion mode
function updateConversionFactor() {
    if (isCadToUsd) {
        conversionFactorContainer.innerText = `Conversion factor: 1 CAD = ${exchangeRateCadToUsd} USD`;
    } else {
        conversionFactorContainer.innerText = `Conversion factor: 1 USD = ${exchangeRateUsdToCad} CAD`;
    }
}

// Initially update conversion factor
updateConversionFactor();

// Function to update placeholder text based on conversion mode
function updatePlaceholders() {
    if (isCadToUsd) {
        currencyFlagInputValue.innerText = "🇨🇦 CAD";
        currencyFlagOutputValue.innerText = "🇺🇸 USD";
    } else {
        currencyFlagInputValue.innerText = "🇺🇸 USD";
        currencyFlagOutputValue.innerText = "🇨🇦 CAD";
    }
}

// Initially update placeholders
updatePlaceholders();

// Function to convert from CAD to USD
function convertCadToUsd(amount) {
    return (amount * exchangeRateCadToUsd).toFixed(3);
}

// Function to convert from USD to CAD
function convertUsdToCad(amount) {
    return (amount * exchangeRateUsdToCad).toFixed(3);
}

// Function to handle toggle button click
toggleButton.addEventListener("click", function() {
    isCadToUsd = !isCadToUsd; // Toggle the conversion mode
    if (isCadToUsd) {
        toggleButton.innerText = "CAD to USD";
    } else {
        toggleButton.innerText = "USD to CAD";
    }
    updatePlaceholders(); // Update placeholders after toggling
    updateConversionFactor(); // Update conversion factor text
});

// Function to handle convert button click
convertButton.addEventListener("click", function() {
    const amount = parseFloat(inputAmount.value);
    
    // Check if amount is valid
    if (!isNaN(amount) && amount > 0) {
        let convertedAmount;
        if (isCadToUsd) {
            convertedAmount = convertCadToUsd(amount);
            resultContainer.innerText = `Result: $${convertedAmount} USD`;
        } else {
            convertedAmount = convertUsdToCad(amount);
            resultContainer.innerText = `Result: $${convertedAmount} CAD`;
        }
        outputAmount.value = convertedAmount;
    } else {
        resultContainer.innerText = "Please enter a valid amount.";
    }
});
