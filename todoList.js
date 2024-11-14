let searchBtn = document.querySelector("#search");
let text = document.querySelector(".text");
let input = document.querySelector("#input");

searchBtn.addEventListener("click", () => {
    let inputValue = input.value;

    if(inputValue === ""){
        alert("Please Write an Item!");
    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputValue} <i class="ri-delete-bin-5-line"></i>`;
        text.appendChild(newElement);
        input.value = "";
        
        let deleteButton = newElement.querySelector("i");
        deleteButton.addEventListener("click", () => {
        newElement.remove();
    })
    }
    
    
})