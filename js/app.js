//  calculate Extra Cost
function extarCostCalculetor(catagory, quantity){
    const extraCost = document.getElementById(catagory + '-cost');
    if(catagory == 'memory'){
        if(quantity == '8gb'){
            extraCost.innerText = 0;
        }
        else if(quantity == '16gb'){
            extraCost.innerText = 180;
        }
    }
    else if(catagory == 'storage'){
        if(quantity == '256gb'){
            extraCost.innerText = 0;
        }
        else if(quantity == '512gb'){
            extraCost.innerText = 100;
        }
        else if(quantity == '1tb'){
            extraCost.innerText = 180;
        }
    }
    updatePrice();
}
// Delivery charge calculator
function deliveryCharge(charge){
    const cost = document.getElementById('delivary-cost');
    if(charge){
        cost.innerText = 20;
    }
    else{
        cost.innerText = 0;
    }
    updatePrice()
}
//update total price
function updatePrice(){
    const totalPrice = document.getElementsByClassName('total-price');
    const bestPrice = parseInt(document.getElementById('best-price').innerText)
    const extraMemorycost = parseInt(document.getElementById('memory-cost').innerText);
    const extraStorageCost = parseInt(document.getElementById('storage-cost').innerText);
    const delivaryCost = parseInt(document.getElementById('delivary-cost').innerText);
    // total price
    for(const price of totalPrice){
        price.innerText = extraMemorycost + extraStorageCost + delivaryCost + bestPrice;
    }
}
// Memory Button Handeler
document.getElementById('8gb-memory').addEventListener('click', function(){
    extarCostCalculetor('memory', '8gb');
});
document.getElementById('16gb-memory').addEventListener('click', function(){
    extarCostCalculetor('memory', '16gb');
});
// Storage Button Handeler
document.getElementById('256gb-storage').addEventListener('click', function(){
    extarCostCalculetor('storage', '256gb');
});
document.getElementById('512gb-storage').addEventListener('click', function(){
    extarCostCalculetor('storage', '512gb');
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    extarCostCalculetor('storage', '1tb');
});
// Delivery charge Handeler
document.getElementById('delivery-free').addEventListener('click', function(){
    deliveryCharge(false)
});
document.getElementById('delivery-paid').addEventListener('click', function(){
    deliveryCharge(true)
});
// promo code and Apply button Handeler
document.getElementById('apply-btn').addEventListener('click', function(){
   const promoCodeInpute = document.getElementById('promo-inpute');
   const promoCode = promoCodeInpute.value;
   const applyButton = document.getElementById('apply-btn');
   const totalPrice = document.getElementsByClassName('total-price');
   if(promoCode == 'stevekaku'){
        for(const price of totalPrice){
            const privusTotalPrice = parseFloat(price.innerText);
            const discountPrice = privusTotalPrice * (20/100);
            price.innerText = privusTotalPrice - discountPrice;
        }
        applyButton.setAttribute('disabled', true);
   }
   promoCodeInpute.value = '';
});