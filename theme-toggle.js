const toggleInput = document.getElementById('input');
const logo = document.getElementById('logo');
const body = document.body;

toggleInput.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        logo.src = 'assets/logo2.png';
    } else {
        body.classList.remove('dark-mode');
        logo.src = 'assets/logo.png';
    }
});