const hoursElementHTML = document.getElementById("hours");
const minutesElementHTML = document.getElementById("minutes");
const secondsElementHTML = document.getElementById("seconds");

const time = setInterval(
  function() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (hours < 10) {
      hours = "0" + hours
    }

    if (minutes < 10) {
      minutes = "0" + minutes
    }

    if (seconds < 10) {
      seconds = "0" + seconds
    }

    hoursElementHTML.textContent = hours
    minutesElementHTML.textContent = minutes
    secondsElementHTML.textContent = seconds
  }
);
