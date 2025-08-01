const form = document.querySelector(".form");
const submittedEmail = document.querySelector(".submitted-email");
const dismissMsgButton = document.querySelector(".success-message__button");
const emailInput = form.querySelector("#form__email");
const errorMessageText = form.querySelector(".form__error-message");

/** Function
/* Handles Validation. Checks if an email address has been entered by the user and
/* if so, whether it is a valid email with characters on either side of the @ symbol.
/* If either of the above rules are not true, then display an error message.
/* For users with assistive technology, sets aria-invalid attribute to true if an error
/* occurs.
/* @param {email} : The email address submitted through the form
**/

function validateEmail(email) {
  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    emailInput.setAttribute("aria-invalid", "true");
    return "Valid email required";
  } else {
    emailInput.setAttribute("aria-invalid", "false");
    return "";
  }
}

/** Function
 * Handles the form submission, displays the success message,
 * and populates it with the submitted email address.
 * @param {Event} e : The form submission event.
 **/

function handleSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  const errorMessage = validateEmail(data.email);

  if (!errorMessage) {
    document.body.classList.add("success-state-active");

    submittedEmail.innerHTML = data.email;
    // Clear previous error state on success
    emailInput.classList.remove("form__field--error");
    errorMessageText.innerHTML = "";
  } else {
    emailInput.classList.add("form__field--error");
    errorMessageText.innerHTML = errorMessage;
  }
}

/** Function
 * Dismisses the success message and returns to the form view.
 */

function dismissSuccessMessage() {
  /* Remove the success state class to switch back to the form view */
  document.body.classList.remove("success-state-active");

  /* Reset the form for the next submission */
  emailInput.classList.remove("form__field--error");
  errorMessageText.innerHTML = "";
  form.reset();
}

/* Adds an event listener to the form__button to handle form submission */
form.addEventListener("submit", handleSubmit);

/* Adds an event listener to the success-message__button to remove the success message */
/* and display the header and form again. */
dismissMsgButton.addEventListener("click", dismissSuccessMessage);
