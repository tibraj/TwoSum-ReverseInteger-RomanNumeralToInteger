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

//Roman Numeral to Integer