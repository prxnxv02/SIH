document.addEventListener('DOMContentLoaded', function() {
    const hostellerSelect = document.getElementById('hosteller');
    const rollnoContainer = document.getElementById('rollno-container');

    hostellerSelect.addEventListener('change', function() {
        if (this.value === 'yes') {
            rollnoContainer.style.display = 'block';
        } else {
            rollnoContainer.style.display = 'none';
        }
    });
});
