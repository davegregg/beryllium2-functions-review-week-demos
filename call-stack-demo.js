function add (x, y) {
    return x + y
}

function multiply (x, y) {
    if (x < 0 || y < 0) {
        throw new Error("multiply() requires inputs to be positive numbers or zero.")
    }

    let total = 0
    for (let count = 0; count < y; count += 1) {
        total = add(total, x)
    }

    return total
}

console.log(multiply(3, 4) === 12)
console.log(multiply(3, 3) === 9)
console.log(multiply(3, 0) === 0)
console.log(multiply(3, -1) === -3) // FIX: Handle negative numbers

// 3 * 4 === 12
// 0 + 3 + 3 + 3 + 3 === 12
// 0 + 4 + 4 + 4 === 12


function square (x) {
    return multiply(x, x)
}

console.log(square(3) === 9)
console.log(square(4) === 16)
console.log(square(5) === 25)



