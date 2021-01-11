//Two Sum
function twoSum(array, target) {
    const previousValues = {};
    for(let i= 0; i < array.length; i++) {
        let currentNumber = array[i];
        let neededValue = target - currentNumber;
        let index2 = previousValues[neededValue];
        if(index2 !== null) {
            return {index2, 1}
        } else {
            previousValues[currentNumber] = i;
        }
    }
}

//Reverse Integer
function reverse(x) {
    if(x < 0) {
        x = x * -1
    }
    let reversed = 0;
    while(x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = parseInt(x / 10);
    }
    return reversed;
}
//Roman Numeral to Integer