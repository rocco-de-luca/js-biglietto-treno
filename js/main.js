// VERIFICA DEL FUNZIONAMENTO DI JS
console.log ( 'Test verifica JS' ) ;

// Il programma deve chiedere all'utente il numero di chilometri che vuole percorrere e il passeggero del passeggero.
// Sulla base di queste informazioni dobbiamo calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0,21 € al km), ma è applicato uno sconto del 20% per i minori e del 40% per gli over 65.
// Mostrare uno schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto.

// Chiedo il numero di Km

var  numeroKm  =  parseInt ( prompt ("Quanti Km devi percorrere?" ) );
console.log ("Km da percorrere",numeroKm + "." ) ;


// I ask for the number of Km
var numKm = parseInt(prompt('how many km do you have to travel?'));
console.log('the km to go are' + numKm);
// I ask the passenger for her age
var userAge = parseInt(prompt('how old are you?'));
console.log('the age of the passenger is ' + userAge);
//I declare the price of ticket for km
var priceKm = 0.21;
console.log (priceKm);
//I calculate the total price of the trip.
var priceTot = numKm * priceKm;
console.log (priceTot);
//20% discount and 40% discount
var  discount20 = priceTot * 20 / 100;
var  finalDiscountPrice20  =  priceTot  - discount20.toFixed(2) + '€';
var  discount40 = priceTot * 40 / 100;
var  finalDiscountPrice40  =  priceTot  - discount40.toFixed(2) + '€';
if(userAge < 18 ){
    priceTot - finalDiscountPrice20;
    document.getElementById('price20%').innerHTML = 'for minors the ticket price is ' + finalDiscountPrice20;
}
else if(userAge >= 65){
    priceTot - finalDiscountPrice40;
    document.getElementById('price40%').innerHTML = 'for over 65s the ticket price is ' + finalDiscountPrice40;
}
else{
    'the price is ' + priceTot;
    document.getElementById('pricewithoutdiscount').innerHTML = 'price without discount ' + priceTot;
}