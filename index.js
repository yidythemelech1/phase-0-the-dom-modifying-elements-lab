// Remove the main element with the ID of 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the ID of the new h1 element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new h1 element
newHeader.textContent = 'yidythemelech is the champion';

// Append the new h1 element to the body
document.body.append(newHeader);

