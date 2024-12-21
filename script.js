function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
  
  // Change icon
  if (document.body.classList.contains('night-mode')) {
    themeIcon.src = './assets/moon-icon.png'; // রাতের চাঁদের আইকন
  } else {
    themeIcon.src = './assets/sun-icon.png'; // সূর্যের আলো আইকন
  }
});

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
