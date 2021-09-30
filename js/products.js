// Clickable Jackets 

const theJackets = document.querySelectorAll([".jacket1", ".jacket2", ".jacket3",".jacket4",".jacket5",".jacket6"])
const buttonCart = document.querySelector(".cart")

const queryString = document.location.search
const params = new URLSearchParams(queryString)
const color = params.get("color") 

console.log(color)

const queryUrl = 


buttonCart.addEventListener = "click", () => {
    for(let i = 0; i < theJackets.length; i++){
        buttonCart.innerHTML = `<a href= "jacket-information.html?=${theJackets[i]}"><button class="cart">Add to Bag</button></a>`
    }
}


// Choose a Jacket

const jacketColors = document.querySelector("#jacket-color")
const rainyJones1 = document.querySelector(".rainy-jones1")
const rainyJones2 = document.querySelector(".rainy-jones2")
const rainyJones3 = document.querySelector(".rainy-jones3")


function jacketOption(event) {
event.stopPropagation()
   if(jacketColors.value === "yellow"){
    rainyJones1.innerHTML = `
    <div class="rainy-jones1">
		<img src="images/jacket1.jpg" alt="A image of RainyJones Jacket" />
	</div>`
    rainyJones2.innerHTML = `
    <div class="rainy-jones2">
        <img src="images/jacket1.jpg" alt="A image of RainyJones Jacket" />
    </div>`
     rainyJones3.innerHTML = `
     <div class="rainy-jones3">
        <img src="images/jacket1.jpg" alt="A image of RainyJones Jacket" />
     </div>` 
    }

   if(jacketColors.value === "blue"){
    rainyJones1.innerHTML = `
    <div class="rainy-jones1">
		<img src="images/jacket2.jpg" alt="A image of RainyJones Jacket" />
	</div>`
    rainyJones2.innerHTML = `
    <div class="rainy-jones2">
        <img src="images/jacket2-reverse.jpg" alt="A image of RainyJones Jacket" />
    </div>`
     rainyJones3.innerHTML = `
     <div class="rainy-jones3">
        <img src="images/jacket2.jpg" alt="A image of RainyJones Jacket" />
     </div>` }


    if(jacketColors.value === "black"){
        rainyJones1.innerHTML = `
        <div class="rainy-jones1">
            <img src="images/jacket5.jpg" alt="A image of RainyJones Jacket" />
        </div>`
        rainyJones2.innerHTML = `
        <div class="rainy-jones2">
            <img src="images/jacket5.jpg" alt="A image of RainyJones Jacket" />
        </div>`
         rainyJones3.innerHTML = `
         <div class="rainy-jones3">
            <img src="images/jacket5.jpg" alt="A image of RainyJones Jacket" />
         </div>` }


    if(jacketColors.value === "Green"){
        rainyJones1.innerHTML = `
        <div class="rainy-jones1">
          <img src="images/jacket4.jpg" alt="A image of RainyJones Jacket" />
        </div>`
        rainyJones2.innerHTML = `
        <div class="rainy-jones2">
           <img src="images/jacket4.jpg" alt="A image of RainyJones Jacket" />
        </div>`
        rainyJones3.innerHTML = `
        <div class="rainy-jones3">
           <img src="images/jacket4.jpg" alt="A image of RainyJones Jacket" />
        </div>` }
   }

   jacketColors.addEventListener("change", jacketOption) 



   // Add to cart functionaily


const cartIcon = document.querySelector(".add-to-cart")
const cartButton = document.querySelector("#Add-to-bag")
const cartButtonMainPage = document.querySelector(".cart")


let numberofClicks = 0


function addingToCart(){
    event.preventDefault()

    numberofClicks++

    cartIcon.style.display ="block"
    cartIcon.innerHTML = `<span> ${numberofClicks}</span>`
}

cartButton.addEventListener("click", addingToCart)
cartButtonMainPage.addEventListener("click", addingToCart)
