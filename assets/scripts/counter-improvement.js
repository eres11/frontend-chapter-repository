const hoursBox = document.querySelector(".offer-of-the-month__time-hours");
const minutesBox = document.querySelector(".offer-of-the-month__time-minutes");
const secondsBox = document.querySelector(".offer-of-the-month__time-seconds");
const saleEndDate = new Date('March 9, 2023 10:24:00');


// currentDate.setHours(currentDate.getHours() + 5);

function counter() {
  const now = new Date();

  const remaningDate = saleEndDate - now
  console.log(remaningDate)

  const hours = remaningDate.getHours();
  const minutes = remaningDate.getMinutes();
  const seconds = remaningDate.getSeconds();

  hoursBox.innerHTML = hours;
  minutesBox.innerHTML = minutes;
  secondsBox.innerHTML = seconds;
}

setInterval(counter, 1000);
