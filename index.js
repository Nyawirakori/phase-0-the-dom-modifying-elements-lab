// Write your code here!
// Remove the <main> element with id="main"
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign the id 'victory' to newHeader
newHeader.id = "victory";

// Set the text content of newHeader
newHeader.textContent = "YOUR-NAME is the champion"; // Replace "YOUR-NAME" with your actual name

// Append the new header to the body
document.body.appendChild(newHeader);
