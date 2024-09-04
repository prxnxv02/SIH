const wheel = document.querySelector('.wheel');
const resultDiv = document.getElementById('result');
const spinButton = document.getElementById('spinButton');

const places = ["Australia", "USA", "PAKISTAN", "BRAZIL", "SOUTH KOREA"];

spinButton.addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Adds 720 to ensure it spins at least 2 full rounds
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        const selectedPlace = Math.floor((randomDegree % 360) / (360 / places.length));
        resultDiv.innerHTML = places[selectedPlace];
        resultDiv.classList.add('fire-pop');
        setTimeout(() => {
            resultDiv.classList.remove('fire-pop');
        }, 1000);
    }, 2000);
});
