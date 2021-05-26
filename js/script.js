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