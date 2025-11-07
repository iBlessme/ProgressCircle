
let progressContainer = document.getElementById("progressContainer");
let progressCircle = document.getElementById("progressCircle");
let valueCircleInput = document.getElementById("valueInput");
let activeToggle = document.getElementById("activeToggle");
let hideToggle = document.getElementById("hideToggle");

const updateProgress = (value) => {
    const circleLength = 2 * Math.PI * 70;
    const strokeDashoffset = circleLength - (value / 100)  * circleLength;
    progressCircle.style.strokeDashoffset = String(strokeDashoffset);
};

activeToggle.addEventListener("click", () => {
    activeToggle.classList.toggle('active');
    if(activeToggle.classList.contains('active')) {
        progressCircle.classList.add('animated');
    }else{
        progressCircle.classList.remove('animated');
    }
});

hideToggle.addEventListener("click", () => {
    hideToggle.classList.toggle('active');
    if(hideToggle.classList.contains('active')) {
        progressContainer.classList.add('hidden');
    }else{
        progressContainer.classList.remove('hidden');
    }
});

valueCircleInput.addEventListener("input", (input) => {
    let value = parseInt(input.target.value);
    value = Math.max(0, Math.min(100, value));
    input.target.value = value;
    updateProgress(value);
});


updateProgress(60);



