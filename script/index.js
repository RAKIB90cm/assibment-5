// click only 4 seat 
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
            const para1 = document.createElement('p');
            const para2 = document.createElement('p');
            const para3 = document.createElement('p');

            para1.innerText = i.innerHTML;
            para2.innerText = 'Economy';
            para3.innerText = 550;

            const li = document.createElement('li');
            li.appendChild(para1);
            li.appendChild(para2);
            li.appendChild(para3);
            console.log(li);

            const v = document.getElementById('appnd');
            v.appendChild(li);

            li.style.display = 'flex';
            li.style.justifyContent = 'space-evenly';
        }
    })
}

document.getElementById('modle-btn').addEventListener('click', function () {
    const t = document.getElementById('next');
    t.classList.remove('hidden');
    t.classList.add('');
})