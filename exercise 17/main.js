var guestArr = ["Imran", "Hania", "Minha", "Alishba", "Ahmed", "Ali", "Rayan"];
console.log(guestArr);
console.log("Sorry, the new dinner table won't arrive in time. I can only invite two people for dinner.");
while (guestArr.length > 2) {
    var removedGuest = guestArr.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
console.log(guestArr);
guestArr.forEach(function (item) { return console.log("Dear ".concat(item, ", You are still invited to the dinner.")); });
guestArr.splice(0, 2);
console.log(guestArr);
