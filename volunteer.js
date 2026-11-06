// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#fullname");
const result = document.querySelector("#result");

// TODO: Select the form, email input, and interest dropdown.
const form = document.querySelector("#volunteerForm");
const emailInput = document.querySelector("#email");
const interestSelect = document.querySelector("#interest");

// TODO: Add a submit event listener to the form.
form.addEventListener("submit" , function(event) {

// TODO: Prevent the default form submission.
event.preventDefault();

// TODO: Read the input values and check for missing information.
const fullName = nameInput.value;
const email = emailInput.value;
const interest = interestSelect.value;

// TODO: Display helpful errors or an interest-specific response.
if (fullName === "") {
result.textContent = "Please enter your full name.";
}
else if (email === "") {
result.textContent = "Please enter your email.";
}
else if (interest === "") {
result.textContent = "Please select an interest.";
}
else if (interest === "outreach") {
result.textContent = "Explore our community outreach programs!";
}
else if (interest === "events") {
result.textContent = "Explore our event support opportunities!";
}
else if (interest === "mentoring") {
result.textContent = "Venture out to our mentoring progtams";
}
else {
result.textContent = "Thank you, your interest has been subitted successfully";
}

console.log (fullName);
console.log (email);
console.log(interest);
});

