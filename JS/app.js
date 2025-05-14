let ageButton = document.querySelector('.checkAge');
// ageButton.addEventListener('click', ageChecker);

let ageBox = document.getElementById('age');

function ageChecker() {
    let age = ageBox.value;

    if (age <= 17) {
        let textAge = document.createElement('p');
        textAge.innerText = 'Go back to school!';
    }
}

ageButton.addEventListener('click', ageChecker);
