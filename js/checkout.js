// Add Item to cart (items)

const removeButton = document.querySelector(".remove-button")

     for(let i = 0; i < removeButton.length; i++)
     {
        let btn = removeButton[i]
        btn.addEventListener("click", function(event) {
           const btnClicked = event.target
            btnClicked.parentElement.parentElement.remove()
        })
     }



