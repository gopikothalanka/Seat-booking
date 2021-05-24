'use strict';

const movieSelect = document.getElementById('movie');

const seats =document.querySelectorAll('.row .seat:not(.occupied)');
const count =document.getElementById('count');
const total =document.getElementById('total');
const container = document.querySelector('.screen-container');

console.log('hello');

var ticketPrice = +movieSelect.value;

//functions

const seatSelectedCount = function () {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
 
  const seatsCount=selectedSeats.length;
  count.innerText=seatsCount;
  total.innerText=seatsCount*ticketPrice;
}

//event listener
// seat selection
 container.addEventListener('click',(e) =>{if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
 {
  e.target.classList.toggle('selected');
 }
    seatSelectedCount()
    
 })

 //movie change 

 movieSelect.addEventListener('click',(e)=>{
    ticketPrice=+e.target.value;
    console.log(ticketPrice);
    seatSelectedCount()

    
 })


 //preselected seats update
 seatSelectedCount()