// Question 1

var weather = "sunny";

// Question 2

var person = {
    gender: "female",
    age: 30
}

// Question 3

var outOfStock = false;

if(outOfStock === true) {
    console.log("Out of Stock")
}

else{
    console.log("In stock");
}

// Question 4

var numbers = [10,20,30,40,50,];
numbers.length;

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Question 5

for(var i = 15; i < 26; i++) {
    console.log(i);
}

// Question 6

for(var i = 15; i < 26; i++) {
    if(i === 20) {
        (console.log(i))
    }
    else{
        (console.log())
    }
}

// Question 7

var pet = [
    {
        type: "cat",
        legs: 4,
        fur: true
    },
    {
        type: "parrot",
        legs: 2,
        fur: false
    }
]

for(var i=0; i < pet.length; i++){
    console.log(pet[i].legs);
    console.log(pet[i].fur);
}

// Question 8

function whatIDontLike(foodIdontlike) {
    console.log("I dont like " + foodIdontlike);
}

whatIDontLike("jalapenos");

// Question 9

function regnestykke(tall1, tall2) {
    var sum = tall2 - tall1;
    console.log(sum);
}

regnestykke(5, 10);

// Question 10

var myArray = [];

function addArray(innHere) {
    myArray.push(innHere);
    console.log(innHere);
}

addArray("test");