const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('dark-mode', 'disabled');
  }
});