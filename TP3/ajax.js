function changePage(i) {
    "use strict";
    var req = new XMLHttpRequest();
    req.open("GET", "json/chapitre" + i + ".json");
    req.onerror = function () {
        console.log("Échec de chargement");
    };
    req.onload = function () {
        if (req.status === 200) {
            var data = JSON.parse(req.responseText),
                links = data.getElementById("links"),
                txt = data.getElementById("txt"),
                p = document.getElementById("txt");
            p.textContent = txt;
            for (var j; j < links.length; j += 1) {
                var li = document.createElement("li"),
                    a = document.createElement("li");
                a.textContent = links[j].txt;
                a.setAttribute("href", links[j].link);
                li.appendChild(a);
                document.getElementById("links").appendChild(li);
                a.addEventListener("click", function(){
                    
                });
            }
        } else {
            console.log("Erreur " + req.status);
        }
    };
    req.send();
}
function initialisation() {
    "use strict";
    changePage(1);
    var test = document.createElement("p");
    test.textContent = "texte";
    document.appendChild(test);
}




window.addEventListener("load", initialisation);