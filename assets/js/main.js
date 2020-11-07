
//Swim App 
//TODO'
//1. Get all input values to submit to the console
//2. 



(function () {
    var submit = document.querySelector("#submit");
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        //Def vars
        var date = document.querySelector("#date").value;
        var laps = document.querySelector("#laps").value;
        var notes = document.querySelector("#feeling").value; 
        var output = document.querySelector("#output");
        
        output.innerHTML += '<tr class="data-content"><td class="data-date">' + date + '</td>' + '<td class="data-laps">' + laps + '</td>' + '<td class="data-notes">' + notes + '</td></tr>';

    });
})();
