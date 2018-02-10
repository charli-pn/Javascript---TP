function checkAge(age) {
    "use strict";
    if (age < 18) {
        return false;
    } else {
        return true;
    }
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

function checknumber(str) {
    "use strict";
    var i = 0,
        nb = 0;
    for (i; i < str.length; i += 1) {
        if (str[i].match(/[0-9]/)) {
            nb += 1;
        }
    }
    return nb > 0;
}

function checkmin(str) {
    "use strict";
    var i = 0,
        nb = 0;
    for (i; i < str.length; i += 1) {
        if (str[i].match(/[a-z]/)) {
            nb += 1;
        }
    }
    return nb > 0;
}

function checkmaj(str) {
    "use strict";
    var i = 0,
        nb = 0;
    for (i; i < str.length; i += 1) {
        if (str[i].match(/[A-Z]/)) {
            nb += 1;
        }
    }
    return nb > 0;
}

function checkcarsing(str) {
    "use strict";
    var i = 0,
        nb = 0;
    for (i; i < str.length; i += 1) {
        if (str[i].match(/[^a-z^A-Z^0-9]/)) {
            nb += 1;
        }
    }
    return nb > 0;
}



function verification() {
    "use strict";
    
    var age = document.getElementById("Age"),
        prenom = document.getElementById("Prenom"),
        nom = document.getElementById("Nom"),
        identifiant = document.getElementById("Id"),
        mdp1 = document.getElementById("password"),
        mdp2 = document.getElementById("confirmpassword"),
        cgu = document.getElementById("CGU"),
        valide = 7;
    
    // verif Age
    if (!checkAge(age.value)) {
        age.setAttribute("class", 'false');
    } else if (checkAge(age.value)) {
        age.setAttribute("class", 'true');
        valide -= 1;
    }
    
    // verif Identifiant
    if (!checkidentifiant(String(identifiant.value))) {
        identifiant.setAttribute("class", 'false');
    } else if (checkidentifiant(String(identifiant.value))) {
        identifiant.setAttribute("class", 'true');
        valide -= 1;
    }
    
    //verif mdp
    var messagemdp = "", force = 100;
    if (!checknumber(String(mdp1.value))) {
        messagemdp += "Votre mot de passe doit contenir au moins un chiffre.\n";
        force -= 20;
    }
    if (!checkmin(String(mdp1.value))) {
        messagemdp += "Votre mot de passe doit contenir au moins une lettre minuscule. \n";
        force -= 20;
    }
    if (!checkmaj(String(mdp1.value))) {
        messagemdp += "Votre mot de passe doit contenir au moins une lettre majuscule.\n";
        force -= 20;
    }
    if (!checkcarsing(String(mdp1.value))) {
        messagemdp += "Votre mot de passe doit contenir au moins un caractère spécial. \n";
        force -= 20;
    }
    if (String(mdp1.value).length < 8) {
        messagemdp += "Votre mot de passe doit contenir au moins 8 caractères.\n";
        force -= 20;
    }
    if (force === 100) {
        valide -= 1;
    } else {
        
    }
    
    
    
}

function initialisation() {
    "use strict";
    document.getElementById("form").addEventListener('change', verification);
}



window.addEventListener("load", initialisation);