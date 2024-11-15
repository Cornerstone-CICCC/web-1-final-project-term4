// Select all radio buttons with the name 'contact-method'
const contactMethods = document.querySelectorAll(
  'input[name="contact-method"]'
);
const phoneInput = document.getElementById("phone-input");

// Function to toggle visibility of the phone input based on selected option
function togglePhoneInput() {
  const selectedMethod = document.querySelector(
    'input[name="contact-method"]:checked'
  );

  // Show phone input only if "Call" is selected (based on data-target attribute)
  if (
    selectedMethod &&
    selectedMethod.getAttribute("data-target") === "phone-input"
  ) {
    phoneInput.style.display = "flex"; // Show as flex
  } else {
    phoneInput.style.display = "none"; // Hide it
  }
}

// Initial toggle to ensure phone input is displayed for the default checked option
togglePhoneInput();

// Add event listener for changes in the radio buttons
contactMethods.forEach((method) => {
  method.addEventListener("change", togglePhoneInput);
});

// Select all event options
const eventOptions = document.querySelectorAll(".event-option");

// Add click event listener to each option
eventOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove 'selected' class from all options
    eventOptions.forEach((opt) => opt.classList.remove("selected"));

    // Add 'selected' class to the clicked option
    option.classList.add("selected");
  });
});

$(document).ready(function () {
  // Initialize the date picker on the #event-date input field
  $("#event-date").datepicker({
    dateFormat: "mm/dd/yy",
    showAnim: "slideDown",
  });
});
