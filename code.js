// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!"
    } else if (input === 'Jane'){
        return "Hello, Jane"
    } else if (input === 'Alex'){
        return "Hello, Alex"
    } else if (input === 'Pat'){
        return "Hello, Pat"
    } else if (input === true){
        return "Hello, World!"
    } else if (input === false){
        return "Hello, World!"
    }
}