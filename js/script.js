//RICHIESTA DEI CHILOMETRI PERCORSI//

let chilometri = parseInt(prompt('Ciao! Per favore inserisci il numero dei km che vorresti percorrere.'))
console.log(chilometri);

//RICHIESTA DELL'ETA' DEL CLIENTE//
let eta = parseInt(prompt('Per favore adesso inserisci la tua età, servirà per calcolare il prezzo finale.'))
console.log(eta);

//CALCOLO PREZZO BIGLIETTO//

let price_ticket = 0.21 * chilometri;
console.log(price_ticket);

let total_price = (price_ticket * chilometri);
console.log(total_price);

//CONDIZIONI//
//SCONTI//

if(eta < 18){
    let sconto_1 = total_price * 20 / 100;
    total_price = total_price - sconto_1;
    console.log('Il cliente avrà uno sconto del 20%');
    
}
else if(eta > 65){
    let sconto_2 = total_price * 40 / 100;
    total_price = total_price - sconto_2;
    console.log('Il cliente avrà uno sconto del 40%')
}
else{
    console.log('Il cliente non avrà nessuno sconto')
}






















