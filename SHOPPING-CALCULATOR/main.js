let itemsArray = [];

const itemInput = document.getElementById('user-Input');
const addBtn = document.getElementById('add-item');
const stopBtn = document.getElementById('show-total');
const outputDisplay = document.getElementById('output');

addBtn.addEventListener('click', function() {
  const newItem = itemInput.value.trim();
  
  if (newItem !== '') {
    itemsArray.push(newItem);
    itemInput.value = '';
    itemInput.focus();
  }
});

stopBtn.addEventListener('click', function() {
  if (itemsArray.length === 0) {
    outputDisplay.innerText = "No items were added.";
    return;
  }
  
  outputDisplay.innerText = "Final List: " + itemsArray.join(', ');
  itemsArray = [];
});
