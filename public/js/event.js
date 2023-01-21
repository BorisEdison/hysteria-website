
let dates = document.querySelectorAll(".date");
let rows = document.querySelectorAll(".eventList");
dates.forEach(n => n.addEventListener("click", ClickHandler));

function ClickHandler(){
    dates.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    let filter = this.getAttribute('data-filter');
    rows.forEach(row => {
        row.classList.add('hide');
        row.classList.remove('active');
        if(row.getAttribute('data-item')== filter|| filter=="All"){
            row.classList.add('active'); 
            row.classList.remove('hide'); 
        }
    });
}

var allRadios = document.getElementsByName('toggle');
        var booRadio;
        var x = 0;
        for(x = 0; x < allRadios.length; x++){

            allRadios[x].onclick = function() {
                if(booRadio == this){
                    this.checked = false;
                    booRadio = null;
                }else{
                    booRadio = this;
                }
            };
        }
// var millisecs = 10;
// var refreshIntervalId = setInterval(function() {
//     console.log('hello')
//     var $registered_number = $('#registered-number');
//     $registered_number.text(parseInt($registered_number.text())+1);
//     if ($badge.text()==100){
//         clearInterval(refreshIntervalId);
//     }
// }, millisecs);


var duration = 30 * 1000;
var end = Date.now() + duration;
let Day =document.querySelector(".days");
let Hour = document.querySelector(".hours");
let Minute = document.querySelector(".minutes");
let Second = document.querySelector(".seconds");
const countdown = () => {
    const newDate = new Date("April 05, 2022 10:30:00").getTime();
    const now = new Date().getTime();
    let gap = newDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    Day.innerText = textDay;
    Hour.innerText = textHour;
    Minute.innerText = textMinute;
    Second.innerText = textSecond;
    if(Day.innerText<=0 && Hour.innerText<=0 && Minute.innerText<=0 && Second.innerText<=0){
        Day.innerText=0; 
        Hour.innerText=0;
        Minute.innerText=0;
        Second.innerText=0;
    }
  };
  
  setInterval(countdown, 1000);

  
// (function frame() {
//   // launch a few confetti from the left edge
//   confetti({
//     particleCount: 55,
//     angle: 60,
//     spread: 95,
//     origin: { x: 0 }
//   });
//   // and launch a few from the right edge
//   confetti({
//     particleCount:55,
//     angle: 120,
//     spread: 95,
//     origin: { x: 1 }
//   });

//   // keep going until we are out of time
//   if (Date.now.getTime()== newDate.getTime()){ 
//     if(Date.now() < end) {
//         requestAnimationFrame(frame);
//     }
//     }
// }());