var now = new Date();
var thisYear = new Date().getFullYear(); 

// DETERMINE UPCOMING RACE

var upcoming;
var raceDates = [];
var	currentDate = new Date().getTime();

for (var i = 0; i < races.length; i++) {
	raceDates.push(races[i].date.getTime())
}

var selectNextRace = function () {
	var futureRaces = [];
	for (var i = 0; i < races.length; i++) {
		if (raceDates[i] > currentDate) {
			futureRaces.push(i);
		}
	}
	upcoming = races[futureRaces[0]];
}

selectNextRace();

upcoming = races[4]; // UNCOMMENT TO SELECT RACE

// DISPLAY NEXT RACE

$('.title').html(thisYear + " " + upcoming.name);

// COUNTDOWN

var end = upcoming.date;

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var timer;

var showRemaining = function () {
    var now = new Date();
    var distance = end - now;

    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day) / hour);
    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (seconds === 1) {
        $('#secondstext').html("second");
    } else {
        $('#secondstext').html("seconds");
    }

    if (minutes === 1) {
        $('#minutestext').html("minute");
    } else {
        $('#minutestext').html("minutes");
    }

    if (hours === 1) {
        $('#hourstext').html("hour");
    } else {
        $('#hourstext').html("hours");
    }

    if (days === 1) {
        $('#daystext').html("day");
    } else if (days === 0) {
        $('#daysblock').css("display", "none");
    } else {
        $('#daystext').html("days");
    }    

}


showRemaining();
timer = setInterval(showRemaining, 1000);



// DISPLAY TRACK LAYOUT

$('.tracklayout img').attr("src", "images/" + upcoming.circuitImg);

// DISPLAY TRACK STATS

var schedule = upcoming.schedule;
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$('.trackinfo p:eq(0)').html(upcoming.circuitName);
$('.trackinfo p:eq(1)').html("Circuit length: " + upcoming.circuitLength);
$('.trackinfo p:eq(2)').html("Number of laps: " + upcoming.laps);
$('.trackinfo p:eq(3)').html("Race distance: " + upcoming.raceDistance);
$('.trackinfo p:eq(4)').html("Lap record: " + upcoming.lapRecord);
$('.trackinfo p:eq(5)').html(thisYear-1 + " results");
$('.trackinfo p:eq(6)').html("1. " + upcoming.lastYear[0].name);
$('.trackinfo p:eq(7)').html("2. " + upcoming.lastYear[1].name);
$('.trackinfo p:eq(8)').html("3. " + upcoming.lastYear[2].name);
$('.trackinfo p:eq(9)').html(thisYear + " schedule");
$('table tr:eq(0) td:eq(1)').html(dayNames[schedule.practice1.getDay()] + " " + schedule.practice1.getDate() + " " + monthNames[schedule.practice1.getMonth()]);
$('table tr:eq(0) td:eq(2)').html(schedule.practice1.getHours() + ":" + (schedule.practice1.getMinutes()<10?'0':'') + schedule.practice1.getMinutes());
$('table tr:eq(1) td:eq(1)').html(dayNames[schedule.practice2.getDay()] + " " + schedule.practice2.getDate() + " " + monthNames[schedule.practice2.getMonth()]);
$('table tr:eq(1) td:eq(2)').html(schedule.practice2.getHours() + ":" + (schedule.practice2.getMinutes()<10?'0':'') + schedule.practice2.getMinutes());
$('table tr:eq(2) td:eq(1)').html(dayNames[schedule.practice3.getDay()] + " " +  schedule.practice3.getDate() + " " + monthNames[schedule.practice3.getMonth()]);
$('table tr:eq(2) td:eq(2)').html(schedule.practice3.getHours() + ":" + (schedule.practice3.getMinutes()<10?'0':'') + schedule.practice3.getMinutes());
$('table tr:eq(3) td:eq(1)').html(dayNames[schedule.qualifying.getDay()] + " " + schedule.qualifying.getDate() + " " + monthNames[schedule.qualifying.getMonth()]);
$('table tr:eq(3) td:eq(2)').html(schedule.qualifying.getHours() + ":" + (schedule.qualifying.getMinutes()<10?'0':'') + schedule.qualifying.getMinutes());
$('table tr:eq(4) td:eq(1)').html(dayNames[schedule.race.getDay()] + " " + schedule.race.getDate() + " " + monthNames[schedule.race.getMonth()]);
$('table tr:eq(4) td:eq(2)').html(schedule.race.getHours() + ":" + (schedule.race.getMinutes()<10?'0':'') + schedule.race.getMinutes());

