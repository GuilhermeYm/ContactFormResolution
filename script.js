const submitBtn = document.getElementById("buttonSubmit");
const inputLastName = document.getElementById("last_name");
const inputFirstName = document.getElementById("first_name");
const inputEmail = document.getElementById("email");
const generalEnquiry = document.getElementById("general_enquiry");
const supportRequest = document.getElementById("support_request");
const typeError = document.getElementById("error-type");
const textArea = document.getElementById("message");
const checkBox = document.getElementById("checkbox");
const termsError = document.getElementById("termsError");
const buttonSubmit = document.getElementById("buttonSubmit");
const sucessContainer = document.getElementById("sucess");
const messageMain = document.querySelector(".message-main");
const messageSecond = document.getElementById("message-second");

//First Name
inputFirstName.addEventListener("invalid", function (e) {
  e.preventDefault();
  inputFirstName.nextElementSibling.classList.add("active");
  inputFirstName.nextElementSibling.classList.remove("hide");
  inputFirstName.style.borderColor = "red";
});

inputFirstName.addEventListener("input", function () {
  if (inputFirstName.validity.valid) {
    inputFirstName.nextElementSibling.classList.remove("active");
    inputFirstName.nextElementSibling.classList.add("hide");
    inputFirstName.style.borderColor = "#ccc";
  }
});

//Second Name
inputLastName.addEventListener("invalid", function (e) {
  e.preventDefault();
  inputLastName.nextElementSibling.classList.add("active");
  inputLastName.nextElementSibling.classList.remove("hide");
  inputLastName.style.borderColor = "red";
});

inputLastName.addEventListener("input", function () {
  if (inputLastName.validity.valid) {
    inputLastName.nextElementSibling.classList.remove("active");
    inputLastName.nextElementSibling.classList.add("hide");
    inputLastName.style.borderColor = "#ccc";
  }
});

// Email
inputEmail.addEventListener("invalid", function (e) {
  e.preventDefault();
  inputEmail.nextElementSibling.classList.add("active");
  inputEmail.nextElementSibling.classList.remove("hide");
  inputEmail.style.borderColor = "red";
});

inputEmail.addEventListener("change", function () {
  if (inputEmail.validity.valid) {
    inputEmail.nextElementSibling.classList.add("hide");
    inputEmail.nextElementSibling.classList.remove("active");
    inputEmail.style.borderColor = "#ccc";
  }
});

//Radios
generalEnquiry.addEventListener("invalid", function (e) {
  e.preventDefault();
  typeError.classList.add("active");
  typeError.classList.remove("hide");
});

generalEnquiry.addEventListener("change", function () {
  typeError.classList.add("hide");
  typeError.classList.remove("active");
});

supportRequest.addEventListener("invalid", function (e) {
  e.preventDefault();
  typeError.classList.add("active");
  typeError.classList.remove("hide");
});

supportRequest.addEventListener("input", function () {
  typeError.classList.add(" hide");
  typeError.classList.remove("active");
});

// Textarea
textArea.addEventListener("invalid", function (e) {
  e.preventDefault();
  textArea.nextElementSibling.classList.add("active");
  textArea.nextElementSibling.classList.remove("hide");
  textArea.style.borderColor = "red ";
});

textArea.addEventListener("input", function () {
  textArea.nextElementSibling.classList.remove("active");
  textArea.nextElementSibling.classList.add("hide");
  textArea.style.borderColor = "#ccc";
});

// Checkbox
checkBox.addEventListener("invalid", function (e) {
  e.preventDefault();
  termsError.classList.add("active");
  termsError.classList.remove("hide");
});

checkBox.addEventListener("change", function (e) {
  termsError.classList.add("hide");
  termsError.classList.remove("active");
});

// Submit
submitBtn.addEventListener("click", function (e) {
  // Prevent the default form submission
  e.preventDefault();

  // Validate all fields
  const isFirstNameValid = inputFirstName.validity.valid;
  const isLastNameValid = inputLastName.validity.valid;
  const isEmailValid = inputEmail.validity.valid;
  const isGeneralEnquiryChecked = generalEnquiry.checked;
  const isSupportRequestChecked = supportRequest.checked;
  const isTextAreaValid = textArea.validity.valid;
  const isCheckBoxChecked = checkBox.checked;

  // If all fields are valid, show success message and hide the form
  if (isFirstNameValid && isLastNameValid && isEmailValid && (isGeneralEnquiryChecked || isSupportRequestChecked) && isTextAreaValid && isCheckBoxChecked) {
    sucessContainer.classList.remove("hide");
    sucessContainer.classList.add('active')
    messageMain.classList.remove("hide");
    messageSecond.classList.remove("hide");

    // Optionally, hide the form or clear the fields
    document.getElementById("form").classList.add("hide");
  } else {
    // Show error messages for invalid fields
    if (!isFirstNameValid) {
      inputFirstName.nextElementSibling.classList.add("active");
      inputFirstName.nextElementSibling.classList.remove("hide");
      inputFirstName.style.borderColor = "red";
    }
    if (!isLastNameValid) {
      inputLastName.nextElementSibling.classList.add("active");
      inputLastName.nextElementSibling.classList.remove("hide");
      inputLastName.style.borderColor = "red";
    }
    if (!isEmailValid) {
      inputEmail.nextElementSibling.classList.add("active");
      inputEmail.nextElementSibling.classList.remove("hide");
      inputEmail.style.borderColor = "red";
    }
    if (!isGeneralEnquiryChecked && !isSupportRequestChecked) {
      typeError.classList.add("active");
      typeError.classList.remove("hide");
    }
    if (!isTextAreaValid) {
      textArea.nextElementSibling.classList.add("active");
      textArea.nextElementSibling.classList.remove("hide");
      textArea.style.borderColor = "red";
    }
    if (!isCheckBoxChecked) {
      termsError.classList.add("active");
      termsError.classList.remove("hide");
    }
  }
});
