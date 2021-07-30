// const originalPrice = 120;
// const discount = 18;


function calculateDiscountedPrice (price, discount){
    const percentagePriceWithDiscount = 100 - discount;
    const discountedPrice = (price * percentagePriceWithDiscount) / 100;

    return discountedPrice;
}


// console.log({
//     originalPrice,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount,
// })