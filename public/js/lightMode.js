const navigation = document.querySelector('nav');
const about = document.querySelector('.aboutUs');
const contact = document.querySelector('.contactUs');
const customers = document.querySelector('.customers');
const footer = document.querySelector('footer');
const offers = document.querySelector('.offers');

const modeSwitch = document.querySelector('.mode');

const modeSwitchArray = [navigation, about, contact, customers, footer, offers];

modeSwitch.addEventListener('click', () =>{
    modeSwitchArray.forEach(section => {
        section.classList.toggle('lightMode');
    });
});