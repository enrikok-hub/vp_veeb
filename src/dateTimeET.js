const dateNowFormattedET = function() {
	let timeNow = new Date();
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeNowFormattedET = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const weekDayNowET = function(){
	let timeNow = new Date();
	const weekdayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
	return weekdayNamesEt[timeNow.getDay()];
}

const partOfDay = function(){
	let dayPart = "suvaline aeg";
	let hourNow = new Date().getHours();
	if (hourNow <= 6){
		dayPart = "Varahommik";
	} else if (hourNow < 12){
		dayPart = "Hommik";
	} else if (hourNow == 12){
		dayPart = "Keskpäev";
	} else if (hourNow < 5){
		dayPart = "Lõuna"
	}
	return dayPart;
}

//ekspordin kõik vajaliku
module.exports = {fullDate: dateNowFormattedET,fullTime: timeNowFormattedET, weekDay: weekDayNowET, dayPart: partOfDay};