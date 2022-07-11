//verification adresse mail

document.querySelector(".btn").onclick = (evt) => {
    evt.preventDefault();
let adresseMail = document.querySelector("#mail").value;
let regexmail = /^[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)*@[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)+$/i;
    if(regexmail.test(adresseMail) == false){
        document.querySelector(".msg_Cp").innerText ="adresse e-mail invalide";
    }

//verification Téléphone

    let telephone = document.querySelector("#tel").value;
    let regextel =/^(?:(?:+|00)33[\s.-]{0,3}(?:(0)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
        if(regextel.test(telephone) == false){
            // document.querySelector(".msg_Cp").innerText ="numéro de téléphone invalide";
            alert("tel faux");
        }
}

