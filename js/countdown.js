window.onload = countdwnTimer;


function countdwnTimer() {
  // Set the date we're counting down to
  var countDownDate = new Date("Dec 21, 2018 23:59:59").getTime();

  // Update the count down every 1 second
  var sec = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = days + "days, " + hours + "hours, "
    + minutes + "minutes, " + seconds + "seconds ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(sec);
      document.getElementById("timer").innerHTML = "2018's Fall Season Has Ended!";
      }
  }, 1000);
}