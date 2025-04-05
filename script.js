let countMatcha = 0;
let countEl = document.querySelector("#countMatchaValue");
console.log(countEl.innerHTML);
console.log(countMatcha);

let addButton = document.querySelector("#add");
let subtractButton = document.querySelector('#subtract');
let resetButton = document.querySelector('#reset');
// console.log(addButton.innerHTML) 

// Event listener is you go add the action type and then the function when that happens
addButton.addEventListener("click", increaseMatcha);
function increaseMatcha () {
    countMatcha += 1;
    countEl.innerHTML = countMatcha;
}

subtractButton.addEventListener("click", decreaseMatcha)
function decreaseMatcha () {
    countMatcha -= 1;
    countEl.innerHTML = countMatcha;
}

resetButton.addEventListener("click", resetMatcha)
function resetMatcha () {
    countMatcha = 0;
    countEl.innerHTML = countMatcha;
}