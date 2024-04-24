// Exercise 30: Hello Admin
var usernames = ['Admin', 'Eric', 'Alize', 'Alina', 'Hania'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'Admin') {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
