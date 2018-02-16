function initialisation() {
    "use strict";
    var date = new Date(), heure = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    document.getElementById("date").textContent = heure + ":" + min + ":" + sec;
    setTimeout(initialisation, 1000);
}


window.addEventListener("load", initialisation);