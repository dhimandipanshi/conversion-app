// Hard-coded exchange rates
const exchangeRateCadToUsd = 0.75; // 1 CAD = 0.75 USD
const exchangeRateUsdToCad = 1.33; // 1 USD = 1.33 CAD

// Function to convert CAD to USD
function cadToUsd() {
    let cad = document.getElementById("cadInput").value;
    if (cad && !isNaN(cad) && cad > 0) {
        let usd = (cad * exchangeRateCadToUsd).toFixed(3);
        document.getElementById("result").innerText = `${cad} CAD is ${usd} USD.`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid CAD amount.";
    }
}

// Function to convert USD to CAD
function usdToCad() {
    let usd = document.getElementById("usdInput").value;
    if (usd && !isNaN(usd) && usd > 0) {
        let cad = (usd * exchangeRateUsdToCad).toFixed(3);
        document.getElementById("result").innerText = `${usd} USD is ${cad} CAD.`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid USD amount.";
    }
}
