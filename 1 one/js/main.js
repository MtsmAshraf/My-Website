let userName = document.querySelector("input:nth-of-type(1)");
let number = document.querySelector("input:nth-of-type(2)");
let month = document.querySelector("input:nth-of-type(3)");
let year = document.querySelector("input:nth-of-type(4)");
let cvc = document.querySelector("input:nth-of-type(5)");
let cardNunber = document.querySelector(".front span");
let cardName = document.querySelector(".front .info .name");
let cardDate = document.querySelector(".front .info .date");
let cardCvc = document.querySelector(".back span");
let valid = false;
let confirmBtn = document.querySelector("input:last-of-type");
let completedMsg = document.querySelector(".complete");

document.querySelectorAll("input[type='text']").forEach((input,index)=>{
    input.oninput = ()=>{
        if(typeof parseInt(number.value) !== typeof 1){
            cardNunber.textContent = "";
        }else{
            cardNunber.textContent = `${number.value.slice(0,4)} ${number.value.slice(4,8)} ${number.value.slice(8,12)} ${number.value.slice(12)}`;
        }
        cardName.textContent = userName.value;
        if(parseInt(month.value) >= 1 && parseInt(month.value) <= 12){
            if(parseInt(year.value) >= 22 && parseInt(year.value) <= 40){
                valid = true;
                cardDate.textContent = `${month.value}/${year.value}`;
            }
        }
        if(typeof parseInt(cvc.value) !== typeof 1){
            cardCvc.textContent = "";
        }else{
            cardCvc.textContent = cvc.value;
        }
    }
})
confirmBtn.onclick = (e)=>{
    e.preventDefault();
    if(!typeof parseInt(number.value) !== typeof 1 
    && parseInt(month.value) >= 1 
    && parseInt(month.value) <= 12 
    && parseInt(year.value) >= 22 
    && parseInt(year.value) <= 40 
    && !typeof parseInt(cvc.value) !== typeof 1){
        completedMsg.style.cssText = `
            opacity: 1;
            z-index: 5;
        `;
        setTimeout(() => {
            completedMsg.style.cssText = `
            opacity: 0;
            z-index: -1;
        `;
        }, 2000);
    }
}