
var theHours = new Date().getHours();
var mesaj;
var dimineata = ( 'Bună Dimineața și bun venit la' );
var dupamiaza = ( 'Bună ziua și bun venit la' );
var seara = ( 'Bună seara și bun venit la' );

if ( theHours >= 0 && theHours <12){
    mesaj = dimineata;}
else if ( theHours >= 12 && theHours <18 ){
    mesaj = dupamiaza;}
else{
    mesaj = seara;
}
document.querySelector("#buna").innerHTML = mesaj;

