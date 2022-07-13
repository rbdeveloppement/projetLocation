
let formulaire = document.querySelector("#form");


const DateTime = easepick.DateTime;

let HTMLinputfields = document.querySelectorAll("input");
let HTMLselects = document.querySelectorAll("select");

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

//Recupérer et ajouter les dates dans les tableaux de réservation

let bookedDatesV1 = []
let bookedDatesV2 = [];
let bookedDates = bookedDatesV1;   //Bonne nouvelle, j'ai résolu ce bug

localStorageData = localStorageData[0]


if(localStorageData.length > 0){
for (let i = 0; i < localStorageData.length; i++) {
    if (localStorageData[i][0].startsWith('maisonChoisie') && localStorageData[i][1] == 1) {
        let datesAsStrings = localStorageData[i + 1][1];
        let datesArray = datesAsStrings.split(" au ");
        bookedDatesV1Strings.push(datesArray);
    }
    else if (localStorageData[i][0].startsWith('maisonChoisie') && localStorageData[i][1] == 2) {
        let datesAsStrings = localStorageData[i + 1][1];
        let datesArray = datesAsStrings[1].split(" au ");
        bookedDatesV2Strings.push(datesArray);
    }
    else {
        continue;
    }
}}

bookedDatesV1.map(d => {
    if (d instanceof Array){
        const start = new DateTime(d[0], 'DD-MM-YYYY');
        const end = new DateTime(d[1], 'DD-MM-YYYY');
        return [start, end];
    }
    return new DateTime(d, "DD-MM-YYYY");

} );

bookedDatesV2.map(d => {
    if (d instanceof Array){
        const start = new DateTime(d[0], 'DD-MM-YYYY');
        const end = new DateTime(d[1], 'DD-MM-YYYY');
        return [start, end];
    }
    return new DateTime(d, "DD-MM-YYYY");

} );


let choixVilla = document.getElementById("choixVilla");
choixVilla.onchange = () => {
    if (choixVilla.value = 1) {
        bookedDates = bookedDatesV1;
    }
    else {
        bookedDates = bookedDatesV2;
    }
}

//Active le champ CB lorsqu'une valeur de carte est choisie:
let CBfield = document.getElementById("numeroCB");
let choixModele = document.getElementById("carteBancaire")

choixModele.onchange = function () {
    if (choixModele.value != "CB") {
        CBfield.disabled = false;
    }
    else {
        CBfield.disabled = true;
    }
}


//Calendriers, dates, etc

let datMinV1 = new Date("2022-07-16"), datMinV2 = datMinV1;
let datMaxV1 = new Date("2022-08-27"), datMaxV2 = datMaxV1;


//calendriers = modifier les variables associées aux clés AVANT l'exécution de ce code!
const pickerVilla = new easepick.create({
    element: document.getElementById('dateArrivee'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css',
    ],
    lang: 'fr-FR',
    format: 'DD-MM-YYYY',
    plugins: ['LockPlugin', 'RangePlugin'],
    LockPlugin: {
        filter(date, picked){
            if (picked.length === 1) {
                const incl = date.isBefore(picked[0]) ? "[)" : "(]";
                return (
                  !picked[0].isSame(date, "day") && date.inArray(bookedDates, incl));
              }
              return date.inArray(bookedDates, "[)");
        },
    minDate: datMinV1, maxDate: datMaxV1, inseparable: true, minDays: 7, maxDays: 28,
    },
    RangePlugin: { delimiter: " au ", }
});


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