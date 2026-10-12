// (D) ELECTTRIITY BILL CALCULATOR
// ask the user for their name 
// number of units of electricity used  200 naira to 1 unit
// price per unit
// calculate the total bill (formulae= units used * price per unit      ₦   )


const user_name = document.getElementById("user_name");
const unit_used = document.getElementById("unit_used");
const print_btn = document.getElementById("print-btn");
const output    = document.getElementById("output");

const pop_name = document.getElementById("pop_name");
const pop_amount = document.getElementById("pop_amount");
const pop_total = document.getElementById("pop_total");


print_btn.addEventListener('click', function()
{
    const name =user_name.value;
    const unit=unit_used.value;
    const total= Number(200 * unit)

    pop_name.textContent=name;
    pop_total.textContent=total;
    pop_amount.textContent=unit;
    
     output.classList.add('show');

     setTimeout(() => {
        output.classList.remove('show')
     }, 4000);

}
);


