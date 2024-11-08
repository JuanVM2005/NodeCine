const seats = document.querySelectorAll('.seat');
const selectedSeatsDisplay = document.getElementById('selected-seats');
const totalPriceDisplay = document.getElementById('total-price');
const reserveBtn = document.getElementById('reserve-btn');

const seatPrice = 10;

function updateReservation() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const seatCount = selectedSeats.length;
  const totalPrice = seatCount * seatPrice;

  selectedSeatsDisplay.textContent = `Asientos seleccionados: ${seatCount}`;
  totalPriceDisplay.textContent = `Total: $${totalPrice}`;

  reserveBtn.disabled = seatCount === 0;
}

function toggleSeatSelection(event) {
  const seat = event.target;

  if (seat.classList.contains('available')) {
    seat.classList.toggle('selected');
    updateReservation();
  }
}

function reserveSeats() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  
  selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('reserved');
  });

  updateReservation();
  alert('Reserva realizada con éxito');
}

seats.forEach(seat => {
  seat.addEventListener('click', toggleSeatSelection);
});

reserveBtn.addEventListener('click', reserveSeats);
