let HTMLinputfields = document.querySelectorAll("input");
let HTMLselects = document.querySelectorAll("select");

//Récupération des données de la session précédente

//1.Récupérer numéro de la réservation
let numeroReservationJSON = localStorage.getItem("numeroReservation");
let numeroReservation = JSON.parse(numeroReservationJSON);
if (numeroReservation == null){
    numeroReservation = 0;
}

//2.récupérer l'ensemble des informations enregistrées dans localStorage
let localStorageData = [];
for (let index = 0; index < localStorage.length; index++) {
    localStorageData.push(Object.entries(localStorage)); 
}
//Parse les clés et valeurs pour convertir en JS strings
for (let i = 0; index < localStorageData.length; i++) {
    const element = localStorageData[i];
    for (let j = 0; index < element.length; j++) {
        const item = JSON.parse(element[j]);
    }
}


//Active le champ CB lorsqu'une valeur de carte est choisie:
let CBfield = document.getElementById("numeroCB");
let choixModele = document.getElementById("carteBancaire")

choixModele.onchange = function(){
    if (choixModele.value != "CB"){
        CBfield.disabled = false;
    }
    else{
        CBfield.disabled = true;
    }
   
    
};
//Evènement lorsque formulaire valide
let formulaire = document.querySelector("#form");
formulaire.onsubmit = function () {

    alert("formulaire valide");
    window.open("validation.html");
    //Sauvegarde des données
    let nom = document.querySelector("#nom").value;
    localStorage.setItem(`nom${numeroReservation}`, nom);
    let prenom =  document.querySelector("#prenom").value;
    localStorage.setItem(`prenom${numeroReservation}`, prenom);
    let telephone = document.querySelector("#tel").value;
    localStorage.setItem(`telephone${numeroReservation}`, telephone);
    let maisonChoisie = document.querySelector("#choixVilla").value;
    localStorage.setItem(`maisonChoisie${numeroReservation}`, maisonChoisie);
    let datesDeResas = document.querySelector("#dateArrivee").value;
    localStorage.setItem(`datesDeResas${numeroReservation}`, datesDeResas);
    numeroReservation++;
    localStorage.setItem("numeroReservation", JSON.stringify(numeroReservation));

};

//Calendriers, dates, etc

let datMinV1 = new Date("2022-07-16"), datMinV2 = datMinV1;
let datMaxV1 = new Date("2022-08-27"); datMaxV2 = datMaxV1;

let listeSamedisV1 = [
    '16-07-2022', '23-07-2022', '30-07-2022', '06-08-2022', '13-08-2022', '20-08-2022', '27-08-2022'
];
let listeSamedisV2 = listeSamedisV1;

let changeMin = function(MinDate){
    let ajd = new Date();
    let firstDateAvailable = ajd;
    if (firstDateAvailable.getTime() - MinDate.getTime() >= 0) {
    let ajdJour = firstDateAvailable.getDay();
    if (ajdJour === 6) {
        MinDate = new Date(firstDateAvailable.getTime() + 7 * msPerDay);
    }
    else {
        MinDate = new Date((firstDateAvailable.getTime() + (7 - ajdJour)) * msPerDay);
    }
}
}

changeMin(datMinV1);
changeMin(datMinV2);


//calendriers = modifier les variables associées aux clés AVANT l'exécution de ce code!
const pickerVilla = new easepick.create({
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