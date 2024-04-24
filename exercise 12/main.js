// Exercise 12: Greetings
var names = ["Ayesha", "Alina", "Ali", "Hania", "Afsheen"];
var greeting = "Hello, ";
// Print a personalized message to each person
for (var i = 0; i < names.length; i++) {
    console.log("".concat(greeting).concat(names[i], "!"));
}
