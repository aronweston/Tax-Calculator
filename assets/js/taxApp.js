
const form = document.getElementById("tax-form");
const reset = document.getElementById("reset");


//Inputs
const income = document.getElementById("income");
const tax = document.getElementById("tax-payable");
const cal = document.getElementById("cal");
const work = document.getElementById("working-day");

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

eventListeners();
function eventListeners() {
form.addEventListener("submit", function (e) {
    e.preventDefault();

    annual.value,
        monthly.value, 
        fortnightly.value,
        weekly.value,
        daily.value,
        hourly.value = null;
    
    //No results
    document.querySelector('#results').style.display = 'none';
    //Loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(function () {
        //sh0ow results
        document.querySelector("#results").style.display = 'block';
        //Hide loader
        document.querySelector('#loading').style.display = 'none';
        
        //call calc function
        calculate();

        //Scroll to the results 
        window.scrollTo({
        top: 400,
        behavior: 'smooth',
        });

    }, 4000);
    
});

reset.addEventListener("click", function () { 
    //show results
    document.querySelector("#results").style.display = 'none';
    //show results
    document.querySelector("#loading").style.display = 'none';
});
}


 
function calculate() {
    //selected conditional 
    if (work.checked = true) {
        workingDay();
    } else {
        calender();
    }
}


//Output totals in the 12 month calender calculations 
function calender() {
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
    fortnightly.value = numAUD.format((netIncome) / 26.07);
    weekly.value = numAUD.format((netIncome / 52.14));
    daily.value = numAUD.format((netIncome / 365));
    hourly.value = numAUD.format((netIncome / 365) / 8);
}


//output the calculations as a working day, with the idea that there are 254 working days within the year 
function workingDay() {

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
    monthly.value = numAUD.format((netIncome) / 8.4);
    fortnightly.value = numAUD.format((netIncome) / 18);
    weekly.value = numAUD.format((netIncome / 36));
    daily.value = numAUD.format((netIncome / 254));
    hourly.value = numAUD.format((netIncome / 254) / 8);
}
    