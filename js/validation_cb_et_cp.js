document.querySelector(".btn").onclick = (evt) => {
  evt.preventDefault();
  //verification code postal
  let codePostal = document.querySelector("#codePostale").value;
  let regexCP = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  if (regexCP.test(codePostal) == false) {
    document.querySelector(".msg_Cp").innerText = "code postal invalide";
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

  // verification carte bancaire
  let carteBancaire = document.getElementById("carteBancaire").value;
  let numCB = document.getElementById("numeroCB").value;
  if (carteBancaire == "Visa") {
    let regexVisa = /^4\d{3}(| |-)(?:\d{4}\1){2}\d{4}$/;
    if (regexVisa.test(numCB) == false) {
      document.querySelector(".msg_CB").innerText = "carte visa invalide";
    }
  } else if ((carteBancaire = "MasterCard")) {
    let regexMaster = /^5[1-5]\d{2}(| |-)(?:\d{4}\1){2}\d{4}$/;
    if (regexMaster.test(numCB) == false) {
      document.querySelector(".msg_CB").innerText = "carte mastercard invalide";
    }
  } else if ((carteBancaire = "AmExpress")) {
    let regexAE = /^3[47]\d{1,2}(| |-)\d{6}\1\d{6}$/;
    if (regexAE.test(numCB) == false) {
      document.querySelector(".msg_CB").innerText =
        "carte american express invalide";
    }
  }
};
