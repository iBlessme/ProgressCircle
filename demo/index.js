
const progressCircle = new ProgressCircle('progressContainer');

let valueCircleInput = document.getElementById('valueInput');
let activeToggle = document.getElementById('activeToggle');
let hideToggle = document.getElementById('hideToggle');

const baseValue = 50;

progressCircle.setValue(baseValue);

if(valueCircleInput) {
    valueCircleInput.value = baseValue
    valueCircleInput.addEventListener('input', (input) => {
        let value = parseInt(input.target.value);
        if(isNaN(value)) value = 0;
        value = Math.max(0, Math.min(100, value));
        input.target.value = value;
        progressCircle.setValue(value);
    });
}

if(activeToggle) {
    activeToggle.addEventListener('click', () => {
        activeToggle.classList.toggle('active');
        if(activeToggle.classList.contains('active')){
            progressCircle.setAnimated(true);
        }else{
            progressCircle.setAnimated(false);
        }
    })
}

if(hideToggle) {
    hideToggle.addEventListener('click', () => {
        hideToggle.classList.toggle('active');
        if(hideToggle.classList.contains('active')){
            progressCircle.setHidden(true);
        }else{
            progressCircle.setHidden(false);
        }
    })
}