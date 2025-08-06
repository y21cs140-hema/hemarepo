function calculateTotal(price,discountPercent){
    if(price<0 || discountPercent<0 || discountPercent>100){
        throw new Error("Price and discount percent must be non-negative");
    }
    return price - (price * (discountPercent / 100));
}
module.exports ={
    calculateTotal
};