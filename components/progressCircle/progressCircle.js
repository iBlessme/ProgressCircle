class ProgressCircle {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createHtmlComponent();

        this.progressLine = this.container.querySelector('.progress-line');
        this.progressCircle = this.container.querySelector('.progress-circle');
        this.circleValue = 0;

        this.setValue(this.circleValue);
    }

    createHtmlComponent() {
        this.container.innerHTML = `
          <svg class="progress-circle">
                 <circle class="progress-bg" cx="50%" cy="50%" r="70"/>
                 <circle class="progress-line" cx="50%" cy="50%" r="70"/>
          </svg>
        `
    }

    setValue(value){
        this.circleValue = Math.max(0, Math.min(100, value));
        this.updateProgress();
    }
    getValue() {
        return this.circleValue;
    }

    setAnimated(activate) {
        if(activate){
            this.progressLine.classList.add('animated');
        }else{
            this.progressLine.classList.remove('animated');
        }
    }

    setHidden(activate){
        if(activate){
            this.progressCircle.classList.add('hidden');
        }else{
            this.progressCircle.classList.remove('hidden');
        }
    }

    updateProgress(){
        let circleLength = 2 * Math.PI * 70;
        let strokeDashoffset = circleLength - (this.circleValue / 100)  * circleLength;
        this.progressLine.style.strokeDashoffset = String(strokeDashoffset);
    }
}
