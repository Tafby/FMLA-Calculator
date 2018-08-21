function addworkweeks(startDate, numberOfWeeks) {
  if (!numberOfWeeks) { numberOfWeeks = 12; }
  var numberOfDays = numberOfWeeks * 5;
  var count = 0;
  var currentDate = moment(startDate);
  var arrayOfDates = [];
  while(count < numberOfDays) {
    currentDate.add(1, "day");
    if (currentDate.day() === 0 || currentDate.day() === 6 || currentDate.isHoliday()) {
      continue;
    }
    arrayOfDates.push(currentDate.toDate());
    count++;
  }
  return arrayOfDates;
}


$(document).ready(function() {
  //get the element
  var element = document.getElementById("fmlacalendar");
  //Create the calendar
  var fmlaCalendar = jsCalendar.new(element);

  //Add events
  fmlaCalendar.onDateClick(function(event, date) {
    fmlaCalendar.clearselect();
    fmlaCalendar.set(date);
    var listOfDates = addworkweeks(date, 12);
    fmlaCalendar.select(listOfDates);
    var lastDate = listOfDates[listOfDates.length - 1];
    $("#result").html("12 weeks from " + moment(date).format("MM/DD/YYYY") + " is " + moment(lastDate).format("MM/DD/YYYY"));

  });
});
