var guestArr = ["Ali", "Hania", "Minha"];
var canNotAttend = "Minha";
console.log(canNotAttend + " can not attend the dinner");
var newGuest = "Alishba";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dinner table so i am invited more peoples."));
});
