function setCurrentDate() {
    var currentDate = new Date();

    // get day of week
    var daysOfWeek = new Array(7);
    daysOfWeek[0] = "Sunday";
    daysOfWeek[1] = "Monday";
    daysOfWeek[2] = "Tuesday";
    daysOfWeek[3] = "Wednesday";
    daysOfWeek[4] = "Thursday";
    daysOfWeek[5] = "Friday";
    daysOfWeek[6] = "Saturday";

    var weekNumber = currentDate.getDay();
    var weekString = daysOfWeek[weekNumber];

    // get day of month
    var dayOfMonth = currentDate.getDate();

    // get month
    var month = new Array(12);
    month[0] = "January";
    month[1] = "Fabruary";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var monthString = month[currentDate.getMonth()];

    //get year
    var year = currentDate.getFullYear();
    var currentDateString = weekString + ", " + dayOfMonth + " " + monthString + " " + year;

    document.getElementById("currentdate").innerHTML = currentDateString;

}




//(function() {
//    var currentDate = new Date();
//
//// get day of week
//var daysOfWeek = new Array(7);
//daysOfWeek[0] = "Sunday";
//daysOfWeek[1] = "Monday";
//daysOfWeek[2] = "Tuesday";
//daysOfWeek[3] = "Wednesday";
//daysOfWeek[4] = "Thursday";
//daysOfWeek[5] = "Friday";
//daysOfWeek[6] = "Saturday";
//
//
//// get month
//var month = new Array(12);
//month[0] = "January";
//month[1] = "Fabruary";
//month[2] = "March";
//month[3] = "April";
//month[4] = "May";
//month[5] = "June";
//month[6] = "July";
//month[7] = "August";
//month[8] = "September";
//month[9] = "October";
//month[10] = "November";
//month[11] = "December";
//
//
//var currentDateString = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
//
//document.getElementById("currentdate").innerHTML = currentDateString;
//})();
