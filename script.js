const cards = document.querySelector(".cards");
let search = document.querySelector("#search")

let products = [];

function fetchProducts() {
    return fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            products = data;
            productsRender(products)
        });
}
function productsRender(products){
    products.forEach(item => {
        let div = document.createElement("div")
        div.classList = "product-card"
        let img = document.createElement("img")
        img.setAttribute("src", item.image)
        img.classList = "product-image"
        let h2 = document.createElement("h2")
        h2.classList = "product-title"
        h2.innerHTML = item.title
        let p = document.createElement("p")
        p.innerHTML = item.price
        p.classList = "product-price"
        let button = document.createElement("button")
        button.innerHTML = "Add To Cart"
        button.classList = "add-to-cart"
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)
        cards.appendChild(div)
    })
}
function filterProducts(){
    const searchValue = search.value.toLowerCase()
    const filtered = products.filter()
}
search.addEventListener("input", filterProducts);
fetchProducts()