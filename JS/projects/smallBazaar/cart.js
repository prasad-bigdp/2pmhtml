const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? []
let cartValue = cartItems.length
function addToCart (item)
{
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    cartValue++;
    document.getElementById('count').textContent = cartValue
}