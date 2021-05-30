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
const cartButton2 = document.querySelector(".cart")


let numberofClicks = 0


function addingToCart(){
    event.preventDefault()

    numberofClicks++

    cartIcon.style.display ="block"
    cartIcon.innerHTML = `<span> ${numberofClicks}</span>`
}

cartButton.addEventListener("click",addingToCart)
cartButton2.addEventListener("click",addingToCart)


