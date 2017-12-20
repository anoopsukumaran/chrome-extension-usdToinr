
function convertFormat(dateStr) {
    var parts = dateStr.split("-");
    return parts[2] + '-' + parts[1] + '-' + parts[0];
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.responseText);
	document.getElementById('status').innerHTML = "₹ " + response.rates.INR;
	var convertedRate = convertFormat(response.date);
    document.getElementById('date').innerHTML = convertedRate.toString();
}

document.addEventListener('DOMContentLoaded', function() {
	var url = "http://api.fixer.io/latest?base=USD";
    httpGet(url); 
});