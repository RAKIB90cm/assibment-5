
let count = 0;

// set left 
let seat = 40;

// total Seat
let seatElement = 0;

// total price 
let perSeatPrice = 0;

// grand total 
let totalGrand = 0;

const allsets = document.getElementsByClassName('seat');
for (let i of allsets) {
    i.addEventListener('click', function () {
        if (count < 4) {
            count++;
            // set bg color
            i.classList.add('bg-[#1DD100]');

            // set left 
            seat--;
            const leftSeat = document.getElementById('left-seat');
            leftSeat.innerText = seat;

            // total Seat
            seatElement++;
            const totalSeat = document.getElementById('total-seat');
            totalSeat.innerText = seatElement;

            // total price 
            const price = document.getElementById('total-price');
            perSeatPrice += 550;
            price.innerText = perSeatPrice;

            // grand total 
            const grandTotal = document.getElementById('grand-total');
            totalGrand += 550;
            grandTotal.innerText = totalGrand;

            // append child 
            const para = document.createElement('p');
            para.innerHTML = i.innerHTML;
            document.getElementById('appnd').appendChild(para);

            

        }
    })
}