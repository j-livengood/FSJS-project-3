// ========== VARIABLES ========== //
  // ----- Job Role Field ----- //
const nameField = document.getElementById('name');                        // grab name field
const titleField = document.getElementById('title');                      // grab title select field
const otherTitleLabel = document.getElementById('other-label');           // grab other label
const otherTitleField = document.getElementById('other-title');           // grab other title field
  // ----- t-shirt field ----- //
const themeOptions = document.getElementById('design');                   // grab color options
const colorOptions = document.getElementById('color');                    // grab color options
const colorOptionElements = document.querySelectorAll('#color option');   // grab all color options
const colorLabel = document.querySelector('label[for="color"]');          // grab color label
colorLabel.textContent = 'Please select a T-shirt theme';                 // change color label
  // ----- activities field ----- //
const activitiesField = document.querySelector('.activities');            // grab acivities field
const activities = document.querySelectorAll('input[type = "checkbox"]'); //grab checkboxes
const totalCost = document.createElement('h3');                           // create h3


  // ----- payment field ----- //
const paymentSelect = document.getElementById('payment');                 // grab payment select
const paymentOptions = paymentSelect.children;                            // grab payment options
const creditCard = document.getElementById('credit-card');                // grab credit card div
const paypal = document.getElementById('paypal');                         // grab paypal div
const bitcoin = document.getElementById('bitcoin');                       // grab bitcoin div




// ========== INITIAL STATES ========== //
window.onload = () => nameField.focus();    // upon window load, set focus on name field
otherTitleLabel.style.display = 'none';     // hide other title
otherTitleField.style.display = 'none';     // hide other title field
let total = 0;                              // set total to zero
activitiesField.appendChild(totalCost);     // append total cost to activities field
totalCost.textContent = `Total: $${total}`; // fill total cost text
paymentOptions[0].hidden = true;            // hide select payment method option
paypal.style.display = 'none';              // hide paypal div
bitcoin.style.display = 'none';             // hide bitcoin div



// ========== LOOPS ========== //
for (let i = 0; i < colorOptionElements.length; i++) { // disable option list items
  colorOptionElements[i].disabled = true;

  if (i <= 2) {
    colorOptionElements[i].classList.add('puns');      // add puns class
  } else {
    colorOptionElements[i].classList.add('hearts');    // add hearts class
  }
}



// ========== CONDITIONALS ========== //



// ========== FUNCTIONS ========== //



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

window.addEventListener('change', (e) => {                     // add change listen to theme select field
  const designSelect = e.target;                               // event target
  const puns = document.getElementsByClassName('puns');        // grab puns
  const hearts = document.getElementsByClassName('hearts');    // grab hearts
  colorLabel.textContent = 'Color:';                           // change color label text

  if (designSelect === themeOptions) {       // if target is theme menu
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
  
  if (checkedTarget.checked) { // if the target is checked
    total += dataCostValue;    // add cost to toal
  } else {                     // else
    total -= dataCostValue;    // subtract cost from total
  }

  for (let i = 0; i < activities.length; i++) {                                  // loop over checkboxes
    const currentActivity = activities[i];                                       // grab current iteration
    const currentActivityTime = activities[i].getAttribute('data-day-and-time'); // grab current time
    
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

  if (paymentTarget === paymentSelect) {   // if target is payment method select
    switch (paymentValue) {                // switch depending on target value
      case 'credit card':                  // case credit card
        creditCard.style.display = '';     // show credit card
        paypal.style.display = 'none';     // hide paypal
        bitcoin.style.display = 'none';    // hide bitcoin
        break;
      case 'paypal':                       // case paypal
        creditCard.style.display = 'none'; // hide credit card
        paypal.style.display = '';         // show paypal
        bitcoin.style.display = 'none';    // hide bitcoin
        break;
      case 'bitcoin':                      // case bitcoin
        creditCard.style.display = 'none'; // hide credit card
        paypal.style.display = 'none';     // hide paypal
        bitcoin.style.display = '';        // show bitcoin
        break;
    }
  }
});