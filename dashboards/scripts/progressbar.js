function move() {
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;
var currentDay = new Date().getDate();
var day = Math.floor(diff / oneDay);
var daysLeft = 365 - day;
var pctDay = (day / 365 );
var ytd =parseFloat(pctDay.toPrecision(2))*100;
const nameOfMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
  new Date(),
);

document.getElementById("pcttime").innerHTML = "<span style=\"font-size: 40px;color:orange;\">" + nameOfMonth + "  " + currentDay + ",  " + currentYear + "   [" + ytd.toLocaleString() + "%]<br>"+day+" days in "+ daysLeft+" days left";

var elem = document.getElementById("myBar");
width = ytd;
elem.style.width = width + "%";
}
move();
