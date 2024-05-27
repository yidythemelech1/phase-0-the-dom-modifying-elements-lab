// Remove the main element with the ID of 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the ID of the new h1 element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new h1 element
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your name

// Append the new h1 element to the body or another existing element
document.body.append(newHeader);

// Create a new div element
const newDiv = document.createElement('div');

// Append the new div to the body
document.body.append(newDiv);

// Create an unordered list
const ul = document.createElement('ul');

// Populate the unordered list with three list items
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the unordered list to the new div
newDiv.append(ul);

// Grab the element with the ID of 'main'
const mainElement = document.getElementById('main');

// Change its height and background color
mainElement.style.height = '300px';
mainElement.style.backgroundColor = '#27647B';

// Add some text to it
mainElement.textContent = "You've changed what's on the screen!";

// Further style modifications
mainElement.style.fontSize = '24px';
mainElement.style.marginLeft = '30px';
mainElement.style.lineHeight = 2;

// Add classes
mainElement.className = 'pet-listing dog';
mainElement.classList.remove('dog');
mainElement.classList.add('cat', 'sale');

// Remove the second child of the unordered list
const ulElement = document.querySelector('ul');
const secondLi = ulElement.querySelector('li:nth-child(2)');
ulElement.removeChild(secondLi);

// Remove the entire unordered list
ulElement.remove();

// Create a new div element for the custom message
const customMessageDiv = document.createElement('div');

// Set the text content of the new div
customMessageDiv.textContent = 'YOUR-NAME is the champion';

// Append the custom message div to the body or another existing element
document.body.append(customMessageDiv);
