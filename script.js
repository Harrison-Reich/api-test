// This code is very linear and only can handle capturing, saving, and displaying 1 input request at a time
// Need to make code more dynamic to handle multiple entries saved to local storage

// define variables
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let displayFirstName = document.getElementById("displayFirstName")
let displayLastName = document.getElementById("displayLastName")
const submitBtn = document.getElementById("submitBtn");
const deleteBtn = document.getElementById("deleteBtn")

// submit button
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

// delete client side content and reset html fields to empty
deleteBtn.onclick = () => {
    console.log("Step 2: proper delete button to remove entry")
    displayFirstName.innerHTML = "",
    displayLastName.innerHTML = "",
    deleteBtn.innerHTML = "",
    deleteBtn.className = "btn";
}