console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

// grab the add button element
const addBtn = document.querySelector("#add-btn");

//this function will add items to users "cart"
const updateList = (event) => {
    const icon = event.target;
    icon.classList.toggle("bi-bag");
    icon.classList.toggle("bi-bag-check");
    icon.classList.toggle("in-cart");
}; // end of updateList

//this function will remove the division
const removeItem = (event) => {
    const icon = event.target;
    icon.parentElement.remove();
}; //end of remove item

// add button event listener
addBtn.addEventListener("click",() => {
    //get the info from the user
    const itemInput = document.querySelector("#item");
    const emojiSelect = document.querySelector("#department");

    const item = itemInput.value.trim();
    const emoji = emojiSelect.value; 

    if (item){
    //now create the division
    const itemDiv = buildItem(emoji,item)

    document.querySelector(".right").append(itemDiv);
    } else{
        alert("Please enter a name for the item.");
    }
    itemInput.value = "";
    itemInput.focus();
    emojiSelect.value = "🥣";
}); //end of add button listener

// this function will build the HTML for each item
function buildItem(emoji,item){
    //create the HTML elements
    const itemDiv = document.createElement("div");
    const emojiSpan = document.createElement("span");
    const itemSpan = document.createElement("span");
    const bagIcon = document.createElement("i");
    bagIcon.addEventListener("click", updateList);
    const trashIcon = document.createElement("i");

    //add the text and class info
    itemDiv.className = "item";
    emojiSpan.className = "emoji";
    emojiSpan.innerText = emoji;
    itemSpan.className = "item-description";
    itemSpan.innerText = item;
    bagIcon.className = "bi bi-bag add-icon"
    trashIcon.className = "bi bi-trash delete-icon"
    trashIcon.addEventListener("click", removeItem)
    //build the component
    itemDiv.append(emojiSpan,itemSpan, bagIcon, trashIcon);

    return itemDiv;


} //end of build Item function