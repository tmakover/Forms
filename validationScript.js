"use strict";
// JavaScript code for form validation
	// Prevent form from submitting
  let form = document.getElementById("myForm");

      // Retrieve the input field value
      let inputField = document.getElementById("inputField");

      // Add an event listener to the form that submits an event
      form.addEventListener("submit", validateInput);

      // Regular expression pattern for alphanumeric input
      let alphanumeric = /^[a-z0-9]+$/i;

      // Check if the input value matches the pattern
      function validateInput(event) {
        let value = inputField.value;

        if (alphanumeric.test(value)) {
          // Valid input: display confirmation and submit the form
          alert("Input is valid. Thank you!");
        } else {
          // Invalid input: display error message
          alert("Error: Your input must be alphanumeric.");
          event.preventDefault();
        }
      }

        