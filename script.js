let rate   = document.getElementById('rate'  );
let salary = document.getElementById('salary');
let button = document.getElementById('calc'  );

button.addEventListener("click",output);

function calculation(rate) {
    return rate * 40 * 52;
}

function output(){
    salary.innerHTML = calculation(rate.value).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
