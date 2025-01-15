let cartCount = JSON.parse(localStorage.getItem('carts')) || [];
const cartIcon = document.querySelector(".cart-icon");
function AddToCart(id) {
    if (!cartCount.includes(id)) {
        cartCount.push(id)
        localStorage.setItem('carts', JSON.stringify(cartCount))
        cartIcon.innerHTML = `Cart (${cartCount.length})`;
    }else{
        alert("Already Added")
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const carts = JSON.parse(localStorage.getItem('carts')) || [];
    cartIcon.innerHTML = `Cart (${carts.length})`;
});
// hide login button
let user_active = JSON.parse(localStorage.getItem('user_active')) || null
let button = document.querySelector('#btn')
let buttonRegester = document.querySelector('#btnR')
if(!user_active){
    button.classList.remove('disabled')
    buttonRegester.classList.remove('disabled')
    
}