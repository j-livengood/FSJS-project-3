"use strict";

// ========== VARIABLES ========== //
const form = document.querySelector('form');                              // grab form
  // ----- Job Role Field ----- //
const nameField = document.getElementById('name');                        // grab name field
const nameLabel = document.querySelector('label[for="name"');             // grab name label
const emailField = document.getElementById('mail');                       // grab email field
const emailLabel = document.querySelector('label[for="mail"');            // grab email label
const titleField = document.getElementById('title');                      // grab title select field
const otherTitleLabel = document.getElementById('other-label');           // grab other label
const otherTitleField = document.getElementById('other-title');           // grab other title field
  // ----- t-shirt field ----- //
const shirtBox = document.querySelector('.shirt-box');                    // grab shirt div
const themeOptions = document.getElementById('design');                   // grab color options
const colorOptions = document.getElementById('color');                    // grab color options
const colorOptionElements = document.querySelectorAll('#color option');   // grab all color options
const colorLabel = document.querySelector('label[for="color"]');          // grab color label
colorLabel.textContent = 'Please select a T-shirt theme';                 // change color label
  // ----- activities field ----- //
const activitiesField = document.querySelector('.activities');            // grab acivities field
const activities = document.querySelectorAll('input[type = "checkbox"]'); // grab checkboxes
const totalCost = document.createElement('h3');                           // create h3
  // ----- payment field ----- //
const paymentSelect = document.getElementById('payment');                 // grab payment select
const paymentOptions = paymentSelect.children;                            // grab payment options
const creditCard = document.getElementById('credit-card');                // grab credit card div
const ccNumber = document.getElementById('cc-num');                       // grab cc number input
const zipCode = document.getElementById('zip');                           // grab zip code input
const cvv = document.getElementById('cvv');                               // grab cvv number input
const paypal = document.getElementById('paypal');                         // grab paypal div
const bitcoin = document.getElementById('bitcoin');                       // grab bitcoin div
const submit = document.querySelector('button[type = "submit"');          // grab submit button
  // ----- regex patterns for payment validation ----- //
const ccPatt = /^[0-9]{13,16}$/;                                          // credit card number regex pattern for 13-16 digits
const zipPatt = /^[0-9]{5}$/;                                             // zip code regex pattern for 5 digits
const cvvPatt = /^[0-9]{3}$/;                                             // cvv number regex pattern for 3 digits


// ========== INITIAL STATES ========== //
window.onload = () => nameField.focus();      // upon window load, set focus on name field
otherTitleLabel.style.display = 'none';       // hide other title
otherTitleField.style.display = 'none';       // hide other title field
themeOptions.firstElementChild.hidden = true; // hide 'select theme' option
let total = 0;                                // set total to zero
activitiesField.appendChild(totalCost);       // append total cost to activities field
totalCost.textContent = `Total: $${total}`;   // fill total cost text
paymentOptions[0].hidden = true;              // hide select payment method option
paymentSelect.value = 'credit card';          // set initial payment option to credit card
paypal.style.display = 'none';                // hide paypal div
bitcoin.style.display = 'none';               // hide bitcoin div



// ========== LOOPS ========== //
for (let i = 0; i < colorOptionElements.length; i++) { // disable option list items
  colorOptionElements[i].disabled = true;              // disable all color options
  if (i <= 2) {                                        // if i matches first 3 elements in colorOptionElements array
    colorOptionElements[i].classList.add('puns');      // add puns class
  } else {                                             // else
    colorOptionElements[i].classList.add('hearts');    // add hearts class
  }
}



// ========== FUNCTIONS ========== //
// first function dynamically creates hidden alert messages
  // text is text content - string
  // color is text color - string
  // display is display style - string
  // _addTo is the node you're adding the message to - nodes are saved in variables at the top
  // _location is one of the 4 options to give to insertAdjacentElement...'afterend', 'beforeend', etc.

const createAlert = (text, color, display, _addTo, _location) => { // dynamic function creating hidden alert messages
  const message = document.createElement('p');                     // create alert paragraph element
  message.textContent = text;                                      // set text content
  message.style.color = color;                                     // set text color
  message.style.display = display;                                 // set text display
  _addTo.insertAdjacentElement(_location, message);                // select node to add to, and location where to add
}

const checkName = () => {                               // check name function
  const nameValue = nameField.value;                    // grab value in name input
  if (nameValue.length > 0) {                           // if value is greater than 0
    nameField.style.borderColor = 'rgb(111, 157, 220)'; // set border color to original state
    return true;                                        // return true
  } else {                                              // else
    nameField.style.borderColor = 'red';                // set border color to red
    return false;                                       // return false
  }
}

const checkEmail = () => {                               // check email function
  const emailValue = emailField.value;                   // grab value in email input
  const atIndex = emailValue.indexOf('@');               // grab index of '@'
  const dotIndex = emailValue.lastIndexOf('.');          // grab last index of '.'
  if (atIndex > 1 && dotIndex > atIndex) {               // if index of '@' larger than 1 AND index of '.' greater than index of '@'
    emailField.style.borderColor = 'rgb(111, 157, 220)'; // set border color to original state
    return true;                                         // return true
  } else {                                               // else
    emailField.style.borderColor = 'red';                // set border color to red
    return false;                                        // return false
  }
}

const checkShirtTheme = () => {             // check shirt function
  const themeValue = themeOptions.value;    // grab value of shirt them select
  if (themeValue !== 'Select Theme') {      // if value is NOT 'Select Theme'
    themeOptions.style.borderColor = '';    // remove border color
    return true;                            // return true
  } else {                                  // else
    themeOptions.style.borderColor = 'red'; // set border color to red
    return false;                           // return false
  }
}

const checkActivities = () => {                 // check activities function
  for (let i = 0; i < activities.length; i++) { // loop over activities checkboxes
    if (activities[i].checked) {                // if one is checked
      return true;                              // return true
    }
  }
  return false;                                 // else, return false
}

const checkCcNumber = () => {
  if (ccPatt.test(parseInt(ccNumber.value))) {                // if cc number passes cc regex
    ccNumber.previousElementSibling.style.display = 'none';   // hide alert
    ccNumber.style.borderColor = 'rgb(111, 157, 220)';        // set cc input borderColor to initial color
    return true;                                              // return true
  } else {                                                    // else
    ccNumber.previousElementSibling.style.display = 'inline'; // show alert
    ccNumber.style.borderColor = 'red';                       // set cc input borderColor to red
    return false;                                             // return false
  }
}

const checkZipCode = () => {
  if (zipPatt.test(parseInt(zipCode.value))) {               // if zip code passes zip regex
    zipCode.previousElementSibling.style.display = 'none';   // hide alert
    zipCode.style.borderColor = 'rgb(111, 157, 220)';        // set zip input borderColor to initial color
    return true;                                             // return true
  } else {                                                   // else
    zipCode.previousElementSibling.style.display = 'inline'; // show alert
    zipCode.style.borderColor = 'red';                       // set zip input borderColor to red
    return false;                                            // return false
  }
}

const checkCvv = () => {
  if (cvvPatt.test(parseInt(cvv.value))) {               // if cvv number passes cvv regex
    cvv.previousElementSibling.style.display = 'none';   // hide alert
    cvv.style.borderColor = 'rgb(111, 157, 220)';        // set cvv input borderColor to initial color
    return true;                                         // return true
  } else {                                               // else
    cvv.previousElementSibling.style.display = 'inline'; // show alert
    cvv.style.borderColor = 'red';                       // set cvv input borderColor to red
    return false;                                        // return false
  }
}

const checkCreditCard = () => {                // check credit card number function
  if (paymentSelect.value === 'credit card') { // if menu value is 'credit card'
    checkCcNumber();                           // check cc number
    checkZipCode();                            // check zip code
    checkCvv();                                // check cvv
  }
}



// ========== EVENT LISTENERS ========== //
window.addEventListener('change', (e) => {    // add change listen to title select field
  const titleSelect = e.target;               // event target
  if (titleSelect === titleField) {           // if the target is the title field
    if (titleSelect.value === 'other') {      // and if the targets value is 'other'
      otherTitleLabel.style.display = '';     // set other label display to show
      otherTitleField.style.display = '';     // set other text field display to show
    } else {                                  // else if the target value is NOT 'other'
      otherTitleLabel.style.display = 'none'; // hide other label
      otherTitleField.style.display = 'none'; // hide other text field
    }
  }
});

themeOptions.addEventListener('change', (e) => {                    // add change listen to theme select field
  const designSelect = e.target;                              // event target
  const puns = document.getElementsByClassName('puns');       // grab puns
  const hearts = document.getElementsByClassName('hearts');   // grab hearts
  colorLabel.textContent = 'Color:';                          // change color label text
  if (designSelect === themeOptions) {                        // if target is theme menu
    if (designSelect.value !== 'Select Theme') {              // if value is NOT 'Select Theme'
      shirtBox.previousElementSibling.style.display = 'none'; // hide alert
      themeOptions.style.borderColor = '';                    // remove border color
    }
    if (designSelect.value === 'js puns') {  // if target value is js puns
      for (let i = 0; i < 3; i++) {          // loop over arrays
        puns[i].disabled = false;            // change puns disabled
        puns[i].style.display = '';          // change puns display
        puns[0].selected = true;             // select first puns option
        hearts[i].style.display = 'none';    // change hearts display
      }
    } else if (designSelect.value === 'heart js') { // if target value is heart js
      for (let i = 0; i < 3; i++) {                 // loop over arrays
        hearts[i].disabled = false;                 // change hearts disabled
        hearts[i].style.display = '';               // change hearts display
        hearts[0].selected = true;                  // select first hearts option
        puns[i].style.display = 'none';             // change puns display
      }
    }
  }
});

activitiesField.addEventListener('change', (e) => {                        // add change listen to checkboxes
  const checkedTarget = e.target;                                          // event target
  const dataCostValue = parseInt(checkedTarget.getAttribute('data-cost')); // grab target cost
  const dayAndTime = checkedTarget.getAttribute('data-day-and-time');      // grab target time
  if (checkedTarget.checked) {                                             // if the target is checked
    activitiesField.firstElementChild.style.display = 'none';              // change alert display
    total += dataCostValue;                                                // add cost to toal
  } else {                                                                 // else
    total -= dataCostValue;                                                // subtract cost from total
  }
  for (let i = 0; i < activities.length; i++) {                                    // loop over checkboxes
    const currentActivity = activities[i];                                         // grab current iteration
    const currentActivityTime = activities[i].getAttribute('data-day-and-time');   // grab current time
    if (dayAndTime === currentActivityTime && checkedTarget !== currentActivity) { // are there matching times?
      if (checkedTarget.checked) {                                                 // if yes, and one is checked
        currentActivity.disabled = true;                                           // disable the other one
      } else {                                                                     // else
        currentActivity.disabled = false;                                          // enable the other one
      }
    }
  }
  totalCost.textContent = `Total: $${total}`; // update the text of the total
})

window.addEventListener('change', (e) => {  // add change listen to payment select field
  const paymentTarget = e.target;           // payment target
  const paymentValue = paymentTarget.value; // grab value to payment select
  if (paymentTarget === paymentSelect) {    // if target is payment method select
    switch (paymentValue) {                 // switch depending on target value
      case 'credit card':                   // case credit card
        creditCard.style.display = '';      // show credit card
        paypal.style.display = 'none';      // hide paypal
        bitcoin.style.display = 'none';     // hide bitcoin
        paymentSelect.previousElementSibling.style.display = 'none';
        break;
      case 'paypal':                        // case paypal
        creditCard.style.display = 'none';  // hide credit card
        paypal.style.display = '';          // show paypal
        bitcoin.style.display = 'none';     // hide bitcoin
        paymentSelect.previousElementSibling.style.display = 'none';
        break;
      case 'bitcoin':                       // case bitcoin
        creditCard.style.display = 'none';  // hide credit card
        paypal.style.display = 'none';      // hide paypal
        bitcoin.style.display = '';         // show bitcoin
        paymentSelect.previousElementSibling.style.display = 'none';
        break;
    }
  }
});

['focusout', 'blur'].forEach(event => {                      // dynamically add focusout and blur even listeners
  nameField.addEventListener(event, () => {                  // listen to name field
    if (checkName()) {                                       // if checkName returns true
      nameLabel.nextElementSibling.style.display = 'none';   // hide alert
    } else {                                                 // else
      nameLabel.nextElementSibling.style.display = 'inline'; // show alert
    }
  });
  emailField.addEventListener(event, () => {                  // listen to email field
    if (checkEmail()) {                                       // if checkEmail returns true
      emailLabel.nextElementSibling.style.display = 'none';   // hide alert
    } else {                                                  // else
      emailLabel.nextElementSibling.style.display = 'inline'; // show alert
    }
  });
})

form.addEventListener('submit', (e) => {                              // listen for submit event
  if (!checkName()) {                                                 // if checkName returns false
    e.preventDefault();                                               // prevent default submit behavior
    nameLabel.nextElementSibling.style.display = 'inline';            // show alert
  };
  if (!checkEmail()) {                                                // if checkEmail returns false
    e.preventDefault();                                               // prevent default submit behavior
    emailLabel.nextElementSibling.style.display = 'inline';           // show alert
  };
  if (!checkShirtTheme()) {                                           // if checkShirtTheme returns false
    e.preventDefault();                                               // prevent default submit behavior
    shirtBox.previousElementSibling.style.display = 'inline-block';   // show alert
  };
  if (!checkActivities()) {                                           // if checkActivities returns false
    e.preventDefault();                                               // prevent default submit behavior
    activitiesField.firstElementChild.style.display = 'inline-block'; // show alert
  }
  
  // call validation functions on submit event
  checkName();
  checkEmail();
  checkShirtTheme();
  checkActivities();
  checkCreditCard();
})

// call dynamic createAlert function to add hidden alerts to page, passing in appropriate args for each
createAlert('Please enter your name.', 'red', 'none', nameLabel, 'afterend');
createAlert('Please enter a valid email.', 'red', 'none', emailLabel, 'afterend');
createAlert('Please choose a T-shirt.', 'red', 'none', shirtBox, 'beforebegin');
createAlert('Please choose your activities.', 'red', 'none', activitiesField.firstElementChild, 'beforebegin');
createAlert('Please select a payment method.', 'red', 'none', paymentSelect, 'beforebegin');
createAlert('Please enter a valid credit card number.', 'red', 'none', ccNumber, 'beforebegin');
createAlert('Please enter a valid zip code.', 'red', 'none', zipCode, 'beforebegin');
createAlert('Please enter a valid cvv.', 'red', 'none', cvv, 'beforebegin');