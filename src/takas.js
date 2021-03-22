var pieejas_kodu_saraksts = ["ZEME33", "EZERS74", "LAUKS99"]
let koda_div = false;

function ieeja(){
    const sms_kods = document.getElementById("sms_kods").value;
    const kods = sms_kods.toUpperCase();
    const modal_div = document.getElementById("modal_div");
    if (pieejas_kodu_saraksts.includes(kods)){
        modal_div.classList.add("modal_div");
    } else{
        console.log("nesanaaca");
    }
}
