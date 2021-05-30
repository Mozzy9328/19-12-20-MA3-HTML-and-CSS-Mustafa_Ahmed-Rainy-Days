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


// buy

// const checkoutInfo = document.querySelector(".middle-checkout-section")

// function buyingItem() {
//     if(jacketColors.value === "yellow"){
//         checkoutInfo.innerHTML = `
//         <section class="middle-checkout-section">
//         <div class="middle1">
//             <img src="images/jacket1.jpg" alt="A image of a jacket" />
//         </div>
//         <div class="middle2">
//             <h2>Rainy Jones 2</h2>
//             <h3>$999.00</h3>
//             <p>
//                 Heritage Jacket From The Outskirt Of France. This Jacket Is Made
//                 By The Finest Wool And Cotton.
//             </p>
//             <div id="resize-p-ckp">
//                 <p id="bold">Qty:</p>
//                 <p>1</p>
//             </div>
//             <div id="resize-p-ckp">
//                 <p id="bold">Color:</p>
//                 <p>Yellow</p>
//             </div>
//         </div>
//     </section>` 

// }}

// buyingItem;


const cart = document.querySelector(".add-to-cart")
const cartButton = document.querySelector("#Add-to-bag")

let numberofClicks = 0


cartButton.onclick = function(){
    event.preventDefault()
    numberofClicks++
    cart.style.display ="block"
    cart.innerHTML = `<span> ${numberofClicks}</span>`
}


