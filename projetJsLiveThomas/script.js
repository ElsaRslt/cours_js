function CalculGain(){

    checkInput();
    
    let myForm = document.getElementById("formCalculGain");
    let formObj = new FormData(myForm);

    let tauxHoraire = formObj.get('TH');
    let tauxJournalier = formObj.get('TJM');
    let extras = formObj.get('Extras');

    let qtetauxHoraire = formObj.get('QteTH');
    let qtetauxJournalier = formObj.get('QteTJM');
    let qteextras = formObj.get('QteExtras');

    let charge = formObj.get('Charges');

    let gainHeure = tauxHoraire * qtetauxHoraire;

    let gainJour = tauxJournalier * qtetauxJournalier;

    let gainextra = extras * qteextras;

    let totalBrut = gainHeure+gainJour+gainextra;

    
    let chargeADeduire = ( totalBrut * (charge/100));

    let totalNet = totalBrut - chargeADeduire;


    document.getElementById("resultatBrut").innerHTML = totalBrut.toFixed(2) + " €";
    document.getElementById("resultatDifference").innerText = chargeADeduire.toFixed(2) + " €";
    document.getElementById("resultatNet").innerText = totalNet.toFixed(2) + " €";
}   



function checkInput(){
    let mesInput = document.querySelectorAll('#formCalculGain input.form-control');
    mesInput.forEach(monInput => {
        if(monInput.value < 0){
            monInput.value = 0;
        }
    });
}

let btn = document.getElementById("buttonValidation");
btn.addEventListener('click', CalculGain);

let mesImput = document.querySelectorAll('#formCalculGain input.form-control')
mesImput.forEach(monInput => {
    monInput.addEventListener('change',CalculGain);
    monInput.addEventListener('keyup',CalculGain);
})

