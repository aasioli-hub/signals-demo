import CountService from "./count-service.js";
import { effect } from "./signal.js";

const countService = new CountService();
const count = countService.getCount();

const countDisplay = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset");


effect(() => {
    console.log(`Count changed: ${count()}`);
    countDisplay.textContent = `Count: ${count()}`;
} , [count]);

incrementBtn.addEventListener("click", () => {
    countService.increment();
});

resetBtn.addEventListener("click", () => {
    countService.reset();
});
