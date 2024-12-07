const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const myAudio = document.querySelector('#myAudio');  // Select the audio element

window.onload = function() {
            myAudio.play();
        };

// yesBtn.addEventListener('click', () => {
//     question.innerHTML = 'Sheyy Njn vrthe paranja U atrakkonnulla😅';
//     avt.innerHTML= ''
// });

yesBtn.addEventListener('click', () => { 
    const question = document.querySelector('.question'); // Assuming .question is the class
    const avt = document.querySelector('.avt'); // Selecting the image by its class

    // Update the text content
    question.innerHTML = 'Njn vrthe paranja U atrakkonnulla😅\nBut U R My CRUSH at first sight';
    
    // Change the image source
    avt.src = 'v2dd.png'; // Replace with your new image path
    myAudio.play(); 
    disableButtonsAndHide();
});

// Function to disable buttons and hide them
function disableButtonsAndHide() {
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Hide both buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
}


noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
