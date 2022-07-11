let HTMLinputfields = document.querySelectorAll("input");
let HTMLselects = document.querySelectorAll("select");

//Paramétrer l'affichage des champs HTML selon le type de carte choisi
let lignePrincipale = document.querySelector("#lignePrincipale");
let CBInputField = document.querySelector("#CBInputfield");;
let visaInputField = document.querySelector("#visaInputField");
let MCInputField = document.querySelector("#MCInputField");
let AmExpInputField = document.querySelector("#AmExpInputField");

visaInputField.remove();
MCInputField.remove();
AmExpInputField.remove();



let selectionCarte = document.querySelector("#carteBancaire");


selectionCarte.onchange = function() {
let modeleDeCarte = document.querySelector("#carteBancaire").value;
switch (modeleDeCarte) {
    case "1":
        visaInputField.remove();
        MCInputField.remove();
        AmExpInputField.remove();
        lignePrincipale.insertBefore(CBInputField, document.querySelector("#ExpirationDate"));
        
        break;
    case "2":
        CBInputField.remove();
        MCInputField.remove();
        AmExpInputField.remove();
        lignePrincipale.insertBefore(visaInputField, document.querySelector("#ExpirationDate"));
        break;
    case "3":
        CBInputField.remove();
        visaInputField.remove();
        AmExpInputField.remove();
        lignePrincipale.insertBefore(MCInputField, document.querySelector("#ExpirationDate"));
        break;
    case "4":
        CBInputField.remove();
        MCInputField.remove();
        visaInputField.remove();
        lignePrincipale.insertBefore(AmExpInputField ,document.querySelector("#ExpirationDate"));
        break;
    default:
        break;
;}}


let dateDebutResas = new Date(2022, 06, 17).toISOString().slice(0, 10);
//mettre if statement pour calculer nouvelle date de début universelle en fonction de la date actuelle si date après 16 juillet
let dateFinResas = new Date(2022, 08, 3).toISOString().slice(0, 10);

let calendrierV1 = document.querySelector("#dateArriveeV1");
calendrierV1.max = dateFinResas;
calendrierV1.min = dateDebutResas;
calendrierV1.step = 7;

let calendrierV2 = document.querySelector("#dateArriveeV2");
calendrierV1.max = dateFinResas;
calendrierV1.min = dateDebutResas;
calendrierV1.step = 7;


let villa1 = {
    villaDebutResa: dateDebutResas,
    villaFinResa: dateFinResas,
};
let villa2 = {
    villaDebutResa: dateDebutResas,
    villaFinResa: dateFinResas,
};

let dureeResa = document.querySelector("#dureeSejour").value;
let choixVilla = document.querySelector("#choixVilla").value;

let formulaire = document.querySelector("#form");
formulaire.onsubmit = function () {
    alert("formulaire valide");
    window.open("validation.html");
};



let bp = true;