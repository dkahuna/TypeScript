// explicit types
var character;
var age;
var isLoggedIn;
character = "Link";
console.log(character);
// functions
var greet;
greet = function () {
    console.log("hello, world");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(10, 20);
