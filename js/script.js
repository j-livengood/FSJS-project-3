// ========== VARIABLES ========== //
const nameField = document.getElementById('name');                      // grab name field
const titleField = document.getElementById('title');                    // grab title select field
const otherTitleLabel = document.getElementById('other-label');         // grab other label
const otherTitleField = document.getElementById('other-title');         // grab other title field
const initialColorOption = document.createElement('option');            // create initial color option "Please select a
                                                                          // T-shirt theme"
const colorOptions = document.getElementById('color');                  // grab color options
const colorOptionElements = document.querySelectorAll('#color option'); // grab all color options

const selectShirt = document.createElement('option');
selectShirt.text = 'Please select a T-shirt theme';
colorOptions.add(selectShirt, colorOptions[0]);


// ========== INITIAL STATES ========== //
window.onload = () => nameField.focus(); // upon window load, set focus on name field
otherTitleLabel.style.display = 'none';  // hide other title
otherTitleField.style.display = 'none';  // hide other title field



// ========== LOOPS ========== //
for (i = 0; i < colorOptionElements.length; i++) {
  colorOptionElements[i].disabled = true;
  //console.log(i);
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

// 1. grab color options
// 2. hide color options
// 3. add "Please select a T-shirt theme"