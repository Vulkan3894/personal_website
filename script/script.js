// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


    // Add event listener to form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Prevent default form submission behavior
        event.preventDefault();
        // Submit the form using JavaScript
        // You can add additional processing here if needed
        this.submit();
    });
