
document.getElementById("tax-form").addEventListener("submit", function (e) {
    e.preventDefault();
    calculate();
});
 
function calculate() {
    //Inputs
    const income = document.getElementById("income");
    const tax = document.getElementById("tax-payable");
    const rate = document.getElementById("tax-rate");
    
    //Results
    const annual = document.getElementById("annual");
    const monthly = document.getElementById("monthly");
    const fortnightly = document.getElementById("fortnightly");
    const weekly = document.getElementById("weekly");
    const daily = document.getElementById("daily");
    const hourly = document.getElementById("hourly");
    
    //Set output to $AUD
    const numAUD = new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD"
    });

    //Tax calculations
    let i = income.value;
    
    if (i <= 18200) {
        t = 0;
        tax.value = numAUD.format(t);
    } else if (i >= 18201 && i <= 45000) {
        t = Math.ceil((i - 18200) - ((i - 18201) * 0.19));
        tax.value = numAUD.format(t);
    } else if (i >= 45001 && i <= 120000) {
        t = Math.ceil(5092 + ((i - 45001) * 0.325));
        tax.value = numAUD.format(t);
    } else if (i >= 120001 && i <= 180000) {
        t = Math.ceil(29467 + ((i - 120001) * 0.375)); 
        tax.value = numAUD.format(t);
    } else {
        t = Math.ceil(51667 + ((i - 180001) * 0.45));
        tax.value = numAUD.format(t);
    }

    //Final calculations 
    let netIncome = i - t;

    annual.value = numAUD.format(netIncome);
    monthly.value = numAUD.format((netIncome) / 12);
    fortnightly.value = numAUD.format((netIncome) / 26);
    weekly.value = numAUD.format((netIncome / 52));
    daily.value = numAUD.format((netIncome / 365));
    hourly.value = numAUD.format((netIncome / 365) / 8);
}

    
    
    