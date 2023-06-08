

// Script.js
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
});
