let cartItems = [];
let cartTotal = 0;

function addToCart() {
    let product = event.target.parentElement;
    let productName = product.querySelector('h2').innerText;
    let productPrice = parseFloat(product.querySelector('.price').innerText.replace('$', ''));

    cartItems.push({ name: productName, price: productPrice });
    cartTotal += productPrice;

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    let totalSpan = document.getElementById('cart-total');
    totalSpan.innerText = `$${cartTotal.toFixed(2)}`;
}

function checkout() {
    alert(`Total: $${cartTotal.toFixed(2)}\nThank you for your purchase!`);
    cartItems = [];
    cartTotal = 0;
    updateCart();
}