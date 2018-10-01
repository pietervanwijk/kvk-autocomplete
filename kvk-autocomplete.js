var params = (new URL(document.location)).searchParams;
    var kvkNumber = params.get("kvk");
    if (kvkNumber.length === 8) { // only request if kvk number is 8 characters to avoid unnecessary calls
var xhr = new XMLHttpRequest();
	var url = 'https://yourserver.com/kvk-autocomplete/'; // enter the path to your own server here
	var queryParams = '?' +  encodeURIComponent('kvk') + '=' + encodeURIComponent(kvkNumber);
xhr.open('GET', url + queryParams);
	xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
console.log('response received');
        var rawData = this.responseText;
		var parsed = JSON.parse(rawData);
// if tradeNames doesn't exist, use currentStatutoryNames
if ( typeof parsed.data.items[0].tradeNames.currentTradeNames !== 'undefined') { 
		var companyName = parsed.data.items[0].tradeNames.currentTradeNames[0];
} else { var companyName = parsed.data.items[0].tradeNames.currentStatutoryNames[0];
}
if ( typeof parsed.data.items[0].businessActivities !== 'undefined') {
		var sbiCode = parsed.data.items[0].businessActivities[0].sbiCode;
}
if ( typeof parsed.data.items[0].addresses !== 'undefined') {
		var address = parsed.data.items[0].addresses[0].street;
var houseNumber =  parsed.data.items[0].addresses[0].houseNumber + parsed.data.items[0].addresses[0].houseNumberAddition;
		var postalCode = parsed.data.items[0].addresses[0].postalCode;
		var city = parsed.data.items[0].addresses[0].city;
}
if ( typeof parsed.data.items[0].businessActivities !== 'undefined') {
var sbi = parsed.data.items[0].businessActivities[0]. sbiCode;
}
// fill in your form id below, you can find it in the code under the publish tab
Cognito.load("forms", { id: "YOUR FORM ID", entry: { "CompanyName": companyName, "Postcode": postalCode, "Plaats": city, "Huisnummer": houseNumber, "Straatnaam": address, "Kvk": kvkNumber, "Sbi": sbi} });
		}
	}
xhr.send('');
}