const daysValue = document.querySelector('#days');
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
const countdownDateTime = new Date(2023,2,16,0,0,0).getTime();

function countDown() {
  const dateTimeNow = new Date().getTime();
  let difference = countdownDateTime - dateTimeNow;

  //Days
  const daysValueNumber = Math.floor(difference / (1000 * 60 * 60 * 24));
  //Hours
  const hoursValueNumber = Math.floor(difference / (1000 * 60 * 60) % 24);
  //Minutes
  const minutesValueNumber = Math.floor(difference / (1000 *60) % 60);
  //Seconds
  const secondsValueNumber = Math.floor(difference / (1000) % 60);

  daysValue.innerHTML = daysValueNumber;
  hoursValue.innerHTML = hoursValueNumber;
  minutesValue.innerHTML = minutesValueNumber;
  secondsValue.innerHTML = secondsValueNumber;

  console.log(daysValueNumber, hoursValueNumber, minutesValueNumber, secondsValueNumber);
}

setInterval(countDown, 1000);
