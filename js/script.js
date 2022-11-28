//CHILOMETRI PERCORSI//

let chilometri = parseInt(prompt('Ciao! Per favore inserisci il numero dei km che vorresti percorrere.'))
console.log(chilometri);

//ETA' UTENTE//
let eta = parseInt(prompt('Per favore adesso inserisci la tua età, servirà per calcolare il prezzo finale.'))
console.log(eta);

//CALCOLO PREZZO BIGLIETTO//

let price_ticket = (0,21);
let num_km = (20);

let total_price = (price_ticket * num_km);
console.log(total_price);

//CONDIZIONI//

if(eta < 18){
    console.log('Il cliente avrà uno sconto del 20%');
    let sconto_1 = total_price * 20 / 100;
    total_price = total_price - sconto_1;
    console.log(sconto_1);
}
else if(eta > 65){
    console.log('Il cliente avrà uno sconto del 40%')
    let sconto_2 = total_price * 40 / 100;
    total_price = total_price - sconto_2;
}
else{
    console.log('Il cliente non avrà nessuno sconto')
}

//SCONTI PER CATEGORIE//

let sconto_1 = (total_price * 20) / 100;
console.log(sconto_1);

let sconto_2 = (total_price * 40) / 100;
console.log(sconto_2);

