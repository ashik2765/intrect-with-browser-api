const addProduct =()=>{
    const productField = document.getElementById('Product-name');
    const quantityField = document.getElementById('Product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product,quantity);
}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('productContainer');
    const li = document.createElement('li')
    li.innerText=`${product}: ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product,quantity) =>{

    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    console.log(cartStringified);

}
const displayProductsFromLocalStorage =()=>{
    const saveCart = getStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product,quantity);
        displayProduct(product, quantity);
    }
    
}
displayProductsFromLocalStorage();