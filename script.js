// Create the 'Back to Top' button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#6a11cb';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.zIndex = '1000';

// Add the button to the body
document.body.appendChild(backToTopButton);

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
