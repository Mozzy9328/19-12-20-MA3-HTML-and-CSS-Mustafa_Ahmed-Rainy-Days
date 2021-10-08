


// Fetching products from WordPress to Men & Woman Page

const theJackets = document.querySelector(".jacket-list-container")

const url = `https://travelsofmozzy.one/wp-json/wc/store/products`

async function fetchProducts(){
        const response = await fetch(url)
        
        const json = await response.json()

        // const images = json.images
        console.log(json)
    
    theJackets.innerHTML = "";
    
    for (let i = 0; i < json.length; i++){


        theJackets.innerHTML = 
        `
<div class="jacket1">
    <img
    src= ${json[0].images[0].src}
    class="jacket-image-size"
     />
    <div class="heart-icon">
        <i class="fas fa-heart fa-2x fa-fw fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information">
        <p>${json[0].name}</p>
        <p>NOK ${json[0].prices.price}</p>
        <a href="#"><div class="cart">${json[0].add_to_cart.text}
        </div></a>
    </div>
</div>
<div class="jacket2">
    <img
    src= ${json[1].images[0].src}
    class="jacket-image-size"
    />
    <div class="heart-icon">
        <i class="fas fa-heart fa-2x fa-fw fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information">
        <p>${json[1].name}</p>
        <p>NOK ${json[1].prices.price}</p>
        <a href="#"><div class="cart">${json[1].add_to_cart.text}
        </div></a>
    </div>
 </div>
<div class="jacket3">
    <img
    src= ${json[2].images[0].src}
    class="jacket-image-size"
    />
    <div class="heart-icon">
        <i class="fas fa-heart fa-2x fa-fw fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information">
        <p>${json[2].name}</p>
        <p>NOK ${json[2].prices.price}</p>
        <a href="#"><div class="cart">${json[2].add_to_cart.text}
        </div></a>
    </div>
</div>
<div class="jacket4">
    <img
    src= ${json[3].images[0].src}
    class="jacket-image-size"
    />
    <div class="heart-icon">
        <i class="fas fa-heart fa-2x fa-fw fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information">
        <p>${json[3].name}</p>
        <p>NOK ${json[3].prices.price}</p>
        <a href="#"><div class="cart">${json[3].add_to_cart.text}
        </div></a>
    </div>
</div>
<div class="jacket5">
        <img
        src= ${json[4].images[0].src}
        class="jacket-image-size"
        />
    <div class="heart-icon">
        <i class="fas fa-heart fa-2x fa-fw fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information">
        <p>${json[4].name}</p>
        <p>NOK ${json[4].prices.price}</p>
        <a href="#"><div class="cart">${json[4].add_to_cart.text}
        </div></a>
    </div>
</div>
<div class="jacket6">
        <img
        src= ${json[5].images[0].src}
        class="jacket-image-size"
        />
    <div class="heart-icon">
        <i class="fas fa-heart fa-2x fa-fw fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information">
        <p>${json[5].name}</p>
        <p>NOK ${json[5].prices.price}</p>
        <a href="#"><div class="cart">${json[5].add_to_cart.text}
        </div></a>
    </div>
</div>`
    }    

    let addToBag = document.querySelectorAll(".cart")

    for(let i = 0; i < addToBag.length; i++){

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
    let productContainer = document.querySelector(".container-for-checkout")
    // const middle1 = document.querySelector(".middle1")
    // const middle2 = document.querySelector(".middle2")
    // const middle3 = document.querySelector(".middle3")
    let cartItemss = localStorage.getItem("productsInCart")
    cartItemss = JSON.parse(cartItemss)

    console.log(cartItemss)

    if(cartItemss && productContainer ){
        console.log("running")
        productContainer.innerHTML = "";
        Object.values(cartItemss).map(item => {
        productContainer.innerHTML += `
        <aside class="left-checkout">
        <section class="top-checkout-section">
            <h1>My Bag:</h1>
        </section>
        <section class="middle-checkout-section">
            <div class="middle1">
            <img src=${item.images[0].src} alt=${item.images[0].alt} />
            </div>
            <div class="middle2">
            <h2>${item.name}</h2>
            <h3>${item.prices.price}</h3>
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
                <button class="remove-button">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
        </section>
           
        `
        
        
        })
 }}

loadCartNumber()
displayCart()
}


fetchProducts();


// QueryStrings

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const productId = params.get("id")

console.log(productId)

const queryUrl ="https://travelsofmozzy.one/wp-json/wc/store/products/" + productId;




const jacketInfo = document.querySelector(".jis-child-1")
const rainyJones1 = document.querySelector(".rainy-jones1")
const rainyJones2 = document.querySelector(".rainy-jones2")
const rainyJones3 = document.querySelector(".rainy-jones3")
// const containerForCheckout = document.querySelector(".container-for-checkout")
const jacketColors = document.querySelector("#jacket-color")

async function jacketOption() {
    try{
        const res = await fetch(queryUrl)
        const details = await res.json()
        console.log(details)

jacketInfo.innerHTML = 
`
<h2>${details.name}</h2>
<h3>kr ${details.prices.price}</h3>
<p>
    Heritage Jacket From The Outskirt Of France. This Jacket Is Made
    By The Finest Wool And Cotton.
</p>`

rainyJones1.innerHTML = `
<img
src=${details.images[0].src}
alt=${details.images[0].alt}
            />`

rainyJones2.innerHTML = `
<img
src=${details.images[0].src}
alt=${details.images[0].alt}
            />`

rainyJones3.innerHTML = `
<img
src=${details.images[0].src}
alt=${details.images[0].alt}
            />`
jacketColors.innerHTML = `<option value="${details.tags[0].name}">${details.tags[0].name}</option>`;

    }catch(error){

    }
}

jacketOption()


// Add to cart functionaily (Numbers)


// const cartIcon = document.querySelector(".add-to-cart")
// const cartButton = document.querySelector("#Add-to-bag")

// let numberofClicks = 0


// function addingToCart(){
//     event.preventDefault()

//     numberofClicks++

//     cartIcon.style.display ="block"
//     cartIcon.innerHTML = `<span> ${numberofClicks}</span>`


// }

// cartButton.addEventListener("click", addingToCart)











// cartButtonMainPage.addEventListener("click", addingToCart)



// event.stopPropagation()
//    if(jacketColors.value === "yellow"){
//     rainyJones1.innerHTML = `
//     <div class="rainy-jones1">
// 		<img src="images/jacket1.jpg" alt="A image of RainyJones Jacket" />
// 	</div>`
//     rainyJones2.innerHTML = `
//     <div class="rainy-jones2">
//         <img src="images/jacket1.jpg" alt="A image of RainyJones Jacket" />
//     </div>`
//      rainyJones3.innerHTML = `
//      <div class="rainy-jones3">
//         <img src="images/jacket1.jpg" alt="A image of RainyJones Jacket" />
//      </div>` 
//     }

//    if(jacketColors.value === "blue"){
//     rainyJones1.innerHTML = `
//     <div class="rainy-jones1">
// 		<img src="images/jacket2.jpg" alt="A image of RainyJones Jacket" />
// 	</div>`
//     rainyJones2.innerHTML = `
//     <div class="rainy-jones2">
//         <img src="images/jacket2-reverse.jpg" alt="A image of RainyJones Jacket" />
//     </div>`
//      rainyJones3.innerHTML = `
//      <div class="rainy-jones3">
//         <img src="images/jacket2.jpg" alt="A image of RainyJones Jacket" />
//      </div>` }


//     if(jacketColors.value === "black"){
//         rainyJones1.innerHTML = `
//         <div class="rainy-jones1">
//             <img src="images/jacket5.jpg" alt="A image of RainyJones Jacket" />
//         </div>`
//         rainyJones2.innerHTML = `
//         <div class="rainy-jones2">
//             <img src="images/jacket5.jpg" alt="A image of RainyJones Jacket" />
//         </div>`
//          rainyJones3.innerHTML = `
//          <div class="rainy-jones3">
//             <img src="images/jacket5.jpg" alt="A image of RainyJones Jacket" />
//          </div>` }


//     if(jacketColors.value === "Green"){
//         rainyJones1.innerHTML = `
//         <div class="rainy-jones1">
//           <img src="images/jacket4.jpg" alt="A image of RainyJones Jacket" />
//         </div>`
//         rainyJones2.innerHTML = `
//         <div class="rainy-jones2">
//            <img src="images/jacket4.jpg" alt="A image of RainyJones Jacket" />
//         </div>`
//         rainyJones3.innerHTML = `
//         <div class="rainy-jones3">
//            <img src="images/jacket4.jpg" alt="A image of RainyJones Jacket" />
//         </div>` }
//    }

//    jacketColors.addEventListener("change", jacketOption) 


