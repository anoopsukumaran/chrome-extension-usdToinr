function formatParser(convertedTs) {
	var resultMap = convertedTs.split(" ");
	return resultMap[0];
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.responseText);
	document.getElementById('status').innerHTML = "₹ " + response.quotes.USDINR.toFixed(2);
	var convertedTs = convertTs(response.timestamp);
	var formattedTs = formatParser(convertedTs);
    document.getElementById('date').innerHTML = formattedTs.toString();
}

document.addEventListener('DOMContentLoaded', function() {
	var url = "http://apilayer.net/api/live?access_key=8c9fa78c5184e754ace0fb38fd22af7d&format=1";
    httpGet(url); 
});

function convertTs(Ts) {
 // Unixtimestamp
 var unixtimestamp = Ts;
 // Months array
 var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 // Convert timestamp to milliseconds
 var date = new Date(unixtimestamp*1000);
 // Year
 var year = date.getFullYear();
 // Month
 var month = months_arr[date.getMonth()];
 // Day
 var day = date.getDate();
 // Hours
 var hours = date.getHours();
 // Minutes
 var minutes = "0" + date.getMinutes();
 // Seconds
 var seconds = "0" + date.getSeconds();

 // Display date time in MM-dd-yyyy h:m:s format
 var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 
 return convdataTime;

}