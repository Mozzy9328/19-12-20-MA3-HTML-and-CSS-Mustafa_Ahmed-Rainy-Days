const myDropDown = document.querySelector("#mydropdown")
const shoppingButton = document.querySelector(".dropbtn")
const dropDownContent = document.querySelector(".dropdown-content")


function dropDown(){
    
    myDropDown.classList.toggle("show")

    if (!event.target.matches(".dropbtn")) {

        for(let i = 0; i < dropDownContent.length; i++){
            const openDropDown = dropDownContent[i];
        if(openDropDown.classList.contains("show")){
            openDropDown.classList.remove("show")
        }
        }
    }
}

shoppingButton.addEventListener("click", dropDown)



// Search function 

const body = document.querySelector("body")
const searchIcon = document.querySelector(".search-icon-click")



function activateSearch() {
    
    body.innerHTML = `
        <header>
			<nav>
				<ul class="top-header-container">
					<li class="nav-1" id="fix-image">
						<a href="index.html"> <img src="images/transparent-logo.png"  alt="A transparent logo"/></a>
					</li>
					<li id="nav-2" class="text-nav">
						<a href="contact.html">Contact Us</a>
					</li>
					<li id="nav-3" class="text-nav">
						<div class="dropdown">
							<button class="dropbtn">Shopping</button>
							<div id="mydropdown" class="dropdown-content">
								<a href="men.html">Men</a>
								<a href="woman.html">Woman</a>
							</div>
						</div>
					</li>
					<li id="nav-4" class="text-nav">
						<a href="about.html">About Us</a>
					</li>
					<li class="nav-5">
						<div>
							<i class="fas fa-search fa-2x fa-fw fa-fw"></i>
						</div>
						<div>
							<i class="fas fa-user fa-2x fa-fw fa-fw"></i>
						</div>
						<div>
							<a href="checkout-page.html"
								><i class="fas fa-shopping-cart fa-2x fa-fw"></i
							></a>
						</div>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<div class="search-button">
				 <input
                        type="text"
                        id="search"
                        placeholder="Search for items, brands and inspiration..."
                 />
                <div class="search-icon">
                    <i class="fas fa-search fa-2x fa-fw fa-fw"></i>
                </div>
                <div class="error-message"></div>
            </div>
            <div> 
                <a href="">
                     <p class="back-button">Go Back</p>
                </a>
            </div>
		</main>
		<footer class="footer" style="margin-top:65px">
            <div class="social-media">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest"></i>
            </div>
			<p>Copyright &copy; 2020 Mustafa Ahmed | All Rights Reserved</p>
		</footer>
		<script src="js/script.js"></script>`
}

searchIcon.addEventListener("click", activateSearch)




//Search not working 

// const clickedSearchIcon = document.querySelector(".search-icon")
// const error = document.querySelector(".error-message")


// function errorMessage(event){
//     console.log("reeeeed")
//     error.innerHTML += `
//     <p style="background-color:red"> The search function is not working, Please try again later </p>
//     `
// }

// clickedSearchIcon.addEventListener("click", errorMessage)


// The Form Validation
const theForm = document.querySelector(".theform")

const fullName = document.querySelector("#fullname")
const fullnameError = document.querySelector(".fullname-error")

const email = document.querySelector("#email")
const emailError = document.querySelector(".email-error")

const subjet = document.querySelector("#subject")
const subjectError = document.querySelector(".subject-error")

const message = document.querySelector("#message")
const messageError = document.querySelector(".message-error")


function validationForm(event){
event.preventDefault()

    if(fullName.value.trim().length >= 3){
        fullnameError.style.display = "none"}
        else {
        fullnameError.style.display = "block"
        }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none"}
         else {
        emailError.style.display = "block"
          }
    if(subject.value.trim().length >= 5){
        subjectError.style.display = "none"}
        else {
            subjectError.style.display = "block"
        }   
    if(message.value.trim().length >= 10){
        messageError.style.display = "none"}
        else {
        messageError.style.display = "block"
        }           
        
    }

    theForm.addEventListener("submit", validationForm)


    function validateEmail(email){
        const regEx = /\S+@\S+\.\S+/;
        const patternMatch = regEx.test(email)
        return patternMatch;
    }

    localStorage.getItem("addingToCart")



// Fetching products from WordPress

const theJackets = document.querySelector(".jacket-list-container")

let url = `https://travelsofmozzy.one/wp-json/wc/store/products`

async function fetchProducts(){
        const response = await fetch(url)
        
        const json = await response.json()

        const images = json.images
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
                <p>Price: ${json[0].prices.price}</p>
                <div class="cart">
                <a href="https://travelsofmozzy.one/product?name=${json[0].name}">${json[0].add_to_cart.text}</a>
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
            <p>Price: ${json[1].prices.price}</p>
            <div class="cart">
            <a href="https://travelsofmozzy.one/product?name=${json[1].name}">${json[1].add_to_cart.text}</a>
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
        <p>Price: ${json[2].prices.price}</p>
        <div class="cart">
        <a href="https://travelsofmozzy.one/product?name=${json[2].name}">${json[2].add_to_cart.text}</a>
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
        <p>Price: ${json[3].prices.price}</p>
        <div class="cart">
        <a href="https://travelsofmozzy.one/product?name=${json[3].name}">${json[3].add_to_cart.text}</a>
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
        <p>Price: ${json[4].prices.price}</p>
        <div class="cart">
        <a href="https://travelsofmozzy.one/product?name=${json[4].name}">${json[4].add_to_cart.text}</a>
        </div>
    </div>
    </div>
        </section>`
    }
}

fetchProducts();

// QueryStrings

// function getParameter(parameterName){

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const productName = params.get("name")

console.log(productName)

const queryUrl ="http://travelsofmozzy.one/wp-json/wc/v3/products/" + productName;


