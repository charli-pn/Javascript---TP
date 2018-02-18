
function createAlarm() {
    "use strict";
    var alarmes = document.getElementById("alarmes"),
        div = document.createElement("div"),
        checkbox = document.createElement("input"),
        time = document.createElement("input"),
        text = document.createElement("input"),
        button = document.createElement("button"),
        select = document.createElement("select"),
        caramelo = document.createElement("option"),
        jingleA = document.createElement("option"),
        jingleC = document.createElement("option");
    
    checkbox.setAttribute("type", 'checkbox');
    checkbox.setAttribute("disabled", 'true');
    time.setAttribute("type", "time");
    text.setAttribute("type", "text");
    button.textContent = "-";
    div.setAttribute("class", "alarm");
    
    button.addEventListener('click', function () {
        var parent = button.parentElement;
        parent.parentElement.removeChild(parent);
    });
    
    caramelo.setAttribute("value", "caramelo");
    caramelo.textContent = "Caramelo";
    jingleA.setAttribute("value", "jingleA");
    jingleA.textContent = "JingleA";
    jingleC.setAttribute("value", "jingleC");
    jingleC.textContent = "JingleC";
    
    select.appendChild(caramelo);
    select.appendChild(jingleA);
    select.appendChild(jingleC);
    
    div.appendChild(checkbox);
    div.appendChild(time);
    div.appendChild(text);
    div.appendChild(select);
    div.appendChild(button);
    
    alarmes.appendChild(div);
}


function initialisation() {
    "use strict";
    var date = new Date(), heure = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    
    
    if (heure < 10) {heure = "0" + String(heure); } else {heure = String(heure); }
    if (min < 10) {min = "0" + String(min); } else {min = String(min); }
    if (sec < 10) {sec = "0" + String(sec); } else {sec = String(sec); }
    
    if (document.getElementsByClassName("alarm").length >= 0) {
        var alarmes = document.getElementById("alarmes"),
            listAlarmes = alarmes.children,
            i = 0;
        if (listAlarmes.length >= 0) {
            for (i; i < listAlarmes.length; i += 1) {
                var check = listAlarmes[i].children[0],
                    time = listAlarmes[i].children[1],
                    text = listAlarmes[i].children[2],
                    select = listAlarmes[i].children[3];
                if (time !== undefined) {
                    check.removeAttribute("disabled");
                }
                
                if (check.checked) {
                    if (time.value === heure + ":" + min && sec === "00") {
                        
                        if (text.value !== "") {
                            var choice = select.selectedIndex,
                                music = select.options[choice].value;
                            var player = document.querySelector('#'+music);
                            player.play;
                            alert(text.value);
                        } else {
                            alert("Alarme lancée");
                        }
                        
                    }
                }
                

            }
        }
    }
    document.getElementById("date").textContent = heure + ":" + min + ":" + sec;
    setTimeout(initialisation, 1000);
}


window.addEventListener("load", initialisation);
window.addEventListener("load", function () { "use strict";
    document.getElementById('addAlarm').addEventListener("click", createAlarm);
                                            });