function addworkweeks(startDate, numberOfWeeks) {
  if (!numberOfWeeks) { numberOfWeeks = 12; }
  var numberOfDays = numberOfWeeks * 5;
  var count = 0;
  var currentDate = startDate;
  while(count < numberOfDays) {
    currentDate.add(1, "day");
    if (currentDate.day() === 0 || currentDate.day() === 6 || currentDate.isHoliday()) {
      continue;
    }
    count++;
  }
  return currentDate;
}


$(document).ready(function() {
  var picker = new Pikaday({ field: $('#myDate')[0] });
  $( "#myDate" ).change(function() {
    var input = $('#myDate').val();
    var day = moment(input);
    var futureDate = addworkweeks(moment(input), 2);
    //var futureDate = moment(input).add(12, "weeks");
    $("#result").html("12 weeks from " + day.format("MM/DD/YYYY") + " is " + futureDate.format("MM/DD/YYYY"));

  });
});
