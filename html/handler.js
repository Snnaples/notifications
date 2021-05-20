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
                const colors = ["~w~","~b~","~p~","~g~","~y~","~o~","~r~","~u~","~c~","~m~"]
                let cplm = json.text
                var regex = new RegExp(colors[0],"g");
                var out = cplm.replace(regex,"")
                for(let i = 0; i < colors.length; i++) {
                var regex = new RegExp(colors[i],"g");
                out = out.replace(colors[i],"")
                }
                notif(out)
                setTimeout(notifD, json.time);
            }
        });
    };
});
