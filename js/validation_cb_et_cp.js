
//verification date de validité de la CB
let cpIsOk = false;
let telIsOk = false;
let mailIsOk = false;
let visaIsOk = false;
let masterIsOk = false;
let AmExpisOk = false;
let dateCB = false;



// document.querySelector(".btn").onclick = (evt) => {
//     evt.preventDefault();
// let moisValide = document.querySelector("#moisExpCarte").value;
// let anneeValide = document.querySelector("#annee").value;
//     if(anneeValide == 2022 && moisValide < 07 || anneeValide < 2022){
//         document.querySelector(".msg_cbDate").innerText ="date d'invalidité atteinte";
//     }else{
//         dateCB = true;
//     }
// }



document.getElementById("form").onsubmit = (evt) => {
  evt.preventDefault();
  //verification code postal
  let codePostal = document.getElementById("codePostale").value;
  let regexCP = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  cpIsOk = regexCP.test(codePostal);
  if (cpIsOk == false) {
    document.querySelector(".msg_Cp").innerText = "code postal invalide";
  }
  else{
    cpIsOk = true;
    document.querySelector(".msg_Cp").innerText = "";
  }

  // vérification téléphone
  let telephone = document.getElementById("tel").value;
  let regextel =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
  telIsOk = regextel.test(telephone);
  if (telIsOk == false) {
    document.querySelector(".msg_tel").innerText =  "numéro de téléphone invalide";
  }
  else{
    telIsOk = true;
    document.querySelector(".msg_tel").innerText = "";
  }
  // vérification mail
  let adresseMail = document.getElementById("mail").value;
  let regexmail =
    /^[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)*@[-!#-'*+\/-9=?^-~]+(?:\.[-!#-'*+\/-9=?^-~]+)+$/i;
  mailIsOk = regexmail.test(adresseMail);
  if (mailIsOk == false) {
    document.querySelector(".msg_mail").innerText = "adresse e-mail invalide";
  }
  else{
    mailIsOk = true;
    document.querySelector(".msg_mail").innerText = "";
  }

  // verification carte bancaire
  let carteBancaire = document.getElementById("carteBancaire").value;
  let numCB = document.getElementById("numeroCB").value;
  let numCBisOk = false;
  if (carteBancaire == "Visa") {
    let regexVisa = /^4\d{3}(| |-)(?:\d{4}\1){2}\d{4}$/;
    visaIsOk = regexVisa.test(numCB);
    if (visaIsOk == false) {
      document.querySelector(".msg_CB").innerText = "carte visa invalide";
    }
    else{
      numCBisOk = true;
      document.querySelector(".msg_CB").innerText = ""
    }

  } else if ((carteBancaire = "MasterCard")) {
    let regexMaster = /^5[1-5]\d{2}(| |-)(?:\d{4}\1){2}\d{4}$/;
    masterIsOk = regexMaster.test(numCB);
    if (masterIsOk == false) {
      document.querySelector(".msg_CB").innerText = "carte mastercard invalide";
    }
    else{
      numCBisOk = true;
      document.querySelector(".msg_CB").innerText = ""
    }
  } else if ((carteBancaire = "AmExpress")) {
    let regexAE = /^3[47]\d{1,2}(| |-)\d{6}\1\d{6}$/;
    AmExpisOk = regexAE.test(numCB);
    if (AmExpisOk == false) {
      document.querySelector(".msg_CB").innerText =
        "carte american express invalide";
    }
    else{
      numCBisOk = true;
      document.querySelector(".msg_CB").innerText = ""
    }
  }
  let moisValide = document.querySelector("#moisExpCarte").value;
  let anneeValide = document.getElementById("annee").value;
  if ((anneeValide == 2022 && moisValide < 07) || (anneeValide < 2022)) {
    dateCB = false;
    document.querySelector(".msg_cbDate").innerText =
      "date d'invalidité atteinte";
    }
   else {
    dateCB = true;
    document.querySelector(".msg_cbDate").innerText = "";
  }

  if(cpIsOk && telIsOk && mailIsOk && numCBisOk && dateCB ){
    Validationformulaire();
    evt.returnValue = true;
  }
  
  
};

