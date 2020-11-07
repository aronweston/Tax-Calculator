
(function () { 
    var submit = document.querySelector("#submit");

    submit.addEventListener("click", function (e) {
        e.preventDefault();
        var income = document.querySelector("#income").value;
        var taxRate = document.querySelector("#tax").value;
        var output = document.querySelector("#output");
        //Income
        var netIncome = (income - taxRate);
        var monthNet = netIncome / 12;
        //output
        var month = Math.round(monthNet);
        var fortnight = Math.round(monthNet / 2);
        var week = Math.round((monthNet / 4));
        var hour = Math.round(((netIncome / 365) / 8));
        
        //html table 
        let table = output.innerHTML += 
        `<tr>
            <td>$ ${month}</td>
            <td>$ ${fortnight}</td>
            <td>$ ${week}</td>
            <td>$${hour}</td>
        </tr>`;

        output.firstElementChild.innerHTML = table;

    }, false);
})();




