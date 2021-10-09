
     
// Shopping Cart


let addToBag = document.querySelectorAll(".cart")

    for(let i = 0; i < addToBag.length; i++){
        fetchProducts()

        addToBag[i].addEventListener("click", () => {
            cartNumber(json[i])
            totalCosts(json[i])
        })
}
    function loadCartNumber() {
        let productItem = localStorage.getItem("product"); 

    if(productItem){
        document.querySelector(".add-to-cart").textContent = productItem;

    }
}

function cartNumber(item){
    const addToCartIcon = document.querySelector(".add-to-cart")

    let productItem = localStorage.getItem("product");
    productItem = parseInt(productItem);

    if(productItem){
    localStorage.setItem(`product`, productItem + 1);
    addToCartIcon.textContent = productItem + 1
    addToCartIcon.style.display= "block"


    }else{
        window.localStorage.setItem(`product`, 1);
        addToCartIcon.textContent = 1
    }
    setItems(item);
}

function setItems(item){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    console.log("my cart items are", cartItems)

    if(cartItems != null){

        if(cartItems[item.tags[0].name] == undefined){
            cartItems = { 
                ...cartItems,
                [item.tags[0].name]: item
            }
        }
        cartItems[item.tags[0].name].review_count += 1;
    } else{
    item.review_count = 1;
    cartItems = { 
        [item.tags[0].name]: item
    }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}
/* Total Cost */
function totalCosts(item){
    let cartCost = localStorage.getItem("totalCost")
    let itemPrice = item.prices.price

    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + + (itemPrice));
}else {
    localStorage.setItem("totalCost", itemPrice);

    }
}

function displayCart(){
    let productContainer = document.querySelector(".middle-checkout-section")
    let subTotalCost = document.querySelector(".end-checkout-section")
    let totalCost = document.querySelector(".middle2-rightcheckout-section")
    let cartCost = localStorage.getItem("totalCost")

    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)

    console.log(cartItems)
    


    if(cartItems && productContainer ){
        console.log("running")
        productContainer.innerHTML = "";

        Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product" data="name: ${item.name}">
            <div class="middle1">
                <img src=${item.images[0].src} alt=${item.images[0].alt} />
            </div>
            <div class="middle2">
                <h2>${item.name}</h2>
                <h3>NOK: ${item.prices.price}</h3>
                <p>
                    Heritage Jacket From The Outskirt Of France. This Jacket Is Made
                    By The Finest Wool And Cotton.
                </p>
                <div class="resize-p-ckp">
                    <p class="bold">Qty:</p>
                    <p>${item.review_count}</p>
                </div>
                <div class="resize-p-ckp">
                    <p class="bold">Color:</p>
                    <p>${item.tags[0].name}</p>
                </div>
            </div>
            <div class="middle3">
                <button class="remove-button" data-name="${item.name}">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
        </div>
        `
        subTotalCost.innerHTML = `<p>Sub-Total: NOK ${cartCost}</p>`
        totalCost.innerHTML = `
        <div>
        <p>NOK ${cartCost}</p>
        <p>FREE</p>
        <p>NOK ${cartCost}</p>
        </div>`
        
        })

        

 }}

loadCartNumber()
displayCart()


// // Add Item to cart (items)

    const removeButton = document.querySelectorAll(".remove-button")
    const productPrice = document.querySelector(".middle2 h3")
    for(let i = 0; i < removeButton.length; i++){
        const btn = removeButton[i]
            
            btn.addEventListener("click", function(event) {
                   btn.parentElement.parentElement.remove()
                   console.log(event.target)
    
    
               })
        }


        const continueShopping = document.querySelector("#Continue-Shopping")

        continueShopping.addEventListener("click", function(){
            window.localStorage.clear("productInCart")
            window.localStorage.clear("product")
            window.localStorage.clear("totalCost")

        })

