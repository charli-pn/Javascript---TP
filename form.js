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
    var regex = new RegExp('^[a-zA-Z]{5,12}$');
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
    //document.getElementById("Valider").removeAttribute("disabled");
    var age = document.getElementById("Age"),
        prenom = document.getElementById("Prenom"),
        nom = document.getElementById("Nom"),
        identifiant = document.getElementById("Id"),
        mdp1 = document.getElementById("password"),
        mdp2 = document.getElementById("confirmpassword"),
        cgu = document.getElementById("CGU"),
        valide = 7,
        mdpvalide = false;
    
    // verif Age
    if (!checkAge(age.value) && age.value !== "") {
        age.setAttribute("class", 'false');
        document.getElementById("messageAge").textContent = "Vous devez avoir au moins 18 ans.";
    } else if (checkAge(age.value)) {
        age.removeAttribute("class", 'false');
        document.getElementById("messageAge").textContent = "";
        valide -= 1;
    }
    
    // verif Identifiant
    if (!checkidentifiant(String(identifiant.value)) && identifiant.value !== "") {
        identifiant.setAttribute("class", 'false');
        document.getElementById("messageId").textContent = "Votre identifiant doit mesurer entre 5 et 12 caractères et ne doit contenir que des lettres.";
    } else if (checkidentifiant(String(identifiant.value))) {
        identifiant.removeAttribute("class", 'false');
        document.getElementById("messageId").textContent = "";
        valide -= 1;
    }
    
    //verif mdp
    var messagemdp = "", force = 100;
    document.getElementById("messagemdp").textContent = "";
    if (String(mdp1.value) !== "") {
        if (!checknumber(String(mdp1.value))) {
            messagemdp += "Votre mot de passe doit contenir au moins un chiffre. ";
            force -= 20;
        }
        if (!checkmin(String(mdp1.value))) {
            messagemdp += "Votre mot de passe doit contenir au moins une lettre minuscule. ";
            force -= 20;
        }
        if (!checkmaj(String(mdp1.value))) {
            messagemdp += "Votre mot de passe doit contenir au moins une lettre majuscule. ";
            force -= 20;
        }
        if (!checkcarsing(String(mdp1.value))) {
            messagemdp += "Votre mot de passe doit contenir au moins un caractère spécial. ";
            force -= 20;
        }
        if (String(mdp1.value).length < 8) {
            messagemdp += "Votre mot de passe doit contenir au moins 8 caractères. ";
            force -= 20;
        }
    } else {
        force = 0;
    }
    
    if (force === 100) {
        valide -= 1;
        mdpvalide = true;
        document.getElementById("progress").setAttribute("class", "e"+force);
    } else {
        document.getElementById("messagemdp").textContent = messagemdp;
        document.getElementById("progress").setAttribute("class", "e"+force);
    }
    
    //verif mdp2
    if (mdpvalide) {
        mdp2.removeAttribute("disabled");
        if (mdp1.value === mdp2.value) {
            valide -= 1;
            mdp2.removeAttribute("class", "false");
        } else if (mdp2.value === "") {
            mdp2.removeAttribute("class", "false");
        } else {
            mdp2.setAttribute("class", "false");
        }
    } else {
        mdp2.setAttribute('disabled', true);
    }
    
    //verif cgu
    if(cgu.checked) {
        valide -= 1;
    }
    
    //verif prenom
    if (prenom.value !== "") {
        valide -= 1;
        prenom.removeAttribute("class", "false");
    } else if (valide === 2) {
        prenom.setAttribute("class", "false");
    }
    
    //verif nom
    if (nom.value !== "") {
        valide -= 1;
        nom.removeAttribute("class", "false");
    } else if (valide === 2) {
        nom.setAttribute("class", "false");
    }
    
    
    //verif CGU
    if (valide === 0) {
        document.getElementById("Valider").removeAttribute("disabled");
    }
    console.log(valide);
   
}

function initialisation() {
    "use strict";
    document.getElementById("confirmpassword").setAttribute("disabled", true);
    document.getElementById("Valider").setAttribute("disabled", true);
    document.getElementById("form").addEventListener('change', verification);
}



window.addEventListener("load", initialisation);