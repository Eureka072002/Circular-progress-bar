let progressBar = document.querySelector('.circular-progress');

let valueContainer = document.querySelector('.value-container');

console.log(progressBar, valueContainer);

let progressValue = 0;
let progressEndValue = 65;
let speed = 50;


let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    console.log(progressValue);
    if(progressValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);