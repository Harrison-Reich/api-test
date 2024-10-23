//  - This code is very linear and only can handle capturing, saving, and displaying 1 input request at a time
//  - Need to make code more dynamic to handle multiple entries saved to local storage

// define variables
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let displayFirstName = document.getElementById("displayFirstName")
let displayLastName = document.getElementById("displayLastName")
const submitBtn = document.getElementById("submitBtn");
const deleteBtn = document.getElementById("deleteBtn")

// #submit button
submitBtn.onclick = () => {
    console.log("Step 1: working - set items to local storage and populate client side")
    // save items to local storage
    localStorage.setItem("First Name", firstName.value);
    localStorage.setItem("Last Name", lastName.value);
    // retrieve items from local storage and append to HTML elements on page
    displayFirstName.innerHTML = localStorage.getItem("First Name");
    displayLastName.innerHTML = localStorage.getItem("Last Name");
    deleteBtn.innerHTML = "x";
    deleteBtn.className = "btn btn-danger";
}

// #delete client side content and reset html fields to empty
deleteBtn.onclick = () => {
    console.log("Step 2: proper delete button to remove entry")
    displayFirstName.innerHTML = "",
    displayLastName.innerHTML = "",
    deleteBtn.innerHTML = "",
    deleteBtn.className = "btn";
}
// ###css but its js
// if page has a max-width of 425px aka mobile devices, change inner html of submit button
// match media =  takes 1 paramater, a string.
function init() {
    let query = window.matchMedia('(max-width: 425px)');
    if(query.matches) {
        submitBtn.innerHTML = "Submit";
    }
}
init();