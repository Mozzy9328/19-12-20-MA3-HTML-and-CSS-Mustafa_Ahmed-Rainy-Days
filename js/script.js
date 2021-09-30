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



