
const DateTime = easepick.DateTime;

//Récupération des données de la session précédente

//1.Récupérer numéro de la réservation
let numeroReservationJSON = localStorage.getItem("numeroReservation");
let numeroReservation = JSON.parse(numeroReservationJSON);
if (numeroReservation == null) {
    numeroReservation = 0;
}

//2.récupérer l'ensemble des informations enregistrées dans localStorage
let localStorageData = [];
localStorageData.push(Object.entries(localStorage));


// //Parse les clés et valeurs pour convertir en JS strings
// for (let i = 0; i < localStorageData.length; i++) {
//     const element = localStorageData[i];
//     for (let j = 0; j < element.length; j++) {
//         const item = JSON.parse(element[j]);
//     }
// }

//Recupérer et ajouter les dates dans les tableaux de réservation



let choixVilla = document.getElementById("choixVilla");
choixVilla.onchange = () => {
    if (choixVilla.value = 1) {
        bookedDates = bookedDatesV1;
    }
    else {
        bookedDates = bookedDatesV2;
    }
}

//Calendriers, dates, etc

let datMinV1 = new Date(), datMinV2 = datMinV1;
let datMaxV1 = new Date("2022-08-27"), datMaxV2 = datMaxV1;


//calendriers = modifier les variables associées aux clés AVANT l'exécution de ce code!
const pickerVilla = new easepick.create({
    element: document.getElementById('dateArrivee'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
    ],
    lang: 'fr-FR',
    format: 'DD/MM/YYYY',
    plugins: ['LockPlugin', 'RangePlugin'],
    LockPlugin: {
        filter(date, picked) {
        return bookedDates.includes(date.format('DD/MM/YYYY'));
      },
    minDate: datMinV1, 
    maxDate: datMaxV1, 
    inseparable: true, 
    minDays: 7, 
    maxDays: 28
    },
    RangePlugin: { delimiter: " au ", }
});

//REGEX, VALIDATION FORMULAIRE, ETC


//Active le champ CB lorsqu'une valeur de carte est choisie:
let CBfield = document.getElementById("numeroCB");
let choixModele = document.getElementById("carteBancaire")

choixModele.onchange = function () {
    if (choixModele.value != "CB") {
        CBfield.disabled = false;
    }
    else {
        CBfield.disabled = true;
    }}


//Evènement lorsque formulaire valide
// let formulaire = document.querySelector("#form");
// formulaire.onsubmit = (event) => {
//     event.preventDefault();}

function Validationformulaire(){
    alert("formulaire valide");
    window.open("validation.html");
    //Sauvegarde des données
    let nom = document.querySelector("#nom").value;
    localStorage.setItem(`nom${numeroReservation}`, nom);
    let prenom = document.querySelector("#prenom").value;
    localStorage.setItem(`prenom${numeroReservation}`, prenom);
    let telephone = document.querySelector("#tel").value;
    localStorage.setItem(`telephone${numeroReservation}`, telephone);
    let maisonChoisie = document.querySelector("#choixVilla").value;
    localStorage.setItem(`maisonChoisie${numeroReservation}`, maisonChoisie);
    let datesDeResas = document.querySelector("#dateArrivee").value;
    localStorage.setItem(`datesDeResas${numeroReservation}`, datesDeResas);
    numeroReservation++;
    localStorage.setItem("numeroReservation", JSON.stringify(numeroReservation));
    let bp = true;

};



//Evènement lorsque formulaire valide
// let formulaire = document.querySelector("#form");
// formulaire.onsubmit = (event) => {
//     event.preventDefault();}

// function Validationformulaire(){
//     alert("formulaire valide");
//     window.open("validation.html");
//     //Sauvegarde des données
//     let nom = document.querySelector("#nom").value;
//     localStorage.setItem(`nom${numeroReservation}`, nom);
//     let prenom = document.querySelector("#prenom").value;
//     localStorage.setItem(`prenom${numeroReservation}`, prenom);
//     let telephone = document.querySelector("#tel").value;
//     localStorage.setItem(`telephone${numeroReservation}`, telephone);
//     let maisonChoisie = document.querySelector("#choixVilla").value;
//     localStorage.setItem(`maisonChoisie${numeroReservation}`, maisonChoisie);
//     let datesDeResas = document.querySelector("#dateArrivee").value;
//     localStorage.setItem(`datesDeResas${numeroReservation}`, datesDeResas);
//     numeroReservation++;
//     localStorage.setItem("numeroReservation", JSON.stringify(numeroReservation));
//     let bp = true;

// };
