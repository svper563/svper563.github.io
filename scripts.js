document.addEventListener('DOMContentLoaded', function() {
    console.log('page loaded.')
});

const contactLink = document.querySelector('.link');
const contactContainer = document.querySelector('#contact-container');
const contactClose = document.querySelector('#contact-close-button');

contactLink.addEventListener('click', () => {
    contactContainer.style.opacity = 1;
    contactContainer.style.width = '90vw';
    contactContainer.style.height = '90vh';
    console.log('Link clicked.');

});

contactClose.addEventListener('click', () => {
    contactContainer.style.opacity = 0;
    contactContainer.style.width = '0vw';
    contactContainer.style.height = '0vh';
    console.log('close button clicked.')
});