$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(chance >= 90) {
		cenafy();
	}
});

var sources = [
	"<video id='lenny6969' autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.webm' type='video/webm'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.mp4' type='video/mp4'></video>",
	"<video id='lenny6969' autoplay loop style='height: 100vh; width: 100vw'><source src='https://my.mixtape.moe/dedwin.webm' type='video/webm'></video>"
	];

var generateHTML = function() {
	var chance = Math.floor(Math.random() * (sources.length));
	return sources[chance];
};

var cenafy = function() {
	setTimeout(function() { // Wait 3 seconds before cenafying
		var html = generateHTML();
		$('body').prepend(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() { // Wait 20 seconds for cena to finish
			//window.location.replace(document.URL);
			$('#lenny6969').remove();
		}, 15000);
	}, 3000);
};
