
function snapCrackle (max) {
    let output = ""
    for (let count = 1; count <= max; count += 1) {
        let isOdd = count % 2 !== 0
        let isMultipleOf5 = count % 5 === 0
        
        // If COUNT is odd but not a multiple of 5, add "Snap"
        if (isOdd === true && isMultipleOf5 === false) {
            output += "Snap, "

        // If COUNT is even and IS a multiple of 5, add "Crackle"
        } else if (isOdd === false && isMultipleOf5 === true) {
            output += "Crackle, "

        // If COUNT is odd AND a multiple of 5, add "SnapCrackle"
        } else if (isOdd === true && isMultipleOf5 === true) {
            output += "SnapCrackle, "

        // If COUNT is even AND is not a multiple of 5, add the number
        } else if (isOdd === false && isMultipleOf5 === false) {
            output += `${count}, `
        }

    }

    return output
}

document.write(snapCrackle(100))