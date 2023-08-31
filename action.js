


var buttons = document.querySelectorAll(".bpiano")

buttons.forEach(e => {
    e.addEventListener("click",playSound)    
});


// for (let index = 0; index < buttons.length; index++) {
//     buttons[index].addEventListener("click",playSound);
// }

function playSound() {
    note = this.getAttribute("data-note")
    const audio = document.querySelector(`audio[data-note="${note}"]`)
    audio.currentTime = 0;
    audio.play();
}












