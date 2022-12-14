// Motive: To check the Probability of a Random number to be odd or even

let isEvenOrOdd = null;
let howManyTimesEvenAndOdd = null;
let listOfRandomNumbers = [];
let randomNumber = 0;
let times0 = 0;
let times1 = 0;
let howManyTimesOdd = 0;
let howManyTimesEven = 0;

function GenrateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}

while (times0 < 100) {
    listOfRandomNumbers.push(GenrateRandomNumber());
    if (randomNumber % 2 == 0) {
        isEvenOrOdd = true;
        howManyTimesEven++
    }
    else {
        isEvenOrOdd = false;
        howManyTimesOdd++
    }

    times0++

    if (times0 == 100) {
        howManyTimesEvenAndOdd = ("Even:Odd " + howManyTimesEven + ":" + howManyTimesOdd)
        console.log(howManyTimesEvenAndOdd);
    }
}