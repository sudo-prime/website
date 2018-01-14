var countDownDate = new Date("Apr 5, 2018 13:00:00").getTime();
var d = new Date();
var offset = -5;
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

var now = new Date(utc + (3600000 * offset)).getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

window.onload = function() {
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        document.getElementById("message").innerHTML = "PAX IS UPON US!";
		document.getElementById("days").innerHTML = "0";
		document.getElementById("hours").innerHTML = "0";
		document.getElementById("minutes").innerHTML = "0";
		document.getElementById("seconds").innerHTML = "0";
    }

    var timer = setInterval(function() {

        d = new Date();
        utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        now = new Date(utc + (3600000 * offset)).getTime();

        distance = countDownDate - now;

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "PAX IS UPON US!";
        }
    }, 1000);
}
