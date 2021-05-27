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
						<a href="index.html"> <img src="Images/Transparent Logo.png" /></a>
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
							<a href="search.html">
								<i class="fas fa-search fa-2x fa-fw fa-fw"></i>
							</a>
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
			</div>

            <div class="error-message">
            <div>
            
            <div> 
                <a href="index.html">
                     <p class="back-button">Home Page</p>
                </a>
            </div>
		</main>
		<footer class="index-footer">
			<p>Copyright &copy; 2020 Mustafa Ahmed | All Rights Reserved</p>
		</footer>
		<script src="js/script.js"></script>`
}

searchIcon.addEventListener("click", activateSearch)



// Search not working 

const clickedSearch = document.querySelector(".search-icon")
const error = document.querySelector(".error-message")

function errorMessage(){
    error.innerHTML += `
    <p> The search function is not working, Please try again later </p>
    `
}

clickedSearch.addEventListener("click", errorMessage)

