function main(){
$(document).ready(function(){
	var url = "https://www.googleapis.com/calendar/v3/calendars/3sulfqph61f7puk84bps57hqrc@group.calendar.google.com/events?maxResults=200000&fields=items(start%2Csummary)&key=AIzaSyCHdMVFpUyHJZd6jTAyR066Hytq8_YzHzY";
	var today = new Date();
	today.getDate();
	today.getDay();
	today.getYear();
	today.getMonth();
	today.setMOn
	var then = new Date();

	$.getJSON(url, function(data){
			for(i in data['items']){
				item = data['items'][i];

				var day  = item.start.date.substring(8,10);
				if(parseInt(day.substring(0,1)) == 0){
					day = day.substring(1,2);
				}
				var month = item.start.date.substring(5,7);
				if(parseInt(month.substring(0,1)) == 0){
					month = month.substring(1,2);
				}
				month--;

				then.setDate(day);
				then.setMonth(month);
				then.setFullYear(item.start.date.substring(0,4));

				if(then.getFullYear() == today.getFullYear() && then.getDate() == today.getDate() && then.getMonth() == today.getMonth()){
					document.getElementById("guestMessage").innerHTML += item.summary.substring(3, 6) + " opens at " + item.summary.substring(6, 10) + " and closes at " + item.summary.substring(13, 17) + "<br>";
				}

			}
		
	});
});
}
main();
