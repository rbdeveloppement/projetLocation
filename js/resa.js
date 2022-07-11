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
    case "1": // Carte Bleue
        visaInputField.remove();
        MCInputField.remove();
        AmExpInputField.remove();
        lignePrincipale.insertBefore(CBInputField, document.querySelector("#ExpirationDate"));
        document.querySelector("#numeroCB").required = true;
        break;
    case "2": // Visa
        CBInputField.remove();
        MCInputField.remove();
        AmExpInputField.remove();
        lignePrincipale.insertBefore(visaInputField, document.querySelector("#ExpirationDate"));
        document.querySelector("#numeroCarteVisa").required = true;
        break;
    case "3": //Master Card
        CBInputField.remove();
        visaInputField.remove();
        AmExpInputField.remove();
        lignePrincipale.insertBefore(MCInputField, document.querySelector("#ExpirationDate"));
        document.querySelector("#numeroMasterCard").required = true;
        break;
    case "4":  //American Express
        CBInputField.remove();
        MCInputField.remove();
        visaInputField.remove();
        lignePrincipale.insertBefore(AmExpInputField ,document.querySelector("#ExpirationDate"));
        document.querySelector("#numeroAmericanExpress").required = true;
        break;
    default:
        break;
;}}

//Evènement lorsque formulaire valide

let formulaire = document.querySelector("#form");
formulaire.onsubmit = function () {
    alert("formulaire valide");
    window.open("validation.html");
};

//Calendriers, dates, etc

let datMinV1 = new Date("2022-07-16"), datMinV2 = datMinV1;
let datMaxV1 = new Date("2022-08-27"); datMaxV2 = datMaxV1;

let listeSamedisV1 = [
    '16-07-2022', '23-07-2022', '30-07-2022', '06-08-2022', '13-08-2022', '20-08-2022', '27-08-2022'
];
let listeSamedisV2 = listeSamedisV1;


//calendriers = modifier les variables associées aux clés AVANT l'exécution de ce code!
const pickerVilla1 = new easepick.create({
    element: document.getElementById('dateArriveeV1'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
    ],
    lang: 'fr-FR',
    format: 'DD-MM-YYYY',
    plugins: ['LockPlugin', 'RangePlugin'],
    LockPlugin: { minDate: datMinV1, maxDate: datMaxV1, inseparable: false, minDays: 8, maxDays: 29,
    filter(date, picked){return !listeSamedisV1.includes(date.format('DD-MM-YYYY'));} },
    RangePlugin: {delimiter: " au ",}
});

const pickerVilla2 = new easepick.create({
    element: document.getElementById('dateArriveeV2'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
    ],
    lang: 'fr-FR',
    format: 'DD-MM-YYYY',
    plugins: ['LockPlugin', 'RangePlugin'],
    LockPlugin: { minDate: datMinV2, maxDate: datMaxV2, inseparable: false, minDays: 8, maxDays: 29,
    filter(date, picked){return !listeSamedisV1.includes(date.format('DD-MM-YYYY'));} },
    RangePlugin: {delimiter: " au ",}
});




// let dateDebutResas = new Date(2022, 06, 17).toISOString().slice(0, 10);
// //mettre if statement pour calculer nouvelle date de début universelle en fonction de la date actuelle si date après 16 juillet
// let dateFinResas = new Date(2022, 08, 3).toISOString().slice(0, 10);

// let calendrierV1 = document.querySelector("#dateArriveeV1");
// calendrierV1.max = dateFinResas;
// calendrierV1.min = dateDebutResas;
// calendrierV1.step = 7;

// let calendrierV2 = document.querySelector("#dateArriveeV2");
// calendrierV1.max = dateFinResas;
// calendrierV1.min = dateDebutResas;
// calendrierV1.step = 7;

//Objets??

// let villa1 = {
//     villaDebutResa: dateDebutResas,
//     villaFinResa: dateFinResas,
// };
// let villa2 = {
//     villaDebutResa: dateDebutResas,
//     villaFinResa: dateFinResas,
// };

// let dureeResa = document.querySelector("#dureeSejour").value;
// let choixVilla = document.querySelector("#choixVilla").value;





let bp = true;