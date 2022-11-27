//CHILOMETRI PERCORSI//

let chilometri = parseInt(prompt('Ciao! Per favore inserisci il numero dei km che vorresti percorrere.'))
console.log(chilometri);

//ETA' UTENTE//
let età = parseInt(prompt('Per favore adesso inserisci la tua età, servirà per calcolare il prezzo finale.'))
console.log(età);

//CALCOLO PREZZO BIGLIETTO//

let price_ticket = (0,21);
let num_km = (20);

let total_price = (price_ticket * num_km);
console.log(total_price);

//CONDIZIONI//

if(età < 18){
    console.log('Il cliente avrà uno sconto del 20%');
}
else if(età > 65){
    console.log('Il cliente avrà uno sconto del 40%')
}
else{
    console.log('Il cliente non avrà nessuno sconto')
}

//SCONTI PER CATEGORIE//

let sconto_1 = (total_price * 20) / 100;
console.log(sconto_1);

let sconto_2 = (total_price * 40) / 100;
console.log(sconto_2);

