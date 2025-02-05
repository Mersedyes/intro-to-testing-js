//Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () { // this is the first function with two parameters as well
        expect(typeof helloWorld).toBe('function'); //
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    })
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string "Hello, Jane"', function () { // if pass the argument Jane, should return Jane
        expect(sayHello('Jane')).toBe('Hello, Jane');
    });
    it('should return the string "Hello, Alex"', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex');
    });
    it('should return the string "Hello, Pat"', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat');
    });
    it('should return the string "Hello, World" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})
describe('isFive', function () {
    it('should return a boolean when executed', function () {
        expect(typeof isFive()).toBe('boolean');
    });
})
describe('isEven', function () {
    it('should return a boolean when executed', function () {
        expect(typeof isEven()).toBe('boolean');
    });
})
describe('isVowel', function () {
    it('should return a boolean when executed', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
})
// //need to work on this one some more - a bit more complex for me
// describe('add', function (){
//     it('should return a ', function () {
//
//     });
// })