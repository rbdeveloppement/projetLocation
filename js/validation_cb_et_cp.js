//verification date de validité de la CB

let dateCB = false;

document.querySelector(".btn").onclick = (evt) => {
    evt.preventDefault();
let moisValide = document.querySelector("#moisExpCarte").value;
let anneeValide = document.querySelector("#annee").value;
    if(anneeValide == 2022 && moisValide < 07 || anneeValide < 2022){
        document.querySelector(".msg_cbDate").innerText ="date d'invalidité atteinte";
    }else{
        dateCB = true;
    }
}