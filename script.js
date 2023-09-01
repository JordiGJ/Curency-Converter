// get elements
const firstCurrency = document.querySelector("#firstCurrency");
const firstCurrencyAmount = document.querySelector("#firstCurrencyAmount");
const secondCurrency = document.querySelector("#secondCurrency");
const firstCurrencyNameDisplay = document.querySelector(
  "#firstCurrencyNameDisplay"
);
const secondCurrencyNameDisplay = document.querySelector(
  "#secondCurrencyNameDisplay"
);
// variables
const apiKey = "use your own key here";
// functions
async function getData() {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstCurrency.value}`
  );
  const data = await response.json();
  const conversionValue = data.conversion_rates[secondCurrency.value];
  firstCurrencyNameDisplay.textContent = firstCurrency.value;
  return conversionValue;
}

async function handleEvent() {
  const conversionRate = getData();
  document.querySelector("#exchangeRate").textContent = await conversionRate;
  document.querySelector("#secondCurrencyNameDisplay").textContent =
    secondCurrency.value;
  const resultDisplay = document.querySelector("#result");
  const result = (+firstCurrencyAmount.value * (await conversionRate)).toFixed(
    2
  );
  resultDisplay.textContent = result;
}
// eventListeners

window.addEventListener("load", handleEvent);

firstCurrency.addEventListener("change", handleEvent);
secondCurrency.addEventListener("change", handleEvent);
firstCurrencyAmount.addEventListener("input", handleEvent);
