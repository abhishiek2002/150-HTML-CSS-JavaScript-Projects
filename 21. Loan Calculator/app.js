const btn = document.querySelector('.btn');
const loanAmt = document.getElementById('loanAmt');
const Interest = document.getElementById('InterestRate');
const Month = document.getElementById('Months');

const container = document.querySelector('.container');



btn.addEventListener("click", () =>{

    let loan = Number(loanAmt.value);
    let rate = Number(Interest.value);
    let monthNum = Number(Month.value);

    let interestPay = (loan * (rate * 0.01))/monthNum;

    let monthlyPay = (loan/monthNum +interestPay).toFixed(2)

    const pay = document.createElement('p');
    pay.classList.add('payable');
    pay.innerHTML = `Monthly Pay : ${monthlyPay}  <span id="cross">X</span>`;

    container.appendChild(pay);

});
