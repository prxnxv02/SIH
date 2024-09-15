const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById('beam');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const loginButton = document.getElementById('submit');

// Handle mouse movement to animate the beam
root.addEventListener('mousemove', (e) => {
  let rect = beam.getBoundingClientRect();
  let mouseX = rect.right + (rect.width / 2); 
  let mouseY = rect.top + (rect.height / 2);
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = (rad * (20 / Math.PI) * -1) - 350;

  root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

// Toggle password visibility when clicking on the eye icon
eye.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('show-password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.focus();
});

// Handle login and redirect to the home page
loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the username
  const username = usernameInput.value;

  // Check if the username is not empty
  if (username.trim() !== '') {
    // Store the username in sessionStorage
    sessionStorage.setItem('username', username);

    // Redirect to the home page (index2.html)
    window.location.href = 'index2.html';
  } else {
    alert('Please enter a username.');
  }
});
