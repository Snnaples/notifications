$(function(){
	window.onload = (e) => {
		window.addEventListener('message', (event) => {
			function notifD() {
				document.getElementById("nt").style.display="none";
			}
			function notif(text) {
				document.getElementById("te").innerHTML = text
				document.getElementById("nt").style.display="block";
			}    
			var item = event.data;
			var json = JSON.parse(item);
			if (item !== undefined) {
				notif(json.text)
				setTimeout(notifD, json.time);
			}
		});
	};
});
