//Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() { // this is the first function with two parameters as well
      expect(typeof helloWorld).toBe('function'); //
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it ('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    })
    it('should return the string "sayHello" when executed', function () {
        expect(sayHello()).toBe("sayHello!");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
    }
)