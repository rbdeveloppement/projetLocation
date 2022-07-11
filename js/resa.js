let HTMLinputfields = document.querySelectorAll("input");
let HTMLselects = document.querySelectorAll("select");
for (const input of HTMLinputfields) {
    input.setAttribute("required", true);
}

for (const select of HTMLselects) {
    select.setAttribute("required", true);
}


let dateDebutResas = new Date(2022, 06, 17).toISOString().slice(0,10);
//mettre if statement pour calculer nouvelle date de début universelle en fonction de la date actuelle si date après 16 juillet
let dateFinResas = new Date(2022, 08, 3).toISOString().slice(0,10);

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

let bp = true;