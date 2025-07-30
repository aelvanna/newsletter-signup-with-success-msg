// Select the form from which data will be collected
const form = document.querySelector(".form");
// Select the HTML that will be hidden when not necessary
// Select the success message that displays after form submission
const successMessage = document.querySelector(".success-message");
// Select the container section with the header and form sections
const container = document.querySelector(".container");

/* Function that prevents the default form submission behaviour and replaces it
/* with the function to collect the submitted form data and display the data in 
/* a success message. The form sections will be hidden and replaced with the
/* success message */
function handleSubmit(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  // Collect form data
  const data = Object.fromEntries(new FormData(e.target));

  /* Hide the header and form after submission by adding a class
  /* that sets display to none, to create room for success message*/
  form.classList.add("form--submitted");
  container.classList.add("form--submitted");

  /* Display the success message */
  successMessage.style.display = "flex"; // Show the success message
  /* Select the class where the email collected from the form submission will be
  /* displayed from the HTML */
  const submittedEmail = document.querySelector(".submitted-email");
  /* Inject the email collected into the its corresponding HTML class */
  submittedEmail.textContent = data.email;
}

/* Function to dismiss the success message, by selecting the class with the message
/* and setting display to none. The form will then be displayed again */
function dismissSuccessMessage() {
  successMessage.style.display = "none";
  form.classList.remove("form--submitted");
  container.classList.remove("form--submitted");
}

// Add an event listener to the form__button to handle form submission
form.addEventListener("submit", handleSubmit);

// Select the dismiss message button
const dismissMsgButton = document.querySelector(".success-message__button");
// Add an event listener to the success-message__button to remove the success message
// and display the header and form again.
dismissMsgButton.addEventListener("click", dismissSuccessMessage);
