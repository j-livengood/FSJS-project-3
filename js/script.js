// ========== VARIABLES ========== //
const nameField = document.getElementById('name');                      // grab name field
const titleField = document.getElementById('title');                    // grab title select field
const otherTitleLabel = document.getElementById('other-label');         // grab other label
const otherTitleField = document.getElementById('other-title');         // grab other title field
const themeOptions = document.getElementById('design');                  // grab color options
const colorOptions = document.getElementById('color');                  // grab color options
const colorOptionElements = document.querySelectorAll('#color option'); // grab all color options
const colorLabel = document.querySelector('label[for="color"]');        // grab color label
colorLabel.textContent = 'Please select a T-shirt theme';               // change color label


// ========== INITIAL STATES ========== //
window.onload = () => nameField.focus(); // upon window load, set focus on name field
otherTitleLabel.style.display = 'none';  // hide other title
otherTitleField.style.display = 'none';  // hide other title field



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



// ========== EVENT LISTENERS ========== //
window.addEventListener('change', (e) => {    // add change listen to title select field
  let target = e.target;                      // event target
  if (target === titleField) {                // if the target is the title field
    if (target.value === 'other') {           // and if the targets value is 'other'
      otherTitleLabel.style.display = '';     // set other label display to show
      otherTitleField.style.display = '';     // set other text field display to show
    } else {                                  // else if the target value is NOT 'other'
      otherTitleLabel.style.display = 'none'; // hide other label
      otherTitleField.style.display = 'none'; // hide other text field
    }
  }
});

window.addEventListener('change', (e) => {                     // add change listen to theme select field
  let target = e.target;                                       // event target
  const puns = document.getElementsByClassName('puns');        // grab puns
  const hearts = document.getElementsByClassName('hearts');    // grab hearts
  colorLabel.textContent = 'Color:';                           // change color label text

  if (target === themeOptions) {          // if target is theme menu
    if (target.value === 'js puns') {     // if target value is js puns
      for (let i = 0; i < 3; i++) {       // loop over arrays
        puns[i].disabled = false;         // change puns disabled
        puns[i].style.display = '';       // change puns display
        hearts[i].style.display = 'none'; // change hearts display
      }
    } else if (target.value === 'heart js') { // if target value is heart js
      for (let i = 0; i < 3; i++) {           // loop over arrays
        hearts[i].disabled = false;           // change hearts disabled
        hearts[i].style.display = '';         // change hearts display
        puns[i].style.display = 'none';       // change puns display
      }
    }
  }
});