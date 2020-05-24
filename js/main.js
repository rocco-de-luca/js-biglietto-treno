// VERIFICATION OF THE OPERATION OF JS
console.log ( 'Test verifica JS' ) ;

/**
 * The program must ask the user for the number of kilometers he wants to travel and the age of the passenger.
 Based on this information, I calculate the total trip price.
 The ticket price is defined on the basis of km (€ 0.21 per km), but a discount of 20% for minors and 40% for over 65s is applied.
 I show the ticket price on the screen, also indicating whether a discount has been applied.
 */

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