// ========== VARIABLES ========== //
const nameField = document.getElementById('name');                      // grab name field
const titleField = document.getElementById('title');                    // grab title select field
const otherTitleLabel = document.getElementById('other-label');         // grab other label
const otherTitleField = document.getElementById('other-title');         // grab other title field
const selectShirt = document.createElement('option');                   // create initial color option "Please select a
                                                                          // T-shirt theme"
const colorOptions = document.getElementById('color');                  // grab color options
const colorOptionElements = document.querySelectorAll('#color option'); // grab all color options


selectShirt.text = 'Please select a T-shirt theme'; // set the text of new option
colorOptions.add(selectShirt, colorOptions[0]);     // and new option to the beginning of option list


// ========== INITIAL STATES ========== //
window.onload = () => nameField.focus(); // upon window load, set focus on name field
otherTitleLabel.style.display = 'none';  // hide other title
otherTitleField.style.display = 'none';  // hide other title field



// ========== LOOPS ========== //
for (i = 0; i < colorOptionElements.length; i++) { // disable option list items
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