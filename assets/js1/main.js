// Buttons and counter text
// alert("hiiiii")

const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")
const resetButton = document.getElementById("reset")
const counterElement = document.getElementById("counter")


let counter = 0;

function updateCounter() {
    counterElement.textContent = counter;
}

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateCounter();

    }
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
})