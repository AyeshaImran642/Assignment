var guestArr = ["Ali", "Hania", "Minha"];
var canNotAttend = "Minha";
var newGuest = "Alishba";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so i have invited more people."));
});
var guestBeg = "Ahmed";
guestArr.unshift(guestBeg);
console.log(guestArr);
var middleGuest = "Imran";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
guestArr.push("Rayan");
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", You are invited to the dinner with more people present."));
});
