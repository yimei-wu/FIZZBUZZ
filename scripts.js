// const nMax = 25, fizz = 3, buzz = 5;

let nMax = parseInt(document.getElementById("N").value);
let fizz = parseInt(document.getElementById("Fizz").value);
let buzz = parseInt(document.getElementById("Buzz").value);

console.log("ciao",nMax)
console.log("ciao",fizz)
console.log("ciao",buzz)

const grid = document.getElementsByClassName("grid");

const start = document.querySelector(".button")
start.addEventListener('click', function() {

})

for (let i = 1; i <= nMax; i++) {
    let result = ""
    if (i % fizz === 0) {
        result = "fizz"
    } else if (i % buzz === 0) {
        result = "buzz"
    } else if (i % fizz === 0 && i % buzz === 0) {
        result = "fizzbuzz"
    } else {
        result = i
    }
    console.log(result)
    // createElement
    let cell = document.createElement("div")
    cell.className = "cell"
    cell.textContent = result
    grid[0].appendChild(cell)
}

