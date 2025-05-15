
// Enter various ages to get different results :)


// Grabs the button, input, and result
let ageButton = document.querySelector('.checkAge');
let ageBox = document.getElementById('age');
let answer = document.getElementById('answer');

// Grabs all of the images
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let img7 = document.getElementById('img7');

function ageChecker() {
    let age = ageBox.value;

    if (age <= 17) {
        answer.innerText = 'Go back to school!'; //Displays text once condition is met
        img1.style.display = 'block'; //Displays image once condition is met 
        img2.style.display = 'none' // Ensures images does not overlap
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
    } else if (age <= 20) {
        answer.innerText = 'Prepare to get drafted.';
        img2.style.display = 'block';
        img1.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
    } else if (age <= 21) {
        answer.innerText = 'Lets pop some bottles!!!';
        img3.style.display = 'block';
        img1.style.display = 'none'
        img2.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
    } else if (age <= 30) {
        answer.innerText = 'That mid-life crisis is creeping up on you.'
        img4.style.display = 'block';
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
    } else if (age <= 50) {
        answer.innerText = 'Welcome to the mid-life crisis stage.'
        img5.style.display = 'block';
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
    } else if (age <= 100) {
        answer.innerText = 'Time for the retirement home bud.'
        img6.style.display = 'block';
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img7.style.display = 'none'
    } else if (age <= Infinity) {
        answer.innerText = "You ain't that old. Stop lying."
        img7.style.display = 'block';
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
    } else {
        answer.innerText = 'Enter a valid age'
    }
}

ageButton.addEventListener('click', ageChecker);