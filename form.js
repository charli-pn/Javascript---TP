function checkAge(age) {
    "use strict";
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}

function checknumber(str) {
    "use strict";
    var i = 0,
        nb = 0;
    for (i; i < str.length; i += 1) {
        if (str[i].match(/[0-9]/)) {
            nb += 1;
        }
    }
    return nb;
}

function checkidentifiant(str) {
    "use strict";
    var regex = new RegExp('^[a-z]{5,12}$');
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}


function verification() {
    "use strict";
    
    var age = document.getElementById("Age"),
        prenom = document.getElementById("Prenom"),
        nom = document.getElementById("Nom"),
        identifiant = document.getElementById("Id"),
        mdp1 = document.getElementById("password"),
        mdp2 = document.getElementById("confirmpassword"),
        cgu = document.getElementById("CGU");
    

    if (!checkAge(age.value)) {
        age.setAttribute("class", 'false');
    }
    checkidentifiant(String(identifiant.value));
    
    
    
}

function initialisation() {
    "use strict";
    document.getElementById("form").addEventListener('change', verification);
}



window.addEventListener("load", initialisation);