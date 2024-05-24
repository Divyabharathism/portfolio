// // Function to perform when header is clicked
// function headerClickHandler() {
//   // Add a class to the header
//   this.classList.toggle('active');
  
//   // Add any other operations you'd like to perform here
// }

// // Add event listener to the header element
// document.querySelector('header').addEventListener('click', headerClickHandler);
// Function to perform when header is clicked
function headerClickHandler() {
  // Scroll the page to the top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to the header element
document.querySelector('header').addEventListener('click', headerClickHandler);
