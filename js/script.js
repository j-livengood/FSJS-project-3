// ========== VARIABLES ========== //
const nameField = document.getElementById('name');
const titleField = document.getElementById('title');
const otherTitleLabel = document.getElementById('other-label');
const otherTitleField = document.getElementById('other-title');



// ========== INITIAL STATES ========== //
window.onload = () => nameField.focus();
otherTitleLabel.style.display = 'none';
otherTitleField.style.display = 'none';



// ========== CONDITIONALS ========== //



// ========== EVENT LISTENERS ========== //
window.addEventListener('change', (e) => {
  let target = e.target;
  if (target === titleField) {
    if (target.value === 'other') {
      otherTitleLabel.style.display = '';
      otherTitleField.style.display = '';
    } else {
      otherTitleLabel.style.display = 'none';
      otherTitleField.style.display = 'none';
    }
  }
});