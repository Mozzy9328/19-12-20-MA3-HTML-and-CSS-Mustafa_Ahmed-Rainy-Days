// // Add Item to cart (items)

// const removeButton = document.querySelector(".remove-button")

//      for(let i = 0; i < removeButton.length; i++)
//      {
//         let btn = removeButton[i]
//         btn.addEventListener("click", function(event) {
//            const btnClicked = event.target
//             btnClicked.parentElement.parentElement.remove()
//         })
//      }



function displayCart(){
    const productContainer = document.querySelector(".container-for-checkout")
    // const middle1 = document.querySelector(".middle1")
    // const middle2 = document.querySelector(".middle2")
    // const middle3 = document.querySelector(".middle3")
    let cartItemss = localStorage.getItem("productsInCart")
    cartItemss = JSON.parse(cartItemss)

    console.log(cartItemss)

    if(cartItemss && productContainer ){
        console.log("running")
    //     productContainer.innerHTML = "";
    //     Object.values(cartItems).map(item => {
    //     productContainer.innerHTML += `
    //     <div class="middle1">
    //     <img src=${item.images[0].src} alt=${item.images[0].alt} />
    // </div>
    // <div class="middle2">
    //     <h2>${item.name}</h2>
    //     <h3>${item.prices.price}</h3>
    //     <p>
    //         Heritage Jacket From The Outskirt Of France. This Jacket Is Made
    //         By The Finest Wool And Cotton.
    //     </p>
    //     <div class="resize-p-ckp">
    //         <p class="bold">Qty:</p>
    //         <p>${item.review_count}</p>
    //     </div>
    //     <div class="resize-p-ckp">
    //         <p class="bold">Color:</p>
    //         <p>${item.tags[0].name}</p>
    //     </div>
    // </div>
    // <div class="middle3">
    //     <button class="remove-button">
    //         <i class="fas fa-minus-circle"></i>
    //     </button>
    // </div>
    //     `
        
        
    //     })
 }}