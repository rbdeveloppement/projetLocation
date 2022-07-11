document.querySelector(".btn").onclick = (evt) => {
  evt.preventDefault(); 
  //verification code postal
  let codePostal = document.querySelector("#codePostale").value;
  let regexCP = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  if (regexCP.test(codePostal) == false) {
    document.querySelector(".msg_Cp").innerText = "code postal invalide";
  }
  // verification carte bancaire
  let carteBancaire = document.querySelector("#carteBancaire").value;
  let regexCB =
    /(^5[1-5]|^4|^3[47])|(^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5])))\d+/;
  if (regexCB.test(carteBancaire) == false) {
    document.querySelector(".msg_CB").innerText = "carte bancaire invalide";
  }
  // vérification téléphone
  let telephone = document.querySelector("#tel").value;
  let regextel =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
  if (regextel.test(telephone) == false) {
    document.querySelector(".msg_tel").innerText =
      "numéro de téléphone invalide";
  }
  // vérification mail
  let adresseMail = document.querySelector("#mail").value;
  let regexmail =
    /^[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)*@[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)+$/i;
  if (regexmail.test(adresseMail) == false) {
    document.querySelector(".msg_mail").innerText = "adresse e-mail invalide";
  }
};
