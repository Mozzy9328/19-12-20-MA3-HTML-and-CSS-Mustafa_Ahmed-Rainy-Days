// Fetching products from WordPress

const theJackets = document.querySelector(".jacket-list-container")

const url = `https://travelsofmozzy.one/wp-json/wc/store/products`

async function fetchProducts(){
        const response = await fetch(url)
        
        const json = await response.json()

        // const images = json.images
        console.log(json)
    
    theJackets.innerHTML = "";
    
    for (let i = 0; i < json.length; i++){


        theJackets.innerHTML += 
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
                <div class="cart">
                <a href="jacket-information.html?id=${json[0].id}">${json[0].add_to_cart.text}</a>
                </div>
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
            <div class="cart">
            <a href="jacket-information.html?id=${json[1].id}">${json[1].add_to_cart.text}</a>
            </div>
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
        <div class="cart">
        <a href="jacket-information.html?id=${json[2].id}">${json[2].add_to_cart.text}</a>
        </div>
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
        <div class="cart">
        <a href="jacket-information.html?id=${json[3].id}">${json[3].add_to_cart.text}</a>
        </div>
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
        <div class="cart">
        <a href="jacket-information.html?id=${json[4].id}">${json[4].add_to_cart.text}</a>
        </div>
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
        <div class="cart">
        <a href="jacket-information.html?id=${json[5].id}">${json[5].add_to_cart.text}</a>
        </div>
    </div>
    </div>
        </section>`
    }
}

fetchProducts();

// QueryStrings

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const productId = params.get("id")

console.log(productId)

const queryUrl ="https://travelsofmozzy.one/wp-json/wc/store/products/" + productId;



const jacketColors = document.querySelector("#jacket-color")
const jacketInfo = document.querySelector(".jis-child-1")
const rainyJones1 = document.querySelector(".rainy-jones1")
const rainyJones2 = document.querySelector(".rainy-jones2")
const rainyJones3 = document.querySelector(".rainy-jones3")
const containerForCheckout = document.querySelector(".container-for-checkout")
// const checkoutInfo = document.querySelector(".middle-checkout-section")



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
        jacketColors.innerHTML = `<option value="${details.tags[0].name}">${details.tags[0].name}</option>`


        // checkoutInfo.innerHTML = 
        // `<div class="middle1">
        //     <img src=${details.images[0].src}" alt=${details.images[0].alt} />
        // </div>
        // <div class="middle2">
        //     <h2>${details.name}</h2>
        //     <h3>${details.prices.price}</h3>
        //     <p>
        //         Heritage Jacket From The Outskirt Of France. This Jacket Is Made
        //         By The Finest Wool And Cotton.
        //     </p>
        //     <div class="resize-p-ckp">
        //         <p class="bold">Qty:</p>
        //         <p>1</p>
        //     </div>
        //     <div class="resize-p-ckp">
        //         <p class="bold">Color:</p>
        //         <p>${details.tags[0].name}</p>
        //     </div>
        // </div>
        // <button class="middle3">
        //     <i class="fas fa-minus-circle"></i>
        // </button>`
    }catch(error){}
}

jacketOption();


// Add to cart functionaily (Numbers)


const cartIcon = document.querySelector(".add-to-cart")
const cartButton = document.querySelector("#Add-to-bag")
// const cartButtonMainPage = document.querySelector(".cart")

let numberofClicks = 0


function addingToCart(){
    event.preventDefault()

    numberofClicks++

    cartIcon.style.display ="block"
    cartIcon.innerHTML = `<span> ${numberofClicks}</span>`


}

cartButton.addEventListener("click", addingToCart)
// cartButtonMainPage.addEventListener("click", addingToCart)


// Add Item to cart (items)



    const removeButton = document.querySelector(".remove-button")
    function logClick(){
 try{
   for(let i = 0; i < removeButton.length; i++){
       const btn = removeButton[i].name
       console.log("click")}

   }
 catch(error){
       console.log("Something Went Wrong")
    }
}
btn.addEventListener("click", logClick)


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




