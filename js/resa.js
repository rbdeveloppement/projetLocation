let dateDebutResas = new Date(2022, 06, 17).toISOString().slice(0,10);
let dateFinResas = new Date(2022, 08, 3).toISOString().slice(0,10);

let calendrier = document.querySelector("#dateArrivee");
calendrier.max = dateFinResas; 
calendrier.min = dateDebutResas;
calendrier.step = 7;



let villa1 = {};
let villa2 = {};