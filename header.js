function main(){
$(document).ready(function(){
	var url = "https://www.googleapis.com/calendar/v3/calendars/3sulfqph61f7puk84bps57hqrc@group.calendar.google.com/events?maxResults=200000&fields=items(start%2Csummary)&key=AIzaSyCHdMVFpUyHJZd6jTAyR066Hytq8_YzHzY";
	var today = new Date();
	today.getDate();
	today.getDay();
	today.getYear();
	var then = new Date();
	console.log("debug1");

	$.getJSON(url, function(data){
			console.log("debug2");
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


				then.setDate(day);
				then.setMonth(month);
				then.setFullYear(item.start.date.substring(0,4));

				//console.log(then.getDate() + " " + then.getMonth() + " " + then.getFullYear() + " "+item.summary.substring(3, item.summary.length+1));


				if(then.getFullYear() == today.getFullYear() || then.getDate() == today.getDate() || then.getMonth() == today.getMonth()){
					//$("#guestMessage").append(item.summary.substring(3, item.substring.summary.length));
					console.log("it worked!");
				}

			}
			console.log("debug3");
		
	});
});
}
main();