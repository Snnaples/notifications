$(function(){
	window.onload = (e) => {
        /* 'links' the js with the Nui message from main.lua */
		window.addEventListener('message', (event) => {
			function notifD() {
				document.getElementById("nt").style.display="none";
			}
			function notif(text) {
				document.getElementById("te").innerHTML = text
				document.getElementById("nt").style.display="block";
			}
            //document.querySelector("#logo").innerHTML = " "
			var item = event.data;
			var json = JSON.parse(item);
			if (item !== undefined) {
				notif(json.text)
				setTimeout(notifD, json.time);
			}
		});
	};
});
