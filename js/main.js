// VERIFICA DEL FUNZIONAMENTO DI JS
console.log ( 'Test verifica JS' ) ;

// Il programma deve chiedere all'utente il numero di chilometri che vuole percorrere e il passeggero del passeggero.
// Sulla base di queste informazioni dobbiamo calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0,21 € al km), ma è applicato uno sconto del 20% per i minori e del 40% per gli over 65.
// Mostrare uno schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto.

// Chiedo il numero di Km

var  numeroKm  =  parseInt ( prompt ("Quanti Km devi percorrere?" ) );
console.log ("Km da percorrere",numeroKm + "." ) ;


// Chiedo l' età al passeggero
var  age  =  parseInt ( prompt ( "Qual'è la tua età" ) );
console.log ( "Età del passeggero", age  +  "." );


// dichiaro il prezzo del biglietto a km
var  costoKm = 0.21;
console.log (costoKm);

var  prezzoTot =  numeroKm * costoKm ;
console.log (prezzoTot);

// sconto del 20%
var  sconto20 = prezzoTot * 20 / 100;
var  prezzoFinaleSconto20  =  prezzoTot  -  sconto20.toFixed(2) + '€';
console.log ("Prezzo sconto 20%", sconto20 ) ;
console.log ("Prezzo Finale con sconto" , prezzoFinaleSconto20 ) ;
document.getElementById('prezzoFinaleSconto20').innerHTML = 'per i minorenni il prezzo del biglietto è ' + prezzoFinaleSconto20;


// sconto del 40%
var  sconto40  =  prezzoTot * 40 / 100 ;
var  prezzoFinaleSconto40  =  prezzoTot - sconto40.toFixed(2) + '€';
console.log ( "Prezzo sconto 40%"  ,  sconto40 ) ;
console.log ( "Prezzo Finale con sconto" , prezzoFinaleSconto40 ) ;
document.getElementById('prezzoFinaleSconto40').innerHTML = 'per over 65 il prezzo del tuo biglietto è ' + prezzoFinaleSconto40;