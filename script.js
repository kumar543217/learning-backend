const billAmountInput = document.querySelector('#bill-amount');
const numberOfPeopleInput = document.querySelector('.number-of-people');
const generateBillBtn = document.querySelector('.generate-bill-btn');
const eachPersonBillOutput = document.querySelector('.each-person-bill span');
const totalBillOutput = document.querySelector('.total span');
const tipAmountOutput = document.querySelector('.tip-amount span');
const customTipInput = document.querySelector('.custom-tip')
const tipsContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.reset-btn')

let tipPercentage = 0;

generateBillBtn.addEventListener('click', () => {
    const billAmount = parseInt(billAmountInput.value)
    const numberOfPeople = parseInt(numberOfPeopleInput.value)

    const tipAmount = billAmount * (tipPercentage / 100)
    const totalBill = billAmount * ((100 + tipPercentage) / 100)
    const eachPersonBill = totalBill / numberOfPeople;


    totalBillOutput.innerText = `₹${totalBill}`
    eachPersonBillOutput.innerText = `₹${eachPersonBill}`
    tipAmountOutput.innerText = `₹${tipAmount}`
    resetBtn.disabled = false;
})


tipsContainer.addEventListener('click', (e) => {
    if(tipsContainer.classList.contains('disabled')) return
    if (e.target !== tipsContainer) {
        [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.innerText)
        customTipInput.value = ''
    }
})

customTipInput.addEventListener('input',()=>{
    tipPercentage = parseInt(customTipInput.value);
    [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'))
})

resetBtn.addEventListener('click',()=>{
   
    [billAmountInput, numberOfPeopleInput, customTipInput ].forEach((e)=>e.value='');
    [totalBillOutput, eachPersonBillOutput, tipAmountOutput].forEach(e=>e.innerText  = '');
    [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'))
    tipPercentage = 0;
    resetBtn.setAttribute = ''
    resetBtn.disabled = true
})

billAmountInput.addEventListener('input', ()=>{
    if(billAmountInput.value){
        customTipInput.disabled = false;
        numberOfPeopleInput.disabled = false;
        generateBillBtn.disabled = false;
        tipsContainer.classList.remove('disabled')
    }else{
        customTipInput.disabled = true;
        numberOfPeopleInput.disabled = true;
        generateBillBtn.disabled = true;
    }

})

