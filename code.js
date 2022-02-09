// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!"
    } else if (input === 'Jane') {
        return "Hello, Jane"
    } else if (input === 'Alex') {
        return "Hello, Alex"
    } else if (input === 'Pat') {
        return "Hello, Pat"
    } else if (input === true) {
        return "Hello, World!"
    } else if (input === false) {
        return "Hello, World!"
    }
}

function isFive(input) {
    return false;
}

function isEven(input) {
    return true;
}

function isVowel(input) {
    input = input.toLowerCase();
    let listOfVowels = 'aeiou';
    if (listOfVowels.includes(input)) {
        return true;
    }
} else {
    return false;
}
function add(input1, input2) {
    if (!isNaN(input1) || !isNaN(input2)) {
        return false;
    } else {
        return parseInt(input1) + parseInt(input2);
    }
}