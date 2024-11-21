const cb = document.getElementById(`cb`);
const vs = document.getElementById(`vs`);
const ms = document.getElementById(`ms`);
const pp = document.getElementById(`pp`);
const sb = document.getElementById(`sb`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);

sb.onclick = function(){
    if(cb.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are'nt subscribed`;
    }
    if(vs.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(ms.checked){
        paymentResult.textContent = `You are paying with Mastercard`;
    }
    else if(pp.checked){
        paymentResult.textContent = `You are paying with Paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment plan`;
    }
}