
(function () {
    let submit = document.querySelector("#submit");
    submit.addEventListener("click", addData, false);
    
    function addData(e) {
        e.preventDefault();
        let form = document.querySelector("#form");
        income = document.querySelector("#income").value;
        taxRate = document.querySelector("#tax").value;
        table = document.querySelector("#output");
        
        //Income
        let netIncome = (income - taxRate);
        monthNet = netIncome / 12;

        //output
        let month = Math.round(monthNet);
        fortnight = Math.round(monthNet / 2);
        week = Math.round((monthNet / 4));
        hour = Math.round(((netIncome / 365) / 8));
        
        //create element
        let tableData = document.createElement('tr');
        //add class
        tableData.className = "table-data";
        //add content to class
        tableData.innerHTML +=
            `<td>$ ${month}</td>
        <td>$ ${fortnight}</td>
        <td>$ ${week}</td>
        <td>$ ${hour}</td>
        <a href="#" class="delete-item">Remove</a>`;
        //append to table
        table.appendChild(tableData);
    }


    let body = document.body;
    body.addEventListener("click", remove, false);
    function remove(e) {
        if (e.target.classList.contains('delete-item')) {
            //delete the whole list item, the parent of the a tag
            e.target.parentElement.remove();
        }
    }




    let header = document.querySelector("#header");
    let movement = body.scrollTop;
    let top = 0;

    document.addEventListener('scroll', scroll, false);

    function scroll(e) {
        if (top < 150) {
        } else {
            header.setAttribute("class", "scroll");
        }
    }

})();





