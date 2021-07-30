function calculateDiscountedPrice (price, discount){
    const percentagePriceWithDiscount = 100 - discount;
    const discountedPrice = (price * percentagePriceWithDiscount) / 100;

    return discountedPrice;
}

function buttonDiscountedPrice (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const discountedPrice = calculateDiscountedPrice(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerHTML = "The discounted price is: " + discountedPrice
}

