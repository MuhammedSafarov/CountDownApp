import { flipAllCards } from "./main.js";
const countToDate = new Date().setHours(new Date().getHours() + 4);
let previousTimeBetweenDates;
let myInterval;

export const startCountdown = () => {
  myInterval = setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    flipAllCards(timeBetweenDates);
    previousTimeBetweenDates = timeBetweenDates;
  }, 200);
};

export const stopTime = () => {
  clearInterval(myInterval);
};

export const resumeTime = () => {
  clearInterval(myInterval);
  startCountdown();
};
