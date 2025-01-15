document.addEventListener('DOMContentLoaded', () => {
const items = document.querySelector('.items')
const carts = JSON.parse(localStorage.getItem('carts')) || [];
async function fetchCartItems() {
    let res = await fetch("https://fakestoreapi.com/products")
    products = await res.json()
    const cartItems = carts.map(id => products[id]);
    CartShow(cartItems)
}
function CartShow(filteredCarts) {
    items.innerHTML = ''
    filteredCarts.forEach(cart => {
        let cartItem = document.createElement('div')
        cartItem.classList = "cart-item"
        let image = document.createElement('img')
        image.setAttribute('src',cart.image)
        //
        let itemDetails = document.createElement('div')
        itemDetails.classList = "item-details"
        let h3 = document.createElement("h3")
        h3.innerHTML = cart.title
        let p = document.createElement("p")
        p.innerHTML = cart.category
        itemDetails.appendChild(h3)
        itemDetails.appendChild(p)
        //
        let itemPrice = document.createElement('div')
        itemPrice.classList = "item-price"
        itemPrice.innerHTML = cart.price
        //
        cartItem.appendChild(image)
        cartItem.appendChild(itemDetails)
        cartItem.appendChild(itemPrice)
        items.appendChild(cartItem)
    })
}
fetchCartItems()
});
